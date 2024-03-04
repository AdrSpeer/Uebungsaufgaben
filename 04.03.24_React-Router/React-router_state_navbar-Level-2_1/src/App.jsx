import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Speisen from "./pages/Speisen/Speisen";
import Header from "./components/Header/Header";
import Kontakt from "./pages/Kontakt/Kontakt";
import Oeffnungszeiten from "./pages/Oeffnungszeiten/Oeffungszeiten";
import Galerie from "./pages/Galerie/Galerie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/speisekarte" element={<Speisen />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/oeffnungszeiten" element={<Oeffnungszeiten />} />
          <Route path="/galerie" element={<Galerie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
