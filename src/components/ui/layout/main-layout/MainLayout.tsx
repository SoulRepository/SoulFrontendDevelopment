import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

import { Footer, Header } from '@app/components/ui/layout';
import { Blur } from '@app/components/ui/blur/Blur';
import { useRouter } from 'next/router';

interface ILayoutProps {
  children?: ReactNode;
  className?: string;
}

type Props = ILayoutProps & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const MainLayout: FC<Props> = ({ children, ...props }) => {
  const router = useRouter();

  const isCompanyPage = router.pathname === '/company/[companyName]';

  return (
    <Flex flexDir="column" minH="100%" position="relative" {...props}>
      <Header isShowBg={!isCompanyPage} />
      {!isCompanyPage && <Blur />}
      <Flex as="main" bgColor="#F4F7FA">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
