import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

import { Footer, Header } from '@app/components/ui/layout';

import { mainPx } from '@app/styles/styleVars';
import { Blur } from '@app/components/ui/blur/Blur';

interface ILayoutProps {
  children?: ReactNode;
  className?: string;
}

type Props = ILayoutProps &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const MainLayout: FC<Props> = ({ children, ...props }) => (
  <Flex flexDir="column" minH="100%" position="relative" {...props}>
    <Header />
    <Flex as="main" px={mainPx} bgColor="#F4F7FA">
      <Blur />
      {children}
    </Flex>
    <Footer />
  </Flex>
);
