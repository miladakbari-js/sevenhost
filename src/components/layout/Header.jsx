import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.links}>
        <NavLink to="/">
          <h5>7flow.</h5>
        </NavLink>
        <NavLink to="/currencies">Pricing</NavLink>
        <NavLink to="*">How it Works</NavLink>
        <NavLink to="">FAQ</NavLink>
      </div>
      <div className={styles.buttons}>
        <span>Sign in</span>
        <button>Get Started</button>
      </div>
    </header>
  );
}

export default Header;
