import { Link } from "react-router-dom";
import styles from "./Item8.module.css";
import { useDarkMode } from "../../services/darkmode";

function Item8() {
  const {darkMode} = useDarkMode();
  return (
    <div className={styles.container}>
      <div className={styles.pic}>
        <img src= {!darkMode ? "./item8.png" : "./dark23.svg"} alt="pic" />
      </div>

      <div className={!darkMode ? styles.text : styles.dark}>
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
