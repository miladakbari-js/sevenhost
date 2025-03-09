const API_KEY = "CG-WgFt3PKPbDTPSftiwUSDKzVC";

const getCoinsList = (page) => {
  return `${
    import.meta.env.VITE_BASE_URL
  }/coins/markets?vs_currency=usd&per_page=10&page=${page}&x_cg_demo_api_key=${API_KEY}`;
};

const getModalDetail = (name)=>{
  return  `https://api.coingecko.com/api/v3/coins/${name.toLowerCase()}?x_cg_demo_api_key=${
    import.meta.env.VITE_API_KEY
  }`
}

export { getCoinsList , getModalDetail };
