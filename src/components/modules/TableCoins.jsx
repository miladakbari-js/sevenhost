import { RotatingLines } from "react-loader-spinner";
import styles from "./TableCoins.module.css";
import { Link } from "react-router-dom";
import moment from "moment-jalaali";

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
            <tr style={{color:"#777E90"}}>
              <th>#</th>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {/* a table row has been created for each coin.*/}
            {coins.map((coin , index) => (
              // TableRow built in the bottom of component
              <TableRow coin={coin} key={coin.id} index={index+1}/>
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
  coin: { image, name, symbol, current_price, last_updated },index
}) => {
  const persianDate = moment(last_updated).format("jYYYY/jMM/jDD");
  return (
    <tr>
      <td style={{color:"#777E90"}}>{index}</td>
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
      <td>{persianDate}</td>
    </tr>
  );
};
