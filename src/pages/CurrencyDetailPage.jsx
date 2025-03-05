import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CurrencyDetailPage.module.css";
import { RotatingLines } from "react-loader-spinner";

function CurrencyDetailPage() {
  const params = useParams();
  const [detail, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log(detail?.description.en);
  console.log(detail);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${params.name.toLowerCase()}?x_cg_demo_api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((json) => setDetail(json));
      setIsLoading(false);
  }, []);
 
  return (
    <>
      {isLoading ? (
        <h1>is Loading...</h1>
      ) : (
        <div className={styles.container}>
          <h2>{params.name}DetailPage</h2>
          <div className={styles.detail}>
            <img src={detail?.image.large} />
            <p>{detail?.description.en}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CurrencyDetailPage;
