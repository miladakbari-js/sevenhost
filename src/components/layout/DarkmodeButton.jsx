import { useDarkMode } from "../../services/darkmode";
import styles from "./DarkmodeButton.module.css";

function DarkmodeButton() {
  const { darkMode, setDarkMode } = useDarkMode();
  const clickHandler = ("change", () => {
    if (toggleSwitch.checked) {
        setDarkMode(true)
        console.log(darkMode);
    } else {
        setDarkMode(false);
        console.log(darkMode);}
  });
  return (
    <label className={styles.switch}>
      <input type="checkbox" id="toggleSwitch" onClick={clickHandler}/>
      <span className={styles.slider}></span>
    </label>
  );
}

export default DarkmodeButton;
