import React from "react";
import Head from "next/head";
import Link from "next/link";
import * as style from "./checkout.module.css";

const Checkout = (props: any) => (
  <div>
    <Head>
      <title>checkout</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={style.hero}>
      <h1>checkout page</h1>
      <h3 className={style.title}>
        This is a federated page owned by localhost:3000
      </h3>
      <span>
        {" "}
        Data from federated <pre>getInitalProps</pre>
      </span>
      <Link href="/p/test">Test page</Link>
      <br />
      <pre>{JSON.stringify(props, null, 2)}</pre>
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
