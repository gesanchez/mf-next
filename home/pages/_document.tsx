import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const mf = await Promise.resolve([{ name: 'checkout', url: 'http://localhost:3000/_next/static/chunks/remoteEntry.js'}]);
    return { microapps: mf, ...initialProps };
  }

  render() {
    const { microapps } = this.props;
    return (
      <Html>
        <Head />
        <body>
          { microapps.map((element) => {
            return (
              <script
                key={element.name}
                data-webpack={element.name}
                src={element.url}
              />
            );
          })}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
