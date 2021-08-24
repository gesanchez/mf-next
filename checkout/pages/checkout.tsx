import React from "react";
import Head from "next/head";
import Link from "next/link";
import ProfileForm from "../components/ProfileForm";
// import style from "./checkout.module.css";

const Checkout = (props: any) => (
  <div>
    <Head>
      <title>Checkout</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1>Profile page</h1>
          <em>This is a federated page owned by localhost:3000</em>
        </div>
      </div>
      <ProfileForm></ProfileForm>
      <div className="row">
        <div className="col">
          <span>
            {" "}
            Data from federated <pre>getInitalProps</pre>
          </span>
          <Link href="/p/test">Test page</Link>
          <br />
          <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
      </div>
    </div>
  </div>
);
Checkout.getInitialProps = async () => {
  const swapi = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
    res.json()
  );
  return swapi;
};
export default Checkout;
