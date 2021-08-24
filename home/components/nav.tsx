import Link from "next/link";
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();

  return (
    <div className="sidebar" data-color="white" data-active-color="danger">
      <div className="logo">
        <a href="http://gesq.me" className="simple-text logo-mini">
          <div className="logo-image-small">
            <img src="/images/webpack.png" alt="Webpackk" />
          </div>
          <p>MF</p>
        </a>
        <a href="http://gesq.me" className="simple-text logo-normal">
          Next MF Example
        </a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className={router.asPath == "/" ? "active" : ""}>
            <Link href="/">
              <a>
                <i className="nc-icon nc-bank"></i>
                <p>Dashboard</p>
              </a>
            </Link>
          </li>
          <li className={router.asPath == "/checkout" ? "active" : ""}>
            <Link href="/checkout">
            <a>
              <i className="nc-icon nc-diamond"></i>
              <p>Profile</p>
            </a>
            </Link>
          </li>
          <li className={router.asPath == "/p/test" ? "active" : ""}>
            <Link href="/p/test">
              <a>
                <i className="nc-icon nc-pin-3"></i>
                <p>Test</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
