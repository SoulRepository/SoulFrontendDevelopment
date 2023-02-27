import {SystemStyleObject} from "@chakra-ui/react";
import {lightColor} from "@app/styles/colorScheme";

export const smallSearchStyles: SystemStyleObject = {
  w: '280px',


  '.search-input': {
    borderRadius: '22px',
    bgColor: '#717171',
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
};
