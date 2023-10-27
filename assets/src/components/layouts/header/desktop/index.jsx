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
          <a className="" href={"http://127.0.0.1:8000/"}>
            <img
              src="/images/logos/sp1.svg"
              width={90}
              height={100}
              alt="AccueilSportime"
              className="justify-center"
            />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <ol className="flex flex-row">
            <li className="px-4 border-r shadow-md">
              <a href="/" className="hover:text-teal-500">
                Accueil
              </a>
            </li>
            <li className="px-4 border-r shadow-md">
              <a href="/about" className="hover:text-teal-500">
                A propos
              </a>
            </li>
            <li className="px-4 border-r shadow-md">
              <a href="/training" className="pb-6 hover:text-teal-500">
                Training
              </a>
            </li>
            <li className="px-4 shadow-md">
              <a href="/abonnement" className="hover:text-teal-500">
                Abonnement
              </a>
            </li>
          </ol>
        </div>

        <section className="grid grid-cols-3 items-center">
          <div className="flex flex-row justify-center">
            <buttone
              type="button"
              className=""
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
          </div>

          <div className="flex flex-row justify-center ">
            <div className="flex flex-row  ">
              <CgProfile size={26} height={"auto"} className="" />
            </div>
            <div className=" flex flex-row px-1 hover:text-teal-500">
              <a href="/login" className="text-center text-lg ">
                Se connecter
              </a>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <select className="select select-info max-w-xs bg-black w-1/3">
              <option disabled selected >
                langue
              </option>
              <option>English</option>
              <option>Français</option>
              <option>Camerounais</option>
            </select>
          </div>
        </section>
      </div>
    </nav>
  );
};
export default NavbarDesktop;
