import { SystemStyleObject } from '@chakra-ui/react';
import { mainPx } from '@app/styles/styleVars';

export const relationshipStyles: SystemStyleObject = {
  flexDirection: 'column',
  w: '100%',
  '.header': {
    borderBottom: '1px solid rgba(4, 18, 38, 0.06)',
    mb: '60px',
    '.breadcrumbs': {
      px: mainPx,
      py: '15px',
      color: '#49535B',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '17px',
    },
  },

  '.content-section': {
    mb: '200px',
    px: mainPx,
    zIndex: 1,
    '.content': {
      mr: '74px',
      '.image-block': {
        position: 'relative',
        h: '640px',
        w: '655px',
        bgColor: 'white',
        borderRadius: '20px',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    '.sidebar': {
      w: '100%',
      h2: {
        color: '#49535B',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '15px',
        textTransform: 'capitalize',
        mb: '5px',
      },
      flexDirection: 'column',
      '.sidebar-header': {
        justifyContent: 'space-between',
        alignItems: 'center',
        '.relationship-type': {
          fontSize: '30px',
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
          fontSize: '13px',
          fontWeight: 500,
          lineHeight: '15px',
          maxH: '30px',
        },
      },
    },
  },
};


export const likeStyle:SystemStyleObject = {}
