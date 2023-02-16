import { Html, Head, Main, NextScript } from 'next/document';
// import '../translations/i18next';
import { useRouter } from 'next/router';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
