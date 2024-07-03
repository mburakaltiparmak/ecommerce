import NavbarDark from "../components/header-components/NavbarDark";
import NavbarLight from "../components/header-components/NavbarLight";

import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Header = () => {
  return (
    <header className="w-full  font-Montserrat text-white">
      <NavbarDark />
      <NavbarLight />
      <hr />
    </header>
  );
};
export default Header;
