import { MetaMask } from '@web3-react/metamask';
import { Web3ReactHooks } from '@web3-react/core';
import { WalletConnect } from '@web3-react/walletconnect';
import { hooks as metaMaskHooks, metaMask } from '@app/api/web3/connectors/metaMask';
import { hooks as walletConnectHooks, walletConnect } from '@app/api/web3/connectors/walletConnect';

import { getImgPath } from '@app/utils';
import { Connectors } from '@app/types/web3Types';

export const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
];

export enum connectorsName {
  metaMask = 'metaMask',
  walletConnect = 'walletConnect',
}

export const connectorsByName: Record<connectorsName, [Connectors, Web3ReactHooks]> = {
  [connectorsName.metaMask]: [metaMask, metaMaskHooks],
  [connectorsName.walletConnect]: [walletConnect, walletConnectHooks],
};

export const walletsData = [
  {
    name: connectorsName.metaMask,
    icon: getImgPath('metamask.svg'),
    connector: connectorsByName.metaMask[0],
  },
  {
    name: connectorsName.walletConnect,
    icon: getImgPath('walletConnect.svg'),
    connector: connectorsByName.walletConnect[0],
  },
];

