import React from "react";
import Form from "../../../tools/form";

const  FooterDesktop = () => {
  return (
    <>
      <footer>
        <div className="grid grid-cols-3">
          <div>
            <Form />
          </div>
          <div className="flex flex-col items-center text-6xl">
            <a href="Adress:" className="font-bold">
              30 Bd du Chevalier Bayard
              <br />
              77100 - Meaux, France
            </a>
            <a href="mailto:" className="font-bold">
              contact@grumiaux-portfolio.fr
            </a>
            <br />
            <a href="tel:" className="text-xs">
              +33 6.56.71.62.84 / +33 7.46.76.22.54
            </a>
            <div>
              <div>
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
          <div className="flex flex-col">
            <div className="">
              <a href="/" className="">
                Accueil
              </a>
            </div>
            <div className=" ">
              <a href="/about" className="">
                A propos
              </a>
            </div>
            <div className="">
              <a href="/training" className="">
                Training
              </a>
            </div>
            <div className="">
              <a href="/Abonnement" className="">
                Abonnement
              </a>
            </div>
          </div>
        </div>
        <div className="bg-black text-white mt-8 text-lg">
          <div className="flex flex-row justify-center">
            <p className="mx-8 hover:text-teal-500">Mentions Legales</p>
            <p className="mx-8 hover:text-teal-500">Politique en matière de cookies</p>
            <p className="mx-8 hover:text-teal-500">Politique de confidentialité</p>
            <p className="mx-8 hover:text-teal-500">Conditions d'utilisation</p>
          </div>
          <p className="text-center mt-4 mb-8 ">© 2023 . Made by Devblow</p>
        </div>
        <div className="mt-8">
          <p className="text-white">ne rien mettre</p>
        </div>
      </footer>
    </>
  );
};

export default FooterDesktop;
