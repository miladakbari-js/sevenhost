import { Link } from "react-router-dom"
import styles from "./Item7.module.css"
import { useDarkMode } from "../../services/darkmode"

function Item7() {
  const {darkMode} = useDarkMode();
  return (
    <div className={styles.container}>
        <div className={styles.pic}>
            <img src={!darkMode ? "./item7.png" : "./dark25.svg"} alt="pic" />
        </div>
        <div className={!darkMode ? styles.text : styles.dark}>
            <p>Revolutionize your workflow</p>
            <span>We have designed our app for increased efficiency and it will help you to start getting more things done.</span>
            <Link to="/">learn more    {'  >'} </Link>
        </div>
    </div>
  )
}

export default Item7