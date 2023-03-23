import { SystemStyleObject } from '@chakra-ui/react';

export const inputSMStyles: SystemStyleObject = {
  flexDirection: 'row',
  w: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  '.input-group': {
    fontSize: '12px',
    mr: '10px',
  },
  input: {
    fontSize: { '2xl': '16px', md: '14px' },
  },
  button: { fontSize: { '2xl': '16px', md: '14px' } },
  '.icon': { boxSize: '20px', color: '#697280', mt: '7px' },
  '.verified': {
    fontSize: { '2xl': '16px', md: '14px' },
    mr: '50px',
    mt: '10px',
    bgColor: '#c5fdd9',
    color: 'black',
    px: '10px',
    py: '5px',
    borderRadius: '6px',
    pointerEvents: 'none',
    userSelect: 'none',
  },
};
