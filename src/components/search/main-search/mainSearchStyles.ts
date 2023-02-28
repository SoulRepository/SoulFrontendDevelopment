import { SystemStyleObject } from '@chakra-ui/react';
import { lightColor } from '@app/styles/colorScheme';

export const MainSearchStyles: SystemStyleObject = {
  bgColor: 'white',
  borderRadius: 'full',
  input: {
    h: '50px',
    fontSize: '20px',
    borderRadius: 'full',
    _focusVisible: {
      borderColor: lightColor.highlighting,
      boxShadow: 'none',
    },
  },
};
