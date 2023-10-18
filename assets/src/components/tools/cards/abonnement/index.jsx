import React from "react";
import PropTypes from "prop-types";

const CardsAbonnement = ({ key, title, prix, button, description, onClick }) => {
  return (
    <div key={key} className="items-center  p-6 lg:w-1/2 contain-black">
      <h1 className="mt-100 flex flex-row justify-center font-bold text-xl text-[#ffffff] ">
        {title}
      </h1>
      <p className="mt-10 text-6xl flex flex-row justify-center">{prix}</p>
      <button
        type="button"
        onClick={onClick}
        className=" mt-10 contain-blue p-4 flex flex-row justify-center"
      >
        {button}
      </button>
      <p className="contain-white m-10">{description}</p>
    </div>
    // <div className="h-40 w-80 grid grid-rows-3">
    //   <div className="row-span-2 bg-violet"></div>
    //   <div></div>

    // </div>
  );
};

CardsAbonnement.propTypes = {
  title: PropTypes.string,
  prix: PropTypes.string,
  button: PropTypes.string,
  description: PropTypes.string,
};

export default CardsAbonnement;
