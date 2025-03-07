const API_KEY = "CG-WgFt3PKPbDTPSftiwUSDKzVC";

const getCoinsList = (page) => {
  return `${
    import.meta.env.VITE_BASE_URL
  }/coins/markets?vs_currency=usd&per_page=10&page=${page}&x_cg_demo_api_key=${API_KEY}`;
};

export { getCoinsList };
