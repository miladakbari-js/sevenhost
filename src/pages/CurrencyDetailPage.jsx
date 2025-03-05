import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CurrencyDetailPage() {
  const params = useParams();
  const [detail , setDetail] = useState();
//   console.log(params);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${params.name.toLowerCase()}`)
      .then((res) => res.json())
      .then((json) => setDetail(json));
  }, []);
  return <div>
    CurrencyDetailPage
    {/* <p>{detail.description.en}</p> */}
    </div>;
}

export default CurrencyDetailPage;
