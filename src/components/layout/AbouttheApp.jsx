import { useDarkMode } from "../../services/darkmode";
import styles from "./AbouttheApp.module.css";

function AbouttheApp() {
  const {darkMode} = useDarkMode();
  return (
    <div className={styles.container}>
      <div className={!darkMode ? styles.up : styles.dark}>
        <p>
          Get more done in <span style={{ color: "#08C056" }}>less time</span>
        </p>
        <div>
          <span>Simple, fast, effortlessly.</span>
        </div>
      </div>
      <div className={styles.icons}>
        <div className={!darkMode ? styles.box : styles.darkbox}>
          <div className={styles.image1}>
            <img
              style={{ width: "32px", height: "32px", width: "100%" }}
              src="./Pricing.svg"
              alt=""
            />
          </div>
          <span>Transparent Pricing</span>
        </div>
        <div className={!darkMode ? styles.box : styles.darkbox}>
          <div className={styles.image2}>
            <img src="./Integrations.svg" alt="" />
          </div>
          <span>Easy Integrations</span>
        </div>
        <div className={!darkMode ? styles.box : styles.darkbox}>
          <div className={styles.image3}>
            <img src="Increase.svg" alt="" />
          </div>
          <span>Superb Efficiency</span>
        </div>
      </div>
    </div>
  );
}

export default AbouttheApp;
