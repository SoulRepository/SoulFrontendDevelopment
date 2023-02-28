import { SystemStyleObject } from '@chakra-ui/react';
import { lightColor } from '@app/styles/colorScheme';
import { mainPx } from '@app/styles/styleVars';

export const headerStyles = (isShowBg: boolean): SystemStyleObject => ({
  h: '85px',
  w: '100%',
  px: mainPx,
  alignItems: 'center',
  justifyContent: 'center',
  bgColor: isShowBg ? lightColor.headerBgColor : 'transparent',
  position: isShowBg ? 'relative' : 'absolute',
  '.search': {
    mr: '95px',
  },
  '.wallet-button': { mr: '11px' },
  '.logo': {
    mr: '39px',
  },
});

export const menuStyles: SystemStyleObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  w: '280px',
  mr: '190px',
  '.menu-item': {
    color: 'white',
    transition: 'all 0.3s',
    _hover: {
      color: lightColor.highlighting,
    },
  },
};

export const connectWalletButton: SystemStyleObject = {
  background: 'linear-gradient(180deg, #B366FF -6.76%, #6816B9 106.76%)',
  borderRadius: 'full',
  color: 'white',
  transition: 'all 0.3s',
  _hover: {
    background: 'linear-gradient(0deg, #B366FF -6.76%, #6816B9 106.76%)',
  },
  _active: {
    background: 'linear-gradient(0deg, #B366FF -6.76%, #6816B9 106.76%)',
  },
};
