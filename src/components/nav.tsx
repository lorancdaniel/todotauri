import { BrowseRouter, Routes, Route, Link } from "react-router-dom";
import App from "../App";
function Navigation () {
  return (
  <BrowseRouter>
      <main>
        <Routes>
          <Route path="/" element={App}/>
          <Route path="/Add" element={Add}/>
        </Routes>
      </main>
  </BrowseRouter>
  )
};
export default Navigation;
