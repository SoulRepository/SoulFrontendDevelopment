import {
  DeepPartial,
  extendTheme,
  theme as defaultTheme,
  ThemeOverride,
} from '@chakra-ui/react';

import { lightColor } from '@app/styles/colorScheme';

const themeConfig: DeepPartial<ThemeOverride> = {
  styles: {
    global: () => ({
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
        bg: lightColor.white,
        color: 'black',
      },
      '#__next': {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      },
    }),
  },
  breakpoints: {
    sm: '375px',
    md: '768px',
    xl: '1440px',
  },
  config: {
    initialColorMode: 'dark',
  },
  components: {
    ...defaultTheme.components,
  },
};

export const mainTheme = extendTheme(themeConfig, defaultTheme);
