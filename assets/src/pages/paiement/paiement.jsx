import React from "react";
import axios from "axios";

const Paiement = () => {
  const ShowRegister = () => {
    return (
      <div className="flex flex-col">
        <a href="http://localhost:8000/register">S'inscrire</a>
        <a href="http://localhost:8000/login">Se connecter</a>
      </div>
    );
  };

  const ShowLogged = () => {
    const subscription = JSON.parse(
      window.localStorage.getItem("subscription")
    );

    let date = new Date();

    return (
      <>
        {/* {console.log(subscription)} */}
        <h1>2. Réserver</h1>
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col">
            <h1>Résume</h1>
            <h2>
              Abonnement{" "}
              {!subscription ? "Aucun abonnement choisi" : subscription.title}{" "}
            </h2>
            <h2>
              Prix{" "}
              {!subscription ? "Aucun abonnement choisi" : subscription.price}
            </h2>
            <h1>
              Total{" "}
              {!subscription ? "Aucun abonnement choisi" : subscription.price}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quibusdam earum fugit, neque.
            </p>
            <input type="checkbox" name="" id="" />
            <a href="http://localhost:8000/abonnement">Changer d'abonnement</a>
            <button type="button">Continuer</button>
          </div>
        </div>
        <div>
          <button
            className="p-2 bg-green-300"
            onClick={() => {
              axios.put("http://localhost:8000/api/users/10", {
                createdAt: date,
                subscription: subscription.title,
              });
            }}
          >
            Paiement
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <h1>1. S'inscrire</h1>
      {!window.user ? <ShowRegister /> : <ShowLogged />}
    </>
  );
};

export default Paiement;
