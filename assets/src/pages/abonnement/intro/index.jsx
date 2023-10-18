import React from "react";
import CardAbonnement from "../../../components/tools/cards/abonnement";
import dataAbonnement from "../data/abonnement.json";

const Intro = () => {
  return (
    <section className="mt-28 mb-10 mx-4">
      <div className="contain-yellow mb-4 p-4 w-7/12 lg:w-2/12">
        <h2 className="font-bold">Abonnement</h2>
      </div>
      <div className="my-4  dark:text-white lg:grid lg:grid-cols-3">
        {dataAbonnement.map((abonnement) => {
          return (
            <div key={abonnement.id} className="my-4 flex justify-center">
              <CardAbonnement
                title={abonnement.title}
                prix={abonnement.prix}
                button={abonnement.button}
                description={abonnement.description}
                onClick={() => {
                  window.localStorage.setItem("subscription", JSON.stringify({
                    title: abonnement.title,
                    price: abonnement.prix,
                  }));
                  alert(`Abonnement ${abonnement.title} ajouté !`);
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Intro;
