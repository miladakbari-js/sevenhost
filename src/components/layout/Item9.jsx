import { Link } from "react-router-dom"
import styles from "./Item9.module.css"

function Item9() {
  return (
    <div className={styles.container}>
        
        <div className={styles.text}>
            <p>Free template library included</p>
            <span>We have got quite a few already made templates for better project management that you can use now.</span>
            <Link to="/">learn more    {'  >'} </Link>
        </div>
        <div className={styles.pic}>
            <img src="./item9.png" alt="pic" />
        </div>
    </div>
  )
}

export default Item9