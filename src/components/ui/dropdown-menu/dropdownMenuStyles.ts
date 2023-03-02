import {SystemStyleObject} from '@chakra-ui/react';

export const dropdownMenuStyles: SystemStyleObject = {
  position: 'relative',
  '.icon': {
    boxSize: '50px',
    cursor: 'pointer',
    _hover: {bgColor: '#ECE8F2'},
  },
  '.dropdown-menu': {
    position: 'absolute',
    top: '60px',
    left: '-60px',
    flexDirection: 'column',
    borderRadius: '6px',
    div: {
      minW: '100px',
      borderRadius: 0,
      cursor: 'pointer',
      _first: {borderTopRadius: '6px'},
      _last: {borderBottomRadius: '6px'},
      _hover: {
        bgColor: '#ECE8F2',
      },
    },
  },
};
