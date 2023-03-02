import { SystemStyleObject } from '@chakra-ui/react';
import { lightColor } from '@app/styles/colorScheme';

export const smallSearchStyles = (rgbaBg?: boolean): SystemStyleObject => ({
  w: '280px',
  '.search-input': {
    borderRadius: '22px',
    bgColor: rgbaBg ? 'rgba(255, 255, 255, 0.3)' : '#717171',
    borderColor: 'transparent',
    color: 'white',
    _placeholder: {
      color: 'white',
    },
    _focusVisible: {
      borderColor: lightColor.highlighting,
      boxShadow: 'none',
    },
  },
});
