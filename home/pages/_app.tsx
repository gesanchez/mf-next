import Nav from "../components/nav";
import DashboardLayout from "../_layouts/dashboard";
import "../_styles/index.css";


function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Nav />
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </>
  );
}

export default MyApp;
