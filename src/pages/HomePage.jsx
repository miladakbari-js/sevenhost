import AbouttheApp from "../components/layout/AbouttheApp";
import Faq from "../components/layout/Faq";
import Frame15 from "../components/layout/Frame15";
import Hero from "../components/layout/Hero";
import Item7 from "../components/layout/Item7";
import Item8 from "../components/layout/Item8";
import Item9 from "../components/layout/Item9";
import Page01 from "./page01";

function HomePage() {

  return (
    <div>
      <article>
        <Page01 />
      </article>
      <article>
        <AbouttheApp />
      </article>
      <article>
        <Item7 />
      </article>
      <article>
        <Item9 />
      </article>
      <article>
        <Item8 />
      </article>
      {/* <article>
        <Frame17 />
      </article> */}
      <article>
        <Hero />
      </article>
      <article>
        <Faq />
      </article>
      <article>
        <Frame15 />
      </article>
    </div>
  );
}

export default HomePage;
