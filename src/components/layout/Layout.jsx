import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.main}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
