import React from "react";

const FooterMobile = () => {
  return (
    <footer className="">
      <div className="">
        <div className="w-full bottom-8 bg-black text-white">
          <div className="grid grid-cols-[50%,50%] justify-center">
            <div className=" flex justify-center">
              <a href={"https://localhost:8000/"}>
                <img
                  src="/logos/sp1.svg"
                  width={100}
                  height={100}
                  alt="AccueilSportime"
                  className=""
                />
              </a>
            </div>
            <div className="text-xs flex justify-center flex-col">
              <p className="flex flex-col text-center">
                © Sportime - 2023
                <br />
                <span className="">Mentions Légales</span>
                <span className="">Politiques cookies</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <span className="text-xs flex justify-center bg-stone-500">
            Made by Grumiaux Bollo
          </span>
        </div>
      </div>
    </footer>
  );
};
export default FooterMobile;
