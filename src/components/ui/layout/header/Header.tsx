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
import { ThemeToggle } from '@app/components/ui/theme-toggle/ThemeToggle';
import { FC } from 'react';

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

export const Header: FC<IHeaderProps> = ({ isShowBg }) => (
    <Flex as="header" sx={headerStyles(isShowBg)}>
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
      <Flex>
        <WalletButtonConnect className="wallet-button" />
        <ThemeToggle />
      </Flex>
    </Flex>
  );