import { createIcon } from '@chakra-ui/react';

export const SearchIcon = createIcon({
  displayName: 'SearchIcon',
  defaultProps: { boxSize: '16px' },
  path: (
    <svg
      className="svg-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill='currentColor'
    >
      <path d="M875.264 855.872l-188.032-215.552C737.664 579.392 768 501.248 768 416 768 221.632 610.368 64 416 64 221.568 64 64 221.632 64 416S221.568 768 416 768c72.32 0 139.52-21.888 195.392-59.264l186.88 214.272c18.496 21.312 50.88 23.36 72 4.928C891.648 909.376 893.76 877.12 875.264 855.872zM160 416c0-141.184 114.816-256 256-256 141.184 0 256 114.816 256 256s-114.816 256-256 256C274.816 672 160 557.184 160 416z" />
    </svg>
  ),
});
