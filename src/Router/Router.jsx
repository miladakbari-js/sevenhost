import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Currencies from "../pages/Currencies";

import PageNotFound from "../pages/404";
import Faq from "../components/layout/Faq";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/currencies" element={<Currencies />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
