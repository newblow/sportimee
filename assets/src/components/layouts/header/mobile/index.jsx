import React from "react";
import MenuNav from "./menuNav";

const NavbarMobile = () => {
  return (
    <nav className="z-10 grid grid-cols-[20%,80%] w-full fixed top-0 bg-slate-500">
      <div className="border-r">
        <div className="">
          <MenuNav />
        </div>
      
      </div>
      <div className="flex flex-row justify-center">
          <a
            className=""
            href={"https://localhost:8000/"}
          >
            <img
              src="/logos/sp1.svg"
              width={100}
              height={100}
              alt="AccueilSportime"
              className=""
            />
          </a>
        </div>
    </nav>
  );
};
export default NavbarMobile;
