import { Link } from "react-router-dom"
import styles from "./Item7.module.css"

function Item7() {
  return (
    <div className={styles.container}>
        <div className={styles.pic}>
            <img src="./item7.png" alt="pic" />
        </div>
        <div className={styles.text}>
            <p>Revolutionize your workflow</p>
            <span>We have designed our app for increased efficiency and it will help you to start getting more things done.</span>
            <Link to="/">learn more    {'  >'} </Link>
        </div>
    </div>
  )
}

export default Item7