import { SystemStyleObject } from '@chakra-ui/react';

export const sbtListStyles: SystemStyleObject = {
  flexDirection: 'column',
  mb: '20px',
  mr: '26px',
  '.card': {
    h: '250px',
    w: '270px',
    borderRadius: '20px',
    mb: '20px',

    bgColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '.img': {
      position: 'relative',
      w: '100%',
      h: '100%',
      // maxH: '65px',
      // maxW: '220px',
    },
  },
  h3: {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '15px',
  },
  p: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '10px',
    color: '#49535B',
    mb: '13px',
  },
  '.footer': {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};
