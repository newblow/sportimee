import React from "react";
import Form from "../../../tools/form";
import { ImFacebook2, ImInstagram, ImYoutube } from "react-icons/im";
const FooterDesktop = () => {
  return (
    <>
      <footer>
        <div className="grid grid-cols-3 bg-teal-800">
          <div className="m-10 border-r">
            <Form />
          </div>
          <div className="flex flex-col items-center text-xl m-10">
            <div className="text-5xl m-14 underline font-bold">
              <h1>Contacter-nous</h1>
            </div>
            <a
              href="Adress:"
              className="font-bold text-center hover:text-white"
            >
              30 Bd du Chevalier Bayard
              <br />
              77100 - Meaux, France
            </a>
            <br />
            <a
              href="mailto:"
              className="font-bold text-center  hover:text-white"
            >
              contact@grumiaux-portfolio.fr
            </a>
            <br />
            <a href="tel:" className="text-md text-center  hover:text-white">
              +33 6.56.71.62.84 / +33 7.46.76.22.54
            </a>
            <div className="pt-16 ">
              <div className="text-center hover:text-orange-300">
                <a href="/Training">
                  <button
                    className=""
                    type="button"
                    onClick={() => SubmitForm()}
                  >
                    Réserver un cours d'éssai
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center m-10  border-l">
            <div className="">
              <div className="flex flex-row items-center">
                <a className="" href={"https://localhost:8000/"}>
                  <img
                    src="/images/logos/sp1.svg"
                    width={200}
                    height={80}
                    alt="AccueilSportime"
                    className="justify-center"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center text-2xl underline m-4">
              <div className="">
                <a href="/" className="hover:text-white">
                  Accueil
                </a>
              </div>
              <div className=" ">
                <a href="/about" className=" hover:text-white">
                  A propos
                </a>
              </div>
              <div className="">
                <a href="/training" className=" hover:text-white">
                  Training
                </a>
              </div>
              <div className="">
                <a href="/Abonnement" className="hover:text-white">
                  Abonnement
                </a>
              </div>
              <br />
            </div>
            <div className="grid grid-cols-3 items-center rounded">
              <div className="mx-6">
                <a
                  href="https://www.youtube.com/"
                  className="mx-2 hover:text-white"
                >
                  <ImInstagram size="35px" height={"auto"} />
                </a>
              </div>
              <div className="mx-4">
                <a
                  href="https://www.youtube.com/"
                  className=" hover:text-white"
                >
                  <ImYoutube size="50px" height={"auto"} />
                </a>
              </div>
              <div className="mx-6">
                <a
                  href="https://www.youtube.com/"
                  className="mx-2 hover:text-white"
                >
                  <ImFacebook2 size="35px" height={"auto"} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white text-lg pt-5">
          <div className="flex flex-row justify-center">
            <p className="mx-12 hover:text-teal-500 underline">
              Mentions Legales
            </p>
            <p className="mx-10 hover:text-teal-500 underline">
              Politique en matière de cookies
            </p>
            <p className="mx-12 hover:text-teal-500 underline">
              Politique de confidentialité
            </p>
            <p className="mx-12 hover:text-teal-500 underline">
              Conditions d'utilisation
            </p>
          </div>
          <p className="text-center pt-4 pb-5">© 2023 . Made by Devblow</p>
        </div>

        <div className="bg-teal-800">
          <br />
          <br />
        </div>
      </footer>
    </>
  );
};

export default FooterDesktop;
