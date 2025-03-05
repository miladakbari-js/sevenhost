import axios from "axios";

const api = axios.create({
  baseURL:import.meta.env.VITE_BASE_URL,
  headers:{
    "Content-Type":"application/json"
  }
})


const API_KEY = "CG-WgFt3PKPbDTPSftiwUSDKzVC";

const getCoinsList = () => {
  return `${import.meta.env.VITE_BASE_URL}/coins/markets?vs_currency=usd&per_page=10&page=1&x_cg_demo_api_key=${API_KEY}`;
};

export { getCoinsList , api };
