import { Button } from '@chakra-ui/react';

import { WalletButtonConnectStyles } from '@app/components/wallet-button-connect/WalletButtonConnectStyles';
import { FC } from 'react';

interface IWalletButtonConnectProps {
  className?: string;
}

export const WalletButtonConnect: FC<IWalletButtonConnectProps> = ({
  className,
}) => (
  <Button sx={WalletButtonConnectStyles} className={className}>
    Connect Wallet
  </Button>
);
