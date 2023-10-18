import React from "react";
import PropTypes from "prop-types";

const CardTraining = ({
  key,
  title,
  image,
  alt,
  width,
  height,
  description,
  button,
}) => {
  return (
    <div key={key} className=" p-6 lg:w-1/2 contain-black">
      <h1 className="font-bold text-xl text-[#ffffff] ">{title}</h1>
      <div className="pt-1">
        <img src={image} alt={alt} width={300} height={height} />
        <p className="p-2">{description}</p>
      </div>
      <a href={"/paiement"} className="contain-blue p-4 flex flex-row justify-center">
        <button className="" key={button} >Reserver</button>
      </a>{" "}
    </div>
  );
};

CardTraining.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  description: PropTypes.string,
  button: PropTypes.string
};

export default CardTraining;
