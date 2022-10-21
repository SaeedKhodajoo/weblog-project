import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="ar" dir="rtl">
          <meta charSet="utf-8" />
          <link
            rel="preload"
            href="/fonts/Yekan.ttf"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
        </Head>
        <body dir="rtl">
          <Main />
          <NextScript />
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
