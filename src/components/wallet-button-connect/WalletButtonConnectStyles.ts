import {SystemStyleObject} from "@chakra-ui/react";

export const WalletButtonConnectStyles:SystemStyleObject = {
  background: 'linear-gradient(180deg, #B366FF -6.76%, #6816B9 106.76%)',
  borderRadius: 'full',
  fontSize: {'2xl': '16px', md: '14px'},
  color: 'white',
  transition: 'all 0.3s',
  _hover: {
    background: 'linear-gradient(0deg, #B366FF -6.76%, #6816B9 106.76%)',
  },
  _active: {
    background: 'linear-gradient(0deg, #B366FF -6.76%, #6816B9 106.76%)',
  },
};
