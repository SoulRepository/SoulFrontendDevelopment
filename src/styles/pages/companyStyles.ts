import { SystemStyleObject } from '@chakra-ui/react';
import { mainPx } from '@app/styles/styleVars';
import {lightColor} from "@app/styles/colorScheme";

export const companyStyles: SystemStyleObject = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  w: '100%',
  '.header': {
    position: 'relative',
    h: '280px',
    w: '100%',
    img: {
      objectFit: 'cover'
    }
  },
  '.company-section': {
    px: mainPx,
    mb: '100px',
    w: '100%',
    flexDirection: 'column',
    '.company-info': {
      w: '100%',
      alignItems: 'center',
      position: 'relative',
      bottom: '72px',
      justifyContent: 'space-between',
      '.avatar': {
        position: 'relative',
        overflow: 'hidden',
        boxSize: '142px',
        borderRadius: 'full',
        border: '9px solid #F4F7FA',
        img: {
          objectFit: 'cover'
        }
      },
      '.menu-section': {
        '.digi-proofs': {
          px: '31px',
          mr: '10px',
          p: {
            mr: '17px',
            fontWeight: 500,
            fontSize: '15px',
          },
          '.digi-icon': {
            border: '3px solid white',
            position: 'relative',
            borderRadius: 'full',
            ml: '-10px',
            boxSize: '28px',
          },
        },
      },
    },
    '.content-section': {
      '.side-bar': {
        flexDirection: 'column',
        mr: '80px',
        maxW: '274px',
        '.address-section': {
          flexDirection: 'column',
          mb: '21px',
          '.copy-icon': {
            cursor: 'pointer',
            ml: '10px',
            _hover: {
              color: lightColor.highlighting
            }
          },
          '.tag': {
            h: '36px',
            px: '20px',
            py: '12px',
            bgColor: '#041226',
            color: 'white',
            borderRadius: 'full',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #f4f7fa',
            mr: '-15px',
          },
        },
        '.soulId-section': {
          mb: '17px',
          flexDirection: 'column',
          h2: {
            fontWeight: 600,
            fontSize: '36px',
            lineHeight: '43px',
          },
          p: {
            color: '#8F3DFF',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '20px',
          },
        },
        '.desc-section': {
          flexDirection: 'column',
          mb: '40px',
          '.title': {
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '17px',
            py: '14px',
            mb: '14px',
            borderTop: '1px solid rgba(4, 18, 38, 0.1)',
            borderBottom: '1px solid rgba(4, 18, 38, 0.1)',
          },
          '.text': {
            minW: '279px',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '17px',
          },
        },
        '.sm-section': {
          flexDirection: 'column',
          mb: '20px',
          '.social-box': {
            mb: '10px',
          },
        },
        '.join-date-section': {
          justifyContent: 'space-between',
          py: '14px',
          mb: '20px',
          borderTop: '1px solid rgba(4, 18, 38, 0.1)',
          borderBottom: '1px solid rgba(4, 18, 38, 0.1)',
          '.title': {
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '17px',
          },
          '.date': {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '17px',
          },
        },
      },
      '.content': {
        flexDirection: 'column',
        '.menu': {
          maxH: '40px',
          mb: '50px',
        },
        '.partner-cards-section': {
          flexWrap: 'wrap',
        },
      },
    },
  },
};

export const menuItemStyles = (isActive: boolean): SystemStyleObject => ({
  color: isActive ? '#0057FF' : '#041226',
  borderRadius: '6px',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '17px',
  mr: '24px',
  cursor: 'pointer',
  ...(() => !isActive && { boxShadow: 'none', bgColor: 'transparent' })(),
});
