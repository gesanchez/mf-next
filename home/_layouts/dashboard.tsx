import Link from "next/link";
import * as style from "./dashboard.module.css";
import Nav from "../components/nav";

export default function Dashboard({ children }) {
  return (
    <>
      <Nav></Nav>
      <main className={style.container}>
        {children}
      </main>
      <div style={{"clear": "both"}}></div>
    </>
  )
}