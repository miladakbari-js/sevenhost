import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Currencies from "../pages/Currencies";

import PageNotFound from "../pages/404";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/currencies" element={<Currencies />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
