import { useEffect, useState } from "react";
import TableCoins from "../components/modules/TableCoins";
import { getCoinsList } from "../services/SevenhostApi";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./Currencies.module.css";
import Frame15 from "../components/layout/Frame15";



function Currencies() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1); //page counter
  const [hasMore, setHasMore] = useState(true); //infinit scroll more
  const [scrollCount, setScrollCount] = useState(0); // scroll counter
  

  //fech data for coins
  const fetchCoins = async (currentPage) => {
    const res = await fetch(getCoinsList(currentPage));
    const data = await res.json();
    return data;
  };

  const loadMoreCoins = async () => {
    const newCoins = await fetchCoins(page);
    setCoins((prevCoins) => [...prevCoins, ...newCoins]);
    setPage((prevPage) => prevPage + 1);
    setScrollCount((prevCount) => prevCount + 1);

    if (scrollCount + 1 >= 4) {
      setHasMore(false);
    }

    if (newCoins.length === 0) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    const getInitialCoins = async () => {
      const initialCoins = await fetchCoins(1);
      setCoins(initialCoins);
      setIsLoading(false);
    };

    getInitialCoins();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.text}>
          <p>Today’s Cryptocurrency prices</p>
          <span>
            The global crypto market cap is <b>$1.86T</b>
          </span>
        </div>
        <div className={styles.image}>
          <img src="./public/pic01.png" alt="" />
        </div>
      </div>
      <div className={styles.table}>
        
        <InfiniteScroll
          dataLength={coins.length}
          next={loadMoreCoins}
          hasMore={hasMore}
          // loader={<RotatingLines/>}
        >
          <TableCoins coins={coins} isLoading={isLoading} />
        </InfiniteScroll>

        {!hasMore && (
          <button  onClick={loadMoreCoins}>
            Show more
          </button>
        )}
      </div>
       <Frame15/>
    </div>
  );
}

export default Currencies;
