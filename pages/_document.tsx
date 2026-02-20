import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#0D9488" />
          <meta
            name="description"
            content="ENSENADA 101 — Ensenada-style fish tacos & burritos coming soon to Roma Sur, CDMX. Beer-battered, fresh salsas, Baja vibes."
          />
          <meta property="og:site_name" content="Ensenada 101" />
          <meta
            property="og:description"
            content="Ensenada-style fish tacos & burritos coming soon to Roma Sur, CDMX."
          />
          <meta
            property="og:title"
            content="Ensenada 101 — Fish Tacos & Burritos — Roma Sur, CDMX"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Ensenada 101 — Fish Tacos & Burritos — Roma Sur, CDMX"
          />
          <meta
            name="twitter:description"
            content="Ensenada-style fish tacos & burritos. Coming soon to Roma Sur."
          />
        </Head>
        <body className="bg-white antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
