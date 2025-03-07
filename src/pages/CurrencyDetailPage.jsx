import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CurrencyDetailPage.module.css";
import { RotatingLines } from "react-loader-spinner";

function CurrencyDetailPage() {
  const params = useParams();
  const [detail, setDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${params.name.toLowerCase()}?x_cg_demo_api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        setDetail(json)
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(detail?.description.en);
    console.log(detail);
  }, [isLoading])
 
  return (
    <>
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
          <RotatingLines strokeColor="#2140D4" strokeWidth="2" />
        </div>
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
