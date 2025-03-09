import AbouttheApp from "../components/layout/AbouttheApp";
import Faq from "../components/layout/Faq";
import Frame17 from "../components/layout/Frame17";
import Hero from "../components/layout/Hero";
import Item7 from "../components/layout/Item7";
import Item8 from "../components/layout/Item8";
import Item9 from "../components/layout/Item9";
import styles from "./HomePage.module.css";
import Page01 from "./page01";

function HomePage() {
  return (
    <div className={styles.container}>
      {/* <Page01/> */}

      {/* <AbouttheApp /> */}
      {/* <Item7/> */}
      {/* <Item9/> */}
      {/* <Item8/> */}
      {/* <Frame17/> */}
      {/* <Hero/> */}
      <Faq/>
    </div>
  );
}

export default HomePage;
