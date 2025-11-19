import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />

        {/* Ahrefs Analytics */}
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="bGmek1Fb7+mrfS0gx93ktA" async></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
