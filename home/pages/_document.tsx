import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    // const mf = await Promise.resolve([{ name: 'checkout', url: 'http://localhost:3000/_next/static/chunks/remoteEntry.js'}]);
    // return { microapps: mf, ...initialProps };
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
        <script
            data-webpack="checkout"
            src="http://localhost:3000/_next/static/chunks/remoteEntry.js"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
