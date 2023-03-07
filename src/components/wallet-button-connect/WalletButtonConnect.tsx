import { Button, ButtonProps } from '@chakra-ui/react';

import { WalletButtonConnectStyles } from '@app/components/wallet-button-connect/WalletButtonConnectStyles';
import { FC } from 'react';

type WalletButtonConnectProps = {
  className?: string;
} & ButtonProps;

export const WalletButtonConnect: FC<WalletButtonConnectProps> = ({ className, ...props }) => (
  <Button {...props} sx={WalletButtonConnectStyles} className={className}>
    Connect Wallet
  </Button>
);
