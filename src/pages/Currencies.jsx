import { useEffect, useState } from "react";
import TableCoins from "../components/modules/TableCoins";
import { getCoinsList } from "../services/SevenhostApi";

function Currencies() {
  //fetchData and save in state

  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinsList());
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    //show table from other component

    <div>
      <TableCoins coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default Currencies;
