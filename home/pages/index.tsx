import React from "react";
import Head from "next/head";
import ProfileBox from "../components/ProfileBox";



const Home = ({}: any) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <ProfileBox></ProfileBox>
          </div>
        </div>
      </div>
    </div>
  );
};
//
Home.getInitialProps = async (ctx: any) => {
  return {};
};

export default Home;
