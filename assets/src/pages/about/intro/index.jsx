import React from "react";
import { Parallax } from "react-parallax";

const Intro = () => {
  return (
    <>
      {/* <div className=" ">
        <img
          src="https://static.wixstatic.com/media/84770f_6197f6bd0a9c41788f15876c8dc8e73b~mv2.jpg/v1/fill/w_1903,h_953,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6197f6bd0a9c41788f15876c8dc8e73b~mv2.jpg"
          className="w-full bg-top bg-origin-content "
          alt
          width="980"
          height="953"
          style={{ width: "1903", height: "900px" }}
          fetchpriority="high"
        ></img>
      </div> */}

      <div
        className="bg-top bg-cover"
        style={{
          backgroundImage: `url("/images/f1.jpg")`,
          width: "1903",
          height: "956px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center p-20">
          <div className=" text-white text-6xl flex flex-col justify-center">
            <h1 className=" w-1/2 flex flex-row justify-center p-20">
              decouvrer notre histoire depuis ces débuts..
            </h1>
          </div>
          <div className="w-1/5">
            <button class=" bg-white border-0 focus:outline-none hover:bg-teal-600 rounded">
              C'est Partie
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div class="px-2 flex flex-row justify-center">
          <div class="flex flex-row w-full rounded sm:py-24 py-16 sm:px-10 px-6 relative justify-center">
            <div class="rounded-lg overflow-hidden w-1/2 flex flex-col justify-center">
              <h1 className="font-bold text-8xl md:text-5xl text-black p-4">
                À propos de Sportime
              </h1>
              <p className="p-2 h-[800px]">
                Suspendisse a ipsum vel risus facilisis posuere. Suspendisse
                potenti. Duis tincidunt mi purus, sed malesuada magna cursus id.{" "}
                <br />
                Nunc sed suscipit ex. Pellentesque bibendum, erat ac elementum
                aliquam.
              </p>
              <div className="p-4">
                <button class="text-white bg-gradient-to-r from-teal-500 to-red-500 border-0 focus:outline-none hover:bg-teal-600 rounded">
                  Lire plus
                </button>
              </div>
            </div>
          </div>
        </div>
        <Parallax
          bgImage="/images/zeze.jpg"
          bgImageAlt="the cat"
          strength={400}
          className=""
          bgImageSize="100%"

        ></Parallax>
      </div>
      <div className="grid grid-cols-2">
        <Parallax
          bgImage="/images/img1.webp"
          bgImageAlt="the cat"
          strength={400}
          bgImageSize="100%"
        ></Parallax>
        <div className="flex flex-col justify-center p-28">
          <h1 class=" font-extrabold text-5xl p-5">À propos de Grumiaux bollo</h1>
          <h1 className="text-teal-500 p-5 text-2xl">Fondateur et coach sportif certifié</h1>
          <p class="h-[800px]">
            Williamsburg occupy sustainable snackwave gochujang. Pinterest
            cornhole brunch, slow-carb neutra irony. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facilis voluptas eaque culpa, quod
            totam accusamus facere quibusdam a reprehenderit quos dolores
            delectus possimus nostrum ab? Fugiat inventore at quidem totam!
          </p>
          <div className="p-4">
            <button class=" flex mx-auto  text-white bg-gradient-to-r from-teal-500 to-red-500 border-0 py-2 px-5 focus:outline-none rounded">
              Lire plus
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
