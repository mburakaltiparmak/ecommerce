import NavbarDark from "../components/NavbarDark";
import NavbarLight from "../components/NavbarLight";
import NavbarLight2 from "../components/NavbarLight2";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="w-full  font-montserrat text-white">
      {pathname !== "/about" &&
      pathname !== "/contact" &&
      pathname !== "/pricing" ? (
        <NavbarDark />
      ) : (
        ""
      )}
      {pathname !== "/about" &&
      pathname !== "/contact" &&
      pathname !== "/pricing" ? (
        <NavbarLight />
      ) : (
        <NavbarLight2 />
      )}

      <hr />
    </header>
  );
};
export default Header;
