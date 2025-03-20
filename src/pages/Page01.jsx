import { useDarkMode } from "../services/darkmode";
import styles from "./Page01.module.css";

function Page01() {
  const { darkMode } = useDarkMode();
  return (
    <div className={styles.container}>
      <div className={!darkMode ? styles.left : styles.dark}>
        <p>Manage your daily tasks better without all the stress.</p>
        <span>
          Change the way you manage your tasks with our revolutionary project
          management technology.
        </span>
        <div className={styles.buttons}>
          <button className={styles.started}>Get Started</button>
          <button className={styles.demo}>Schedule a Demo</button>
        </div>
      </div>
      <div className={styles.image}>
        <img src="./public/cart.png" alt="cart.png" />
      </div>
    </div>
  );
}

export default Page01;
