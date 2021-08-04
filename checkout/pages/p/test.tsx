import React from "react";
import Head from "next/head";

const Test = (props: any) => (
  <div>
    <Head>
      <title>Test</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1>Test page</h1>
      <h3 className="title">
        This is a federated page owned by localhost:3000
      </h3>
      <span>
        {" "}
        Data from federated <pre>getInitalProps</pre>
      </span>
      <br />
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 20px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);
Test.getInitialProps = async () => {
  const swapi = await fetch("https://swapi.dev/api/people/1").then((res) =>
    res.json()
  );
  return swapi;
};
export default Test;
