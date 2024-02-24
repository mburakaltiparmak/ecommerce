import NavbarDark from "../components/NavbarDark";
import NavbarLight from "../components/NavbarLight";
import NavbarLight2 from "../components/NavbarLight2";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="w-full  font-Montserrat text-white">
      <NavbarDark />
      <NavbarLight />

      <hr />
    </header>
  );
};
export default Header;
