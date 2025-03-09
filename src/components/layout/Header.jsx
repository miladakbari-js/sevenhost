import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.links}>
        <Link to="/">
          <h5>
            <b style={{ color: "#08C056" }}>7</b>flow
            <b style={{ color: "#08C056" }}>.</b>
          </h5>
        </Link>
        <div>
          <NavLink to="/currencies">Pricing</NavLink>
          <NavLink to="*">How it Works</NavLink>
          <NavLink to="">FAQ</NavLink>
        </div>
      </div>
      <div className={styles.buttons}>
        <span>Sign in</span>
        <button>Get Started</button>
      </div>
    </header>
  );
}

export default Header;
