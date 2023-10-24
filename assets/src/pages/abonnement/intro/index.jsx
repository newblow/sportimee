import React from "react";
import Carousel from "../caroussel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Intro = () => {
  return (
    <>
      <section>
        <di>limage de merde</di>
      </section>
      <section class="text-gray-400 bg-zinc-950 body-font overflow-hidden">
        <div class="container px-5 py-36 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Choisisser votre formule
            </h1>
            {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p> */}
            <div class="flex mx-auto border-2 border-teal-500 rounded overflow-hidden mt-6">
              <button class="py-1 px-4 bg-teal-500 text-white focus:outline-none">
                Monthly
              </button>
              <button class="py-1 px-4 text-gray-300 focus:outline-none">
                Annually
              </button>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden hover:border-teal-400">
                <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                  DECOUVERTE
                </h2>
                <h1 class="text-5xl pb-4 mb-4 border-b border-gray-800 leading-none">
                  Free
                </h1>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Vexillologist pitchfork
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Tumeric plaid portland
                </p>
                <p class="flex items-center text-gray-400 mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Mixtape chillwave tumeric
                </p>
                <button class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-teal-500 rounded ">
                  Ma formule
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-400 mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full ">
              <div class="h-full p-6 rounded-lg border-2 border-gray-500 flex flex-col relative overflow-hidden hover:border-teal-500">
                <span class="bg-teal-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  BON PLAN
                </span>
                <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                  RELAX
                </h2>
                <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                  <span>$25</span>
                  <span class="text-lg ml-1 font-normal text-gray-400">
                    /mois
                  </span>
                </h1>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Vexillologist pitchfork
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Tumeric plaid portland
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Hexagon neutra unicorn
                </p>
                <p class="flex items-center text-gray-400 mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Mixtape chillwave tumeric
                </p>
                <button class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-teal-600 rounded">
                  Choisir
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-400 mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden hover:border-teal-500">
                <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                  SPORTIF
                </h2>
                <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                  <span>$50</span>
                  <span class="text-lg ml-1 font-normal text-gray-400">
                    /mois
                  </span>
                </h1>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Vexillologist pitchfork
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Tumeric plaid portland
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Hexagon neutra unicorn
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Vexillologist pitchfork
                </p>
                <p class="flex items-center text-gray-400 mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Mixtape chillwave tumeric
                </p>
                <button class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none rounded hover:bg-teal-500">
                  Choisir
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-400 mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full ">
              <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden hover:border-teal-500">
                <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                  EXPERT
                </h2>
                <h1 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                  <span>$70</span>
                  <span class="text-lg ml-1 font-normal text-gray-400">
                    /mois
                  </span>
                </h1>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Vexillologist pitchfork
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Tumeric plaid portland
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Hexagon neutra unicorn
                </p>
                <p class="flex items-center text-gray-400 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Vexillologist pitchfork
                </p>
                <p class="flex items-center text-gray-400 mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Mixtape chillwave tumeric
                </p>
                <button class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">
                  Choisir
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-400 mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-white bg-zinc-950 body-font">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2">
            Ils nous font confiances
          </h1>
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
