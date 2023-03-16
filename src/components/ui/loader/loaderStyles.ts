import { SystemStyleObject } from '@chakra-ui/react';

export const fullPageLoaderStyles: SystemStyleObject = {
  fontSize: '48px',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontWeight: 'bold',
  color: '#000',
  position: 'relative',
  _before: {
    content: "''",
    position: 'absolute',
    left: '34px',
    bottom: '15px',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '5px solid #FFF',
    borderBottomColor: '#FF3D00',
    boxSizing: 'border-box',
    animation: 'rotation 0.6s linear infinite',
  },
};
