import { SystemStyleObject } from '@chakra-ui/react';
import { mainPx } from '@app/styles/styleVars';

export const relationshipStyles: SystemStyleObject = {
  flexDirection: 'column',
  w: '100%',
  '.header': {
    borderBottom: '1px solid rgba(4, 18, 38, 0.06)',
    mb: '60px',
    '.breadcrumbs': {
      px: { '2xl': mainPx, md: '10%' },
      py: '15px',
      color: '#49535B',
      fontSize: { '2xl': '14px', md: '12px' },
      fontWeight: 400,
      lineHeight: '17px',
    },
  },

  '.content-section': {
    mb: '200px',
    px: { '2xl': mainPx, md: '10%' },
    zIndex: 1,
    '.content': {
      mr: '74px',
      '.image-block': {
        position: 'relative',
        h: { '2xl': '640px', md: '540px' },
        w: { '2xl': '655px', md: '555px' },
        bgColor: 'white',
        borderRadius: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        img: { objectFit: 'cover' },
      },
    },
    '.sidebar': {
      w: '100%',
      h2: {
        color: '#49535B',
        fontSize: { '2xl': '14px', md: '12px' },
        fontWeight: 500,
        lineHeight: '15px',
        textTransform: 'capitalize',
        mb: '5px',
      },
      flexDirection: 'column',
      '.sidebar-header': {
        mb: '55px',
        justifyContent: 'space-between',
        alignItems: 'center',
        '.relationship-type': {
          fontSize: { '2xl': '30px', md: '25px' },
          fontWeight: 600,
          lineHeight: '36px',
          textTransform: 'capitalize',
        },
        '.digi-proof': {
          alignItems: 'center',
          justifyContent: 'center',
          px: '12px',
          py: '5px',
          bgColor: '#E2E2EA',
          color: '#041226',
          borderRadius: '4px',
          fontSize: { '2xl': '13px', md: '11px' },
          fontWeight: 500,
          lineHeight: '15px',
          maxH: '30px',
        },
      },
      '.companies-section': {
        flexDirection: 'column',
        mb: '20px',
        h3: {
          fontWeight: 600,
          fontSize: { '2xl': '13px', xl: '11px' },
          lineHeight: '20px',
          color: '#49535B',
          mb: '10px',
        },
        '.companies': {
          '.image-block': {
            position: 'relative',
            mr: '10px',
            '.verify-icon': {
              position: 'absolute',
              bottom: '-2px',
              right: '-2px',
            },
            '.featured-Image': {
              position: 'relative',
              overflow: 'hidden',
              w: '100%',
              h: '100%',
              boxSize: { '2xl': '32px', md: '26px' },
              alignItems: 'center',
              justifyContent: 'center',
              bgColor: '#C4C4C4',
              borderRadius: 'full',
            },
          },
        },
      },
      '.properties-section': {
        flexDirection: 'column',
        mb: '10px',
        p: {
          fontWeight: 600,
          fontSize: { '2xl': '13px', xl: '11px' },
          lineHeight: '20px',
          color: '#49535B',
          mb: '4px',
        },
        '.description': {
          bgColor: 'white',
          px: '18px',
          py: '20px',
          minH: '176px',
          borderRadius: '6px',
          fontWeight: 400,
          fontSize: { '2xl': '13px', xl: '11px' },
          lineHeight: '20px',
          color: '#49535B',
        },
      },
      '.date': {
        fontWeight: 600,
        fontSize: { '2xl': '13px', xl: '11px' },
        lineHeight: '20px',
        color: '#49535B',
        mb: '66px',
      },
    },
  },
};

export const buttonStyles: SystemStyleObject = {
  w: '250px',
  h: '50px',
  bg: 'linear-gradient(180deg, #6297FF -6.76%, #0057FF 106.76%)',
  color: 'white',
  boxShadow: '0px 3px 6px rgba(10, 72, 192, 0.3)',
  borderRadius: '6px',
  fontSize: { '2xl': '16px', xl: '14px' },
  _hover: {
    bg: 'linear-gradient(180deg, #033086 -6.76%, #0057FF 106.76%)',
  },
  _disabled: {
    bg: '#C4C4C4',
    cursor: 'no-drop',
  },
};
