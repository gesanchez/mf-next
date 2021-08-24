import Link from "next/link";
import style from "./dashboard.module.css";
import Nav from "../components/nav";

type Props = {
  children?: React.ReactNode;
}

export default function Dashboard({ children }: Props) {
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