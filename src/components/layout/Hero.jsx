import styles from "./Hero.module.css"

function Hero() {
  return (
    <div className={styles.container}>
        <div className={styles.text}>
            <p>Fully reinvented project management system to help you ship products faster</p>
            <span>Focus on what matters most, our robots handle the rest ☕️</span>
        </div>
        <div className={styles.pic}>
            <img src="./hero.png" alt="pic" />
        </div>
    </div>
  )
}

export default Hero