import styles from "./CurrencyDetailPage.module.css";
import moment from "moment-jalaali";

function CurrencyDetailPage({ modal, setModal }) {
  const {
    id,
    image,
    symbol,
    last_updated,
    market_data: {
      current_price: { usd },
    },
  } = modal;
  const persianDate = moment(last_updated).format("jYYYY/jMM/jDD");

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.head}>
          <p><b style={{color:"#08C056"}}>7</b>currencies<b style={{color:"#08C056"}}>.</b></p>
          <span className={styles.cross} onClick={() => setModal(null)}>
            X
          </span>
        </div>
        <div className={styles.info}>
          <div>
            <img src={image.large} alt="image" />
            <span>{id}</span>
            <p className={styles.symbol}>{symbol.toUpperCase()}</p>
          </div>
          <span>{persianDate} Updated</span>
        </div>
        <div className={styles.usd}>
        <p>{usd}</p>
        <span>USD</span>
        </div>
        
      </div>
    </div>
  );
}

export default CurrencyDetailPage;
