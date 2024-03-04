import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/speisekarte">Speisekarte</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
        <NavLink to="/oeffnungszeiten">Öffnungszeiten</NavLink>
        <NavLink to="/galerie">Galerie</NavLink>
      </nav>
    </header>
  );
};

export default Header;
