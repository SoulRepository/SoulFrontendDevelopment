import Link from 'next/link';
import Image from 'next/image';
import { Flex, List, ListItem, Text } from '@chakra-ui/react';

import { headerStyles, menuStyles } from '@app/components/ui/layout/header/header.styles';

import { getImgPath, getShortAddress } from '@app/utils';
import { SmallSearch } from '@app/components/search/small-search/SmallSearch';
import { WalletButtonConnect } from '@app/components/wallet-button-connect/WalletButtonConnect';
import { ThemeToggle } from '@app/components/ui/theme-toggle/ThemeToggle';
import { FC } from 'react';
import { Bullet } from '@app/components/ui';
import { ExitIcon } from '@app/components/ui/icons/ExitIcon';
import { useConnectWalletModal } from '@app/providers/ConnectWalletModalProvider';
import { useWallet } from '@app/api/web3/providers/WalletProvider';
import { useNetworkConfig } from '@app/api/web3/hooks/useNetworkConfig';

const navLinks = [
  {
    title: 'Announcements',
    link: '#',
  },
  {
    title: 'Creators',
    link: '#',
  },
  {
    title: 'Pages',
    link: '#',
  },
];

interface IHeaderProps {
  isShowBg: boolean;
}

export const Header: FC<IHeaderProps> = ({ isShowBg }) => {
  const { onOpen } = useConnectWalletModal();
  const { deactivate, account } = useWallet();
  const { scanTransaction } = useNetworkConfig();

  return (
    <Flex as="header" sx={headerStyles(isShowBg)}>
      <Flex className="logo">
        <Link href="/">
          <Image fill src={getImgPath('logo-white.png')} alt="logo" />
        </Link>
      </Flex>
      <Flex className="search">
        <SmallSearch rgbaBg={!isShowBg} />
      </Flex>
      <Flex>
        <List sx={menuStyles}>
          {navLinks.map((nav, i) => (
            <ListItem key={i} className="menu-item">
              <a href={nav.link}>{nav.title}</a>
            </ListItem>
          ))}
        </List>
      </Flex>
      <Flex className="account-section">
        {account ? (
          <Bullet>
            <Text className="account" onClick={() => scanTransaction(account, 'address')}>
              {getShortAddress(account)}
            </Text>
            <Text className="exit" onClick={deactivate}>
              <ExitIcon />
            </Text>
          </Bullet>
        ) : (
          <WalletButtonConnect className="wallet-button" onClick={onOpen} />
        )}
      </Flex>
      <ThemeToggle ml="5px" />
    </Flex>
  );
};
