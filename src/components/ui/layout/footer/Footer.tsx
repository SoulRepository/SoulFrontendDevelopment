import Image from 'next/image';

import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';

import {
  footerMenuStyles,
  footerStyles,
} from '@app/components/ui/layout/footer/footerStyles';
import { getImgPath } from '@app/utils';
import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@app/components/ui/icons';

const supportLinks = [
  { title: 'Career', link: '#' },
  { title: 'Story', link: '#' },
];

const companyLinks = [
  { title: 'FAQ’s', link: '#' },
  { title: 'Support Center', link: '#' },
  { title: 'Contact us', link: '#' },
];

const socialLinks = [
  { title: 'twitter', link: '#', icon: TwitterIcon },
  { title: 'github', link: '#', icon: GithubIcon },
  { title: 'discord', link: '#', icon: DiscordIcon },
  { title: 'instagram', link: '#', icon: InstagramIcon },
  { title: 'youtube', link: '#', icon: YoutubeIcon },
];

export const Footer = () => (
  <Flex sx={footerStyles}>
    <Flex as="footer" sx={footerMenuStyles}>
      <Flex className="desk-column">
        <Image
          width={185}
          height={27}
          src={getImgPath('logo-black.png')}
          alt="logo"
        />
        <Text pt="8px">
          Soul Search is a protocol that enables projects to verify their
          affiliations to protect both themselves and investors
        </Text>
      </Flex>
      <Flex className="links-info">
        <Text className="h3-footer">Support</Text>
        <List className="links-list">
          {supportLinks.map((item, i) => (
            <ListItem key={i}>{item.title}</ListItem>
          ))}
        </List>
      </Flex>
      <Flex className="links-info">
        <Text className="h3-footer">Company</Text>
        <List className="links-list">
          {companyLinks.map((item, i) => (
            <ListItem key={i}>{item.title}</ListItem>
          ))}
        </List>
      </Flex>
      <Flex className="join-news">
        <Text className="h3-footer">Join Newsletter</Text>
        <InputGroup mb="30px">
          <Input
            className="newsletter-input"
            type="email"
            placeholder="Your Email"
          />
          <InputRightElement width="107px">
            <Button className="newsletter-button">Subscribe</Button>
          </InputRightElement>
        </InputGroup>
        <List className="social-list">
          {socialLinks.map(({ icon: Icon }, i) => (
            <ListItem key={i} className="social-item">
              <Icon />
            </ListItem>
          ))}
        </List>
      </Flex>
    </Flex>
    <Flex className="copyright">
      Copyright©2023. Created by <span className="accent">Soul Search</span>
    </Flex>
  </Flex>
);
