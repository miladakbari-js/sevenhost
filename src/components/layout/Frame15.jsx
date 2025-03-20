import { useDarkMode } from "../../services/darkmode";
import styles from "./Frame15.module.css";


function Frame15() {
  const {darkMode} = useDarkMode()
  return (
    <div className={styles.container}>
      <div className={!darkMode ? styles.frame : styles.dark}>
        {/* <img src="./pattern.svg" alt="" /> */}
        <div className={styles.all}>
          <div className={styles.main}>
            <div className={styles.head}>
              <div>

              <p>Risk-free 30 day trial to</p>
              <p>
               
                <span style={{ color: "#08C056" }}>level up</span> your team’s
                productivity.
              </p>
            </div>
            <div className={styles.desc}>
              <p>
                Get started now and take advantage of our 30 day free trial
                today. No credit card required.
              </p>
            </div>
          </div>
          <button>Get started {">"}</button>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Frame15;
