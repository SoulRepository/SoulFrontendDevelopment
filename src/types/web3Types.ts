import { MetaMask } from '@web3-react/metamask';
import { WalletConnect } from '@web3-react/walletconnect';
import {connectorsName} from "@app/api/web3/connectors";
import {Web3Provider} from "@ethersproject/providers";

export type Connectors = MetaMask | WalletConnect;

export interface IWalletContext {
  activate(
    connector: Connectors,
    name: connectorsName,
    onError?: (error: Error) => void,
    throwErrors?: boolean,
  ): Promise<void>;

  deactivate(): void;

  onChangeNetwork: (chain: number, onSuccess: () => void) => Promise<void>;

  isActive: boolean;

  isUnsupportedChinId?: boolean;
  account?: string;
  chainId?: number;
  provider?: Web3Provider;
}
