import Link from 'next/link';
import Image from 'next/image';
import { Flex, List, ListItem } from '@chakra-ui/react';

import {
  headerStyles,
  menuStyles,
} from '@app/components/ui/layout/header/header.styles';

import { getImgPath } from '@app/utils';
import { SmallSearch } from '@app/components/search/small-search/SmallSearch';
import { WalletButtonConnect } from '@app/components/wallet-button-connect/WalletButtonConnect';
import { ThemeToggle } from '@app/components/ui/theme-toggle/ThemeToggle'

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

export const Header = () => {
  const isShowBg = true;

  return (
    <Flex sx={headerStyles(isShowBg)}>
      <Flex className="logo">
        <Link href="/">
          <Image
            width={185}
            height={27}
            src={getImgPath('logo-white.png')}
            alt="logo"
          />
        </Link>
      </Flex>
      <Flex className="search">
        <SmallSearch />
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
      <Flex>
        <WalletButtonConnect className="wallet-button" />
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};
