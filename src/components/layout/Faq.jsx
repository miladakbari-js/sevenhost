import { useState } from "react";
import styles from "./Faq.module.css";

function Faq() {
  const [item1, setItem1] = useState(false);
  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);
  const [item4, setItem4] = useState(false);
  const [item5, setItem5] = useState(false);
  const [item6, setItem6] = useState(false);
  const [item7, setItem7] = useState(false);
  const [item8, setItem8] = useState(false);

 
    

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <h4>FAQ</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
        <div className={styles.item}>
          <p>Lorem ipsum dolor sit amet?</p>
          {!item1 ? (
            <button onClick={() => setItem1(true)}>+</button>
          ) : (
            <button onClick={() => setItem1(false)}>-</button>
          )}
        </div>
        <div className={styles.message}>
          <span className={item1 ? styles.show : styles.hidden}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>

        <div className={styles.item}>
          <p>consectetur adipiscing elit?</p>
          {!item2 ? (
            <button onClick={() => setItem2(true)}>+</button>
          ) : (
            <button onClick={() => setItem2(false)}>-</button>
          )}
        </div>
        <div className={styles.message}>
          <span className={item2 ? styles.show : styles.hidden}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>

        <div className={styles.item}>
          <p>sed do eiusmod tempor incididunt ut labore et dolore?</p>
          {!item3 ? (
            <button onClick={() => setItem3(true)}>+</button>
          ) : (
            <button onClick={() => setItem3(false)}>-</button>
          )}
        </div>
        <div className={styles.message}>
          <span className={item3 ? styles.show : styles.hidden}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>

        <div className={styles.item}>
          <p>ullamco laboris nisi ut aliquip ex?</p>
          {!item4 ? (
            <button onClick={() => setItem4(true)}>+</button>
          ) : (
            <button onClick={() => setItem4(false)}>-</button>
          )}
        </div>
        <div className={styles.message}>
          <span className={item4 ? styles.show : styles.hidden}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>

        <div className={styles.item}>
          <p>ea commodo consequat?</p>
          {!item5 ? (
            <button onClick={() => setItem5(true)}>+</button>
          ) : (
            <button onClick={() => setItem5(false)}>-</button>
          )}
        </div>
        <div className={styles.message}>
          <span className={item5 ? styles.show : styles.hidden}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>

        <div className={styles.item}>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit?</p>
          {!item6 ? (
            <button onClick={() => setItem6(true)}>+</button>
          ) : (
            <button onClick={() => setItem6(false)}>-</button>
          )}
        </div>
        <div className={styles.message}>
          <span className={item6 ? styles.show : styles.hidden}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>

        <div className={styles.item}>
          <p>Excepteur sint occaecat cupidatat non?</p>
          {!item7 ? (
            <button onClick={() => setItem7(true)}>+</button>
          ) : (
            <button onClick={() => setItem7(false)}>-</button>
          )}
        </div>
        <div className={styles.message}>
          <span className={item7 ? styles.show : styles.hidden}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>

        <div className={styles.item}>
          <p>sunt in culpa qui officia deserunt mollit anim id est laborum?</p>
          {!item8 ? (
            <button onClick={() => setItem8(true)}>+</button>
          ) : (
            <button onClick={() => setItem8(false)}>-</button>
          )}
        </div>
        <div className={styles.message}>
          <span className={item8 ? styles.show : styles.hidden}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Faq;
