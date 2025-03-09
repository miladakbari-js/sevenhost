import { Link } from "react-router-dom";
import styles from "./Item8.module.css";

function Item8() {
  return (
    <div className={styles.container}>
      <div className={styles.pic}>
        <img src="./item8.png" alt="pic" />
      </div>

      <div className={styles.text}>
        <p>Used by teams from all over the globe</p>
        <span>
          Our app has been trusted by many different teams from around the world
          and we have got some great reviews.
        </span>
        <Link to="/">learn more {"  >"} </Link>
      </div>
    </div>
  );
}

export default Item8;
