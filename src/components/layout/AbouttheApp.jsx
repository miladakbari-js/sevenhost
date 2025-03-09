import styles from "./AbouttheApp.module.css";

function AbouttheApp() {
  return (
    <div className={styles.container}>
      <div className={styles.up}>
        <p>Get more done in less time</p>
        <span>Simple, fast, effortlessly.</span>
      </div>
      <div className={styles.icons}>
        <div className={styles.box}>
          <div className={styles.image1}>
            <img style={{width:"32px",height:"32px",width:"100%"}} src="./Pricing.svg" alt="" />
          </div>
          <span>Transparent Pricing</span>
        </div>
        <div className={styles.box}>
          <div className={styles.image2}>
            <img src="./Integrations.svg" alt="" />
          </div>
          <span>Easy Integrations</span>
        </div>
        <div className={styles.box}>
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
