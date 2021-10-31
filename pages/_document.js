import Document, { Html, Head, Main, NextScript } from "next/document";

// import { GA_TRACKING_ID } from "../utils/gtag"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="zxx">
        <Head>
          <link rel="icon" type="image/png" href="/images/favicon.png"></link>
          <script defer src="js/channeltalk.js"></script>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
                });
            `,
                    }}
                /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
