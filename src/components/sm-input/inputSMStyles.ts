import {SystemStyleObject} from "@chakra-ui/react";

export const inputSMStyles: SystemStyleObject = {
  flexDirection: 'row',
  w: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  '.input-group': {
    mr: '10px'
  },
  '.icon': { boxSize: '20px', color: '#697280', mt: '7px' },
  '.verified': {
    mr: '50px',
    mt: '10px',
    bgColor: '#c5fdd9',
    color: 'black',
    px: '10px',
    py: '5px',
    borderRadius: '6px',
    pointerEvents: 'none',
    userSelect: 'none'
  }
}
