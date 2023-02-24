import { ColorModeScript } from '@chakra-ui/react';
import { Head, Html, Main, NextScript } from 'next/document';

import { mainTheme } from '@app/styles/theme';

export default function Document() {
  return (
    <Html lang="en">
      <Head title='Soul'/>
      <body>
        <ColorModeScript initialColorMode={mainTheme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
