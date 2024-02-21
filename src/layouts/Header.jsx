import NavbarDark from "../components/NavbarDark";
import NavbarLight from "../components/NavbarLight";
import NavbarLight2 from "../components/NavbarLight2";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const { pathname } = useLocation();
  const isSmScreen = useMediaQuery("(max-width: 767px)"); // sm için media query

  return (
    <header className="w-full font-montserrat text-white sm:w-full">
      {isSmScreen && <NavbarLight2 />}

      {!isSmScreen && (
        <>
          {pathname !== "/about" &&
            pathname !== "/contact" &&
            pathname !== "/pricing" &&
            pathname !== "/team" && <NavbarDark />}
          {pathname !== "/about" &&
            pathname !== "/contact" &&
            pathname !== "/pricing" &&
            pathname !== "/team" && <NavbarLight />}
        </>
      )}

      <hr />
    </header>
  );
};

export default Header;
