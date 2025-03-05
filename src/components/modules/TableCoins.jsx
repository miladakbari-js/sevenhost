import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { RotatingLines } from "react-loader-spinner";
import styles from "./TableCoins.module.css";
import { Link } from "react-router-dom";

// made table and show coins data in table
function TableCoins({ coins, isLoading }) {
  console.log(coins);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#2140D4" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>TotalVolume</th>
              <th>Chart</th>
            </tr>
          </thead>
          <tbody>
            {/* a table row has been created for each coin.*/}
            {coins.map((coin) => (
              // TableRow built in the bottom of component
              <TableRow coin={coin} key={coin.id} />
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
  coin: {
    image,
    name,
    symbol,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  },
}) => {
  return (
    <tr>
      <td>
        <div className={styles.symbol}>
          <Link to={`/currencies/${name}`}>
            <img src={image} alt={name} />
          </Link>
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>{current_price.toLocaleString()}$</td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
};
