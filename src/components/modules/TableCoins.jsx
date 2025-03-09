import { RotatingLines } from "react-loader-spinner";
import styles from "./TableCoins.module.css";
import moment from "moment-jalaali";
import { useState } from "react";
import CurrencyDetailPage from "../../pages/CurrencyDetailPage";
import { getModalDetail } from "../../services/SevenhostApi";

// made table and show coins data in table
function TableCoins({ coins, isLoading }) {
  console.log(coins);
  const [modal, setModal] = useState(null);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#2140D4" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr style={{ color: "#777E90" }}>
              <th>#</th>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {/* a table row has been created for each coin.*/}
            {coins.map((coin, index) => (
              // TableRow built in the bottom of component
              <TableRow
                coin={coin}
                key={coin.id}
                index={index + 1}
                setModal={setModal}
                modal={modal}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoins;

// because it is used once, it was developed in the same component
const TableRow = ({
  coin: { image, name, symbol, current_price, last_updated },
  index,
  setModal,
  modal,
}) => {
  const persianDate = moment(last_updated).format("jYYYY/jMM/jDD");

  const showHandler = async () => {
    try {
      const res = await fetch(getModalDetail(name));
      const json = await res.json();
      console.log(json);
      if(json.error ){alert("notFound coin data please refresh!!!")}
      setModal(json);
    } catch (error) {
      
    }
  };
  return (
    <>
      <tr>
        <td style={{ color: "#777E90" }}>{index}</td>
        <td onClick={showHandler}>
          <div className={styles.symbol}>
            {/* <Link to={`/currencies/${name}`}> */}
            <img src={image} alt={name} />
            {/* </Link> */}
            <span>{symbol.toUpperCase()}</span>
          </div>
        </td>
        <td>{name}</td>
        <td>{current_price.toLocaleString()}$</td>
        <td>{persianDate}</td>
      </tr>
      {modal && <CurrencyDetailPage modal={modal} setModal={setModal} />}
    </>
  );
};
