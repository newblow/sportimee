import React from "react";
import Carousel from "../caroussel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Price from "../price";

const Intro = () => {
  return (
    <>
      <section>
        <div
          className="bg-top bg-cover"
          style={{
            backgroundImage: `url("/images/f2.jpg")`,

            height: "1155px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col justify-center p-20">
            <div className=" text-white text-6xl flex flex-col">
              <h1 className="p-60 uppercase">
                Commence ou tu es <br />
                Utilise ce que tu as
                <br /> Fais ce que tu peux
              </h1>
            </div>
            
          </div>
          <div className="flex justify-center">
              <button class=" bg-white border-0 focus:outline-none hover:bg-teal-600 rounded flex justify-center">
                Lance TOI
              </button>
            </div>
        </div>
      </section>
      <section class=" bg-zinc-950 body-font overflow-hidden">
        <div class="flex flex-col p-20">
          <h1 className="font-bold md:text-5xl flex text-white justify-center p-20">
            Training
          </h1>
          <div class="h-1 bg-gray-800 rounded overflow-hidden">
            <div class="w-96 h-full bg-teal-500"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 font-medium title-font text-2xl mb-2 sm:mb-0 text-white">
              Choisiser votre formule
            </h1>
          </div>
        </div>
        <Price />
      </section>
      <section class="text-white bg-zinc-950 body-font">
        <div class="flex flex-col p-20">
          <h1 className="font-bold md:text-5xl flex text-white justify-center p-20">
            Ils nous font confiance..
          </h1>
          <div class="h-1 bg-gray-800 rounded overflow-hidden">
            <div class="w-96 h-full bg-teal-500"></div>
          </div>
        </div>
        <div className="bg-zinc-950 pb-40">
          <Carousel />
        </div>
      </section>
    </>
  );
};
export default Intro;

// <section className="mt-28 mb-10 mx-4">
//   <div className="contain-yellow mb-4 p-4 w-7/12 lg:w-2/12">
//     <h2 className="font-bold">Abonnement</h2>
//   </div>
//   <div className="my-4  dark:text-white lg:grid lg:grid-cols-3">
//     {dataAbonnement.map((abonnement) => {
//       return (
//         <div key={abonnement.id} className="my-4 flex justify-center">
//           <CardAbonnement
//             title={abonnement.title}
//             prix={abonnement.prix}
//             button={abonnement.button}
//             description={abonnement.description}
//             onClick={() => {
//               window.localStorage.setItem("subscription", JSON.stringify({
//                 title: abonnement.title,
//                 price: abonnement.prix,
//               }));
//               alert(`Abonnement ${abonnement.title} ajouté !`);
//             }}
//           />
//         </div>
//       );
//     })}
//   </div>
// </section>
