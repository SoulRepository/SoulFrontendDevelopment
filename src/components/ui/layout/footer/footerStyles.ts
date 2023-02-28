import { SystemStyleObject } from '@chakra-ui/react';
import { mainPx } from '@app/styles/styleVars';
import { lightColor } from '@app/styles/colorScheme';

export const footerStyles: SystemStyleObject = {
  minH: '444px',
  px: mainPx,
  justifyContent: 'space-between',
  pt: '93px',
  '.h3-footer': {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '12px',
    mb: '38px',
  },
  '.desk-column': {
    flexDirection: 'column',
    maxW: '273px',
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '22px',
  },
  '.links-info': {
    flexDirection: 'column',
    '.links-list': {
      fontSize: '14px',
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
    },
    '.newsletter-input': {
      w: '320px',
      h: '50px',
      background: '#F5F7F9',
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
