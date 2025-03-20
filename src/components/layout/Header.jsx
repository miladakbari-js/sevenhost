import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useDarkMode } from "../../services/darkmode";
import { useState } from "react";

function Header() {
  const { darkMode } = useDarkMode();
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.links}>
        <Link to="/">
          <h5>
            <b style={{ color: "#08C056" }}>7</b>flow
            <b style={{ color: "#08C056" }}>.</b>
          </h5>
        </Link>
        <div className={!darkMode ? styles.nav : styles.dark}>
          <NavLink to="/#">Pricing</NavLink>
          <NavLink to="/#">How it Works</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink
            to="/currencies"
            style={({ isActive }) =>
              isActive
                ? {
                    color: " #08C056",
                  }
                : { color: !darkMode ? "#4C5D77" : "#81A2D2" }
            }
          >
            Currencies
          </NavLink>
        </div>
      </div>
      <div className={!darkMode ? styles.buttons : styles.darkbutton}>
        <span>Sign in</span>
        <button>Get Started</button>
      </div>
      <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          =
        </button>
        {isMenuOpen && (
          <div className={styles.hamlink}>
            <NavLink to="/#">Pricing</NavLink>
            <NavLink to="/#">How it Works</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink
              to="/currencies"
              style={({ isActive }) =>
                isActive
                  ? { color: "#08C056" }
                  : { color: !darkMode ? "#4C5D77" : "#81A2D2" }
              }
            >
              Currencies
            </NavLink>
            <div className={!darkMode ? styles.buttons1 : styles.darkbutton1}>
              <button>Get Started</button>
              <span>Sign in</span>
      </div>
    </div>
          
        )}
    </header>
  );
}

export default Header;
