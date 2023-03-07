interface BasicChainInformation {
  urls: string[];
  name: string;
  blockExplorerUrls: string;
  symbol: string;
  decimals: number;
  chainId?: number;
}

export const DEFAULT_CHAIN_ID = 80001;

export function getAddChainParameters(chainId: number): BasicChainInformation | number {
  const chainInformation = CHAINS[chainId];
  if (chainInformation) {
    return {
      chainId,
      name: chainInformation.name,
      urls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
      decimals: chainInformation.decimals,
      symbol: chainInformation.symbol,
    };
  } else {
    return chainId;
  }
}

export const CHAINS: { [chainId: number]: BasicChainInformation } = {
  80001: {
    urls: [
      'https://matic-mumbai.chainstacklabs.com',
      'https://matic-testnet-archive-rpc.bwarelabs.com',
    ].filter(url => url !== ''),
    name: 'Mumbai',
    blockExplorerUrls: 'https://mumbai.polygonscan.com/',
    decimals: 18,
    symbol: 'MATIC',
  },
};

export const SUPPORTS_CHAIN_ID = Object.keys(CHAINS).map(chainId => Number(chainId));

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{
  [chainId: number]: string[];
}>((accumulator, chainId) => {
  const validURLs: string[] = CHAINS[Number(chainId)].urls;

  if (validURLs.length) {
    accumulator[Number(chainId)] = validURLs;
  }

  return accumulator;
}, {});
