import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import DetailPet from "./pages/DetailPet/DetailPet";
import DetailPlants from "./pages/DetailPlants/DetailPlants";
import DetailWork from "./pages/DetailWork/DetailWork";
import DetailHob from "./pages/DetailHob/DetailHob";
import DetailSoc from "./pages/DetailSoc/DetailSoc";
import DetailCod from "./pages/DetailCod/DetailCod";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/detail/0" element={<DetailPet />} />
          <Route path="/detail/1" element={<DetailPlants />} />
          <Route path="/detail/2" element={<DetailWork />} />
          <Route path="/detail/3" element={<DetailHob />} />
          <Route path="/detail/4" element={<DetailSoc />} />
          <Route path="/detail/5" element={<DetailCod />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
