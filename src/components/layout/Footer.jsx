import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import DarkmodeButton from "./DarkmodeButton";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

      <article className={styles.left}>
        <Link to="/">
          <h5>
            <b style={{ color: "#08C056" }}>7</b>flow
            <b style={{ color: "#08C056" }}>.</b>
          </h5>
        </Link>
        <div>
          <img src="./Light-mode.svg" alt="light-mode" />
          <DarkmodeButton />
        </div>
      </article>
      <article className={styles.middle}>
        <div className={styles.middle1}>
          <Link>
            <h5> Pricing </h5>
          </Link>
          <Link>
            <h5>How it Works </h5>
          </Link>
          <Link>
            <h5>FAQ</h5>
          </Link>
        </div>
        <div className={styles.middle2}>
          <Link>
            <h5>Terms of service</h5>
          </Link>
          <Link>
            <h5>Privacy Policy</h5>
          </Link>
        </div>
      </article>
      <article className={styles.right}>
        <Link>
          <img src="./Instagram.svg" alt="instagram icon" />
        </Link>
        <Link>
          <img src="./twiter.svg" alt="twiter icon" />
        </Link>
        <Link>
          <img src="./facebook.svg" alt="facebook icon" />
        </Link>
      </article>
      </div>
      <p>developed by milad akbari</p>
    </footer>
  );
}

export default Footer;
