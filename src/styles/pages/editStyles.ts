import { SystemStyleObject } from '@chakra-ui/react';
import { mainPx } from '@app/styles/styleVars';

export const editStyles: SystemStyleObject = {
  px: mainPx,
  py: '50px',
  w: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  input: {
    h: '50px',
    bgColor: 'white',
    borderRadius: '6px',
    _placeholder: {
      color: '#697280',
    },

  },
  p: {
    mb: '5px',
    color: '#697280',
  },
  button: {
    color: 'white',
    background: 'linear-gradient(180deg, #6297FF -6.76%, #0057FF 106.76%)',
    _hover: {
      background: 'linear-gradient(0deg, #6297FF -6.76%, #0057FF 106.76%)',
    },
  },
  '.description': {
    flexDirection: 'column',


    textarea: {
      bgColor: 'white',
      borderRadius: '6px',
    },
  },

  '.inputGroup': {
    '.icon': { boxSize: '20px', color: '#697280', mt: '7px' },
  },
};
