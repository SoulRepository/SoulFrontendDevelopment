import { FC } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

import { MoonIcon } from '@app/components/ui/icons/MoonIcon';
import { ThemeToggleStyles } from '@app/components/ui/theme-toggle/ThemeToggleStyles';

export const ThemeToggle: FC<FlexProps> = props => (
  <Flex {...props} sx={ThemeToggleStyles}>
    <MoonIcon />
  </Flex>
);
