import type { MetaMask } from '@web3-react/metamask';
import type { WalletConnect } from '@web3-react/walletconnect';
import type { connectorsName } from '@app/api/web3/connectors';
import type { Web3Provider } from '@ethersproject/providers';
import type { JsonRpcSigner } from '@ethersproject/providers';

export type txType = 'tx' | 'address';

export interface IWalletConnect {
  onToggle: () => void;
  onClose: () => void;
  onOpen: () => void;
}

export type Connectors = MetaMask | WalletConnect;

export interface IWalletContext {
  activate(
    connector: Connectors,
    name: connectorsName,
    onError?: (error: Error) => void,
    throwErrors?: boolean,
  ): Promise<void>;

  deactivate(): void;

  checkIsOwner: (address?: string) => boolean

  onChangeNetwork: (chain: number, onSuccess: () => void) => Promise<void>;

  isActive: boolean;

  isUnsupportedChinId?: boolean;
  account?: string;
  chainId?: number;
  provider?: Web3Provider;
  signer?: JsonRpcSigner;
}
