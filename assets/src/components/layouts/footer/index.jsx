import React from "react";
import FooterMobile from "./mobile";
import FooterDesktop from "./desktop";

const Footer = () => {
  return (
    <>
      <footer className="lg:hidden">
        <FooterMobile />
      </footer>
      <footer className="">
        <FooterDesktop />
      </footer>
    </>
  );
};

export default Footer;
