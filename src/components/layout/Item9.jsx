import { Link } from "react-router-dom"
import styles from "./Item9.module.css"
import { useDarkMode } from "../../services/darkmode"

function Item9() {
  const {darkMode} = useDarkMode();
  return (
    <div className={styles.container}>
        <div className={!darkMode ? styles.text : styles.dark}>
            <p>Free template library included</p>
            <span>We have got quite a few already made templates for better project management that you can use now.</span>
            <Link to="/">learn more    {'  >'} </Link>
        </div>
        <div className={styles.pic}>
            <img src={!darkMode ? "./item9.png" : "./dark24.svg"} alt="pic" />
        </div>
    </div>
  )
}

export default Item9