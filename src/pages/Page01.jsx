import styles from "./Page01.module.css"

function Page01() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>Manage your daily tasks better without all the stress.</p>
        <span>Change the way you manage your tasks with our revolutionary project management technology.</span>
      <div>

      <button className={styles.started}>Get Started</button>
      <button className={styles.demo}>Schedule a Demo</button>
      </div>
      </div>
      <div>
        <img  src="./public/cart.png" alt="cart.png" />
      </div>
    </div>
  );
}

export default Page01;
