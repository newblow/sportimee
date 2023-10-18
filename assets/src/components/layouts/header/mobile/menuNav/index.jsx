import React from "react";
import { slide as Menu } from "react-burger-menu";
import { styles } from "./styles";
// import Link from "next/link";

const MenuNav = () => {
  return (
    <Menu styles={styles}>
      <div>
        <a href="/" className="">
          <img
            src="/logos/white-logo.svg"
            width={100}
            height={100}
            alt="OKLM"
          />
          Accueil
        </a>
      </div>
      <div>
        <div className="flex flex-col ">
          <a className="" href="/">
          </a>
          <a className="" href="/about">
            About
          </a>
          <a className="" href="/abonnement">
            Abonnement
          </a>
          <a className="" href="/training">
            Training
          </a>
          <a className="" href="/contact">
            Contact
          </a>
        </div>
      </div>
      
    </Menu>
  );
};
export default MenuNav;
