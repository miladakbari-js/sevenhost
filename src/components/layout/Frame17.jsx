import styles from "./Frame17.module.css";

function Frame17() {
  return (
    <div className={styles.container}>
      <div className={styles.slidercontainer}>
        <div className={styles.slider}>
          <div className={styles.slide}>
            <img src="frame.png" alt="pic" />
          </div>
          <div className={styles.slide}>
            <img src="frame.png" alt="pic" />
          </div>
          <div className={styles.slide}>
            <img src="frame.png" alt="pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame17;
