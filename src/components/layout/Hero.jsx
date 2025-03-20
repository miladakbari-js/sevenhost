import { useDarkMode } from "../../services/darkmode"
import styles from "./Hero.module.css"

function Hero() {
  const {darkMode} = useDarkMode();
  return (
    <div className={styles.container}>
        <div className={!darkMode ? styles.text : styles.dark}>
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