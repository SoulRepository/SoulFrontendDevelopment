import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

import { Footer, Header } from '@app/components/ui/layout';

import { mainPx } from '@app/styles/styleVars';

interface ILayoutProps {
  children?: ReactNode;
  className?: string;
}

type Props = ILayoutProps &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const MainLayout: FC<Props> = ({ children, ...props }) => (
  <Flex flexDir="column" minH="100%" position="relative" {...props}>
    <Header />
    <Flex as="main" px={mainPx}>
      {children}
    </Flex>
    <Footer />
  </Flex>
);
