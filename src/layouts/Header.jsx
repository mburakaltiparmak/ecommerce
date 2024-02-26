import NavbarDark from "../components/NavbarDark";
import NavbarLight from "../components/NavbarLight";
import NavbarLight2 from "../components/NavbarLight2";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Header = () => {
  const { pathname } = useLocation();

  /*collapse={collapse}
        setCollapse={setCollapse}
        userCollapse={userCollapse}
        setUserCollapse={setUserCollapse} */
  return (
    <header className="w-full  font-Montserrat text-white">
      <NavbarDark />
      <NavbarLight />

      <hr />
    </header>
  );
};
export default Header;
