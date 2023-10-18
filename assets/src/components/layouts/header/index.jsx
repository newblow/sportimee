// import NavbarDesktop from "./desktop";
import NavbarMobile from "./mobile/index";
import NavbarDesktop from "./desktop";
import React from "react";

const Header = () => {
  return (
    <>
    <div className="max-lg:hidden">
      <NavbarDesktop />
    </div>
    <div className="lg:hidden">
      <NavbarMobile/>
    </div>
    </>
  );
};
export default Header;
