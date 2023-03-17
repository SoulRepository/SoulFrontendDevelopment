import { SystemStyleObject } from '@chakra-ui/react';

export const fileInputStyles = (isRounded = false): SystemStyleObject => ({
  position: 'relative',
  bgColor: '#fff',
  borderRadius: isRounded ? 'full' : 'transparent',
  border: '3px dashed rgb(204, 204, 204)',
  zIndex: 1,
  _hover: {
    bgColor: 'rgba(0, 0, 0, 0.6)',
    '.icon': {
      color: 'rgb(179, 179, 179)',
    },
  },
  input: {
    boxSize: '100%',
    opacity: 0,
    cursor: 'pointer',
    borderRadius: 'full',
  },
  '.icon': {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    boxSize: '50px',
    color: 'rgb(204, 204, 204)',
  },
  '.preview': {
    position: 'absolute',
    boxSize:'100%',
    borderRadius: isRounded ? 'full' : 'none',
    objectFit: 'cover'
  }
});
