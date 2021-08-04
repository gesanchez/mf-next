import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

// const RemoteTitle = dynamic(
//   () => {
//     return window.checkout?.get("./title").then((factory) => factory());
//   },
//   { 
//     loading: () => <div>RemoteTitle is loading</div>,
//     ssr: false
//   }
// );
const RemoteTitle = dynamic(() => window.checkout?.get("./title").then((factory) => factory()), { ssr: false });


const Home = ({}: any) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero">
        <RemoteTitle />
      </div>
    </div>
  );
};
//
Home.getInitialProps = async (ctx: any) => {
  return {};
};

export default Home;
