import { SystemStyleObject } from '@chakra-ui/react';
import { mainPx } from '@app/styles/styleVars';
import { lightColor } from '@app/styles/colorScheme';

export const footerStyles: SystemStyleObject = {
  flexDirection: 'column',
  '.copyright': {
    borderTop: '1px solid #E7E7E7',
    py: '23px',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#747B82',
    fontWeight: 400,
    fontSize: { '2xl': '14px', xl: '12px' },
    lineHeight: '17px',
    '.accent': {
      color: '#0057FF',
      fontWeight: 600,
      pl: '5px',
    },
  },
};

export const footerMenuStyles: SystemStyleObject = {
  justifyContent: { '2xl': 'space-between', xl: 'space-evenly' },
  px: { '2xl': mainPx },
  py: { '2xl': '93px', xl: '63px' },
  w: '100%',
  '.h3-footer': {
    fontWeight: 600,
    fontSize: { '2xl': '18px', xl: '16px' },
    lineHeight: '12px',
    mb: { '2xl': '38px', xl: '28px' },
  },
  '.desk-column': {
    flexDirection: 'column',
    maxW: '273px',
    fontWeight: 400,
    fontSize: { '2xl': '15px', xl: '13px' },
    lineHeight: '22px',
    '.logo': {
      position: 'relative',
      w: '185px',
      h: '27px',
    },
  },
  '.links-info': {
    flexDirection: 'column',
    '.links-list': {
      fontSize: { '2xl': '14px', xl: '12px' },
      fontWeight: 500,
      lineHeight: '36px',
      color: '#49535B',
    },
  },
  '.join-news': {
    flexDirection: 'column',
    '.social-list': {
      display: 'flex',
      '.social-item': {
        mr: '10px',
        display: 'flex',
        border: '2px solid  rgba(4, 18, 38, 0.08)',
        boxSize: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '6px',
        cursor: 'pointer',
        color: '#7F8A9A',
        _hover: {
          background: 'linear-gradient(180deg, #6297FF 0%, #0057FF 100%)',
          border: 'transparent',
          color: 'white',
        },
      },
    },

    '.newsletter-button': {
      background: 'linear-gradient(180deg, #6297FF -6.76%, #0057FF 106.76%)',
      h: '42px',
      w: '107px',
      color: 'white',
      mt: '10px',
      mr: '4px',
      fontSize: { '2xl': '16px', xl: '14px' },
    },
    '.newsletter-input': {
      w: '320px',
      h: '50px',
      background: '#F5F7F9',
      fontSize: { '2xl': '16px', xl: '14px' },
      border: '1px solid #CED1D5',
      _placeholder: {
        color: '#697280',
      },
      _focusVisible: {
        borderColor: lightColor.highlighting,
        boxShadow: 'none',
      },
    },
  },
};
