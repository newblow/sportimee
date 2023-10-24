import React from "react";
import { CgToggleSquare, CgToggleSquareOff, CgProfile } from "react-icons/cg";
import { useState } from "react";
import DarkMode from "../../../tools/darkmode";

const NavbarDesktop = () => {
  const [showToggle, setShowToggle] = useState(false);
  return (
    <nav>
      <div className="z-10 grid grid-cols-3 items-center w-full fixed top-0 bg-black text-white">
        <div className="flex flex-row justify-center ">
          <a className="" href={"https://localhost:8000/"}>
            <img
              src="/images/logos/sp1.svg"
              width={90}
              height={100}
              alt="AccueilSportime"
              className="justify-center"
            />
          </a>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row">
            <div className="px-4 border-r shadow-md">
              <a href="/" className="hover:text-teal-500">
                Accueil
              </a>
            </div>
            <div className="px-4 border-r shadow-md">
              <a href="/about" className="hover:text-teal-500">
                A propos
              </a>
            </div>
            <div className="px-4 border-r shadow-md">
              <a href="/training" className="pb-6 hover:text-teal-500">
                Training
              </a>
            </div>
            <div className="px-4 shadow-md">
              <a href="/abonnement" className="hover:text-teal-500">
                Abonnement
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <buttone
            type="button"
            className="flex flex-row justify-center pr-24"
            onClick={() => {
              DarkMode();
              setShowToggle(!showToggle);
            }}
          >
            {showToggle === false ? (
              <CgToggleSquare
                size={30}
                className="text-white hover:text-teal-500"
              />
            ) : (
              <CgToggleSquareOff
                size={30}
                className="text-white hover:text-teal-500"
              />
            )}
          </buttone>
          <div className="hover:text-teal-500">
            <div className="flex flex-row justify-end ">
              <div className="flex flex-row  ">
                <CgProfile size={26} height={"auto"} className="" />
              </div>
              {/* <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="avatar offline">
            <div className="w-24 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div> */}
              <div className=" flex flex-row px-1 ">
                <a href="/login" className="text-center text-lg ">
                  Se connecter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavbarDesktop;
