import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <link
          href='https://fonts.googleapis.com/css2?family=Red+Hat+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'
          rel='stylesheet'
        />
        <Head />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
