import { SystemStyleObject } from '@chakra-ui/react';
import { ChakraStylesConfig } from 'chakra-react-select';

export const editStyles: SystemStyleObject = {
  // px: mainPx,
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
    _disabled: {
      _hover: {
        background: 'linear-gradient(180deg, #6297FF -6.76%, #0057FF 106.76%)',
      }
    }
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
  '.file-input-section': {
    flexDirection: 'column',
    '.advice': {
      fontSize: '14px',
    },
  },
};

export const selectStyles: ChakraStylesConfig = {
  valueContainer: provided => ({
    ...provided,
    bgColor: 'white',
    color: '#697280'
  }),
  placeholder: provided => ({
    ...provided,
    color: '#697280',
    ml: '5px'
  }),
  dropdownIndicator: provided => ({
    ...provided,
    bgColor: 'white',
    cursor: 'pointer'
  }),
  menuList: provided => ({
    ...provided,
    bgColor: 'white'
  }),
  option: provided => ({
    ...provided,
    bgColor: 'white',
    _hover: {
      bgColor: '#697280'
    }
  }),
  multiValue: provided => ({
    ...provided,
    bgColor: '#697280',
    color: 'white'
  })
};
