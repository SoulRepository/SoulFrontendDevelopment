import { SystemStyleObject } from '@chakra-ui/react';

export const sbtListStyles: SystemStyleObject = {
  flexDirection: 'column',
  mb: '20px',
  mr: '26px',
  '.card': {
    h: { '2xl': '250px', md: '190px' },
    w: { '2xl': '270px', md: '185px' },
    borderRadius: '20px',
    mb: '20px',

    bgColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
    '.img': {
      position: 'relative',
      w: '100%',
      h: '100%',
      img: {
        objectFit: 'cover',
      },
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
