import { Route , Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Currencies from "../pages/Currencies"
import CurrencyDetailPage from "../pages/CurrencyDetailPage"
import PageNotFound from "../pages/404"


function Router() {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/currencies" element={<Currencies />} />
    <Route path="/currencies/:name" element={<CurrencyDetailPage />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
  )
}

export default Router