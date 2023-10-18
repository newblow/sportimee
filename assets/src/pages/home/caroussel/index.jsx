
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Caroussel = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop showArrows={true}>
        <div>
          <img src="/logos/white-logo.svg" alt="" width={50} height={50} />
          <p>Portfolio</p>
        </div>
        <div>
          <img src="/" alt="" width={50} height={50} />
          <p>Sportime</p>
        </div>
        <div>
          <img src="/" alt="" width={50} height={50} />
          <p>Devnet</p>
        </div>
      </Carousel>
    </>
  );
};
export default Caroussel;
