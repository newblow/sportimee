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
        <div className="">
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
              <a href="/Abonnement" className="hover:text-teal-500">
                Abonnement
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <button
            type="button"
            className="flex flex-row justify-center pr-10"
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
          </button>
          <div className="flex flex-row items-center p-2">
            <CgProfile
              size={25}
              height={"auto"}
              className=" hover:text-teal-500"
            />
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
          <div className=" flex flex-row px-2 ">
            <a
              href="/login"
              className="flex flex-row items-center text-center text-lg pr-8 hover:text-teal-500"
            >
              Se connecter
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavbarDesktop;
