import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useSessionStorage } from 'react-use-storage';
import { useWeb3React } from '@web3-react/core';

import { connectorsName, walletsData } from '@app/api/web3/connectors';
import { SUPPORTS_CHAIN_ID } from '@app/api/web3/chains';
import { debuger } from '@app/utils';

import type { Connectors, IWalletContext } from '@app/types/web3Types';

export const SESSION_STORAGE_KEY = 'WalletProvider';

const defaultValues: IWalletContext = {
  activate: () => Promise.resolve(),
  deactivate: () => void 0,
  isActive: false,
  onChangeNetwork: () => Promise.resolve(),
  checkIsOwner: () => false,
};

const WalletContext = createContext(defaultValues);

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const { connector, isActive: isActiveWallet, account, provider, chainId } = useWeb3React();

  const signer = useMemo(() => provider?.getSigner(), [provider]);

  const [error, setError] = useState<Error | undefined>(undefined);
  const [isUnsupportedChinId, setIsUnsupportedChinId] = useState<boolean | undefined>(undefined);

  const [sessionProvider, setSessionProvider, removeSessionProvider] = useSessionStorage<
    string | undefined
  >(SESSION_STORAGE_KEY);

  const isActive = useMemo(
    () => !isUnsupportedChinId && isActiveWallet,
    [isUnsupportedChinId, isActiveWallet],
  );

  useEffect(() => {
    const activeConnector = walletsData.find(con => sessionProvider === con.name);
    if (activeConnector) {
      activeConnector.connector
        .connectEagerly()
        .catch(() => console.log(`Failed to connect eagerly to ${activeConnector.name} wallet`));
    }
  }, []);

  const handleActivate = useCallback(
    async (walletConnector: Connectors, name: connectorsName): Promise<void> => {
      debuger(() => console.log('handleActivate'));
      setError(undefined);
      try {
        await walletConnector.activate();
        setSessionProvider(name);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
          console.error(err.message);
        }
      }
    },
    [setSessionProvider],
  );
  const handleDeactivate = useCallback(() => {
    debuger(() => console.log('handleDeactivate'));

    removeSessionProvider();
    if (connector?.deactivate) {
      void connector.deactivate();
    } else {
      void connector.resetState();
    }
    window.location.reload();
  }, [connector, removeSessionProvider]);

  const handleChangeNetwork = useCallback(
    async (newChain: number, onSuccess: () => void) => {
      debuger(() => console.log('handleChangeNetwork'));
      const hexDecimal = '0x' + newChain.toString(16);

      if (provider) {
        try {
          await provider?.send?.('wallet_switchEthereumChain', [{ chainId: hexDecimal }]);
          onSuccess();
        } catch (e: unknown) {
          const error = e as { code: number };

          // if (error.code === 4902) {
          //   try {
          //     await ethereum.request?.({
          //       method: 'wallet_addEthereumChain',
          //       params: [newChain.params],
          //     });
          //     onSuccess();
          //   } catch (addError) {
          //     console.error(addError);
          //   }
          // }
          console.error(error);
        }
      }
    },
    [provider],
  );

  const checkIsOwner = useCallback(
    (address?: string) => address?.toLowerCase() === account?.toLowerCase(),
    [account],
  );

  useEffect(() => {
    if (!chainId) {
      return void 0;
    }

    if (!SUPPORTS_CHAIN_ID.find(cId => cId === chainId)) {
      setIsUnsupportedChinId(true);
    } else {
      setIsUnsupportedChinId(false);
    }
  }, [chainId]);

  useEffect(() => {
    if (error) {
      handleDeactivate();
    }
  }, [error, handleDeactivate]);

  return (
    <WalletContext.Provider
      value={{
        activate: handleActivate,
        deactivate: handleDeactivate,
        onChangeNetwork: handleChangeNetwork,
        isActive,
        account,
        provider,
        chainId,
        isUnsupportedChinId,
        signer,
        checkIsOwner,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
