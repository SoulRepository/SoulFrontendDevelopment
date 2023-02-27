import { createIcon } from '@chakra-ui/react';

export const SearchIcon = createIcon({
  displayName: 'SearchIcon',
  defaultProps: { boxSize: '16px' },
  path: (
    <svg viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.26847 16.0849C12.2827 16.0849 15.5369 12.8278 15.5369 8.80991C15.5369 4.79204 12.2827 1.53491 8.26847 1.53491C4.2542 1.53491 1 4.79204 1 8.80991C1 12.8278 4.2542 16.0849 8.26847 16.0849Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0002 17.5482L13.4023 13.9478"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
});
