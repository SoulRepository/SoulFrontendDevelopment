import { MoonIcon } from '@app/components/ui/icons/MoonIcon';
import { Flex } from '@chakra-ui/react';
import { ThemeToggleStyles } from '@app/components/ui/theme-toggle/ThemeToggleStyles';

export const ThemeToggle = () => (
    <Flex sx={ThemeToggleStyles}>
      <MoonIcon />
    </Flex>
  );
