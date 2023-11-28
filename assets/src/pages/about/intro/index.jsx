import React from "react";
import { Parallax,} from "react-parallax";
import Form from "../../../components/tools/form";

const Intro = () => {
  const imageSrc = '/images/f1.jpg';
  return (
    <>
    
    <Parallax bgImage={imageSrc} strength={700}>
      <div className="" style={{ height: '650px', top:'0px', backgroundSize: 'cover' }}> {/* Ajustez la hauteur selon vos besoins */}
        <div style={{ textAlign: 'center', padding: '200px 0', }}>
          <h1 style={{ color: 'white' }}>decouvrer notre histoire depuis ces débuts..</h1>
        </div>
        <div className="w-1/5 flex flex-row justify-center">
            <button class=" bg-white border-0 focus:outline-none hover:bg-teal-600 rounded">
              Découvrir
            </button>
          </div>
      </div>
      </Parallax>
 
  
        {/* <Background className="custom-bg ">
          <div className="" style={{ backgroundPosition: 'center' }}>
          <img
            src="https://static.wixstatic.com/media/84770f_6197f6bd0a9c41788f15876c8dc8e73b~mv2.jpg/v1/fill/w_1903,h_953,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6197f6bd0a9c41788f15876c8dc8e73b~mv2.jpg"
            className=" "
            alt
            bgImageSize={{}} 
            style={{ width: "1903px", height: "650px", objectFit:'cover' }}
            fetchpriority="high"
          ></img>
        </div>
        </Background> */}

      
      <div className="grid grid-cols-2">
        <div class="px-2 flex flex-row justify-center h-[1000px]">
          <div class="flex flex-row w-full rounded sm:py-24 py-16 sm:px-10 px-6 relative justify-center">
            <div class="rounded-lg overflow-hidden w-1/2 flex flex-col justify-center">
              <h1 className="font-bold text-8xl md:text-5xl text-black p-4">
                À propos de Sportime
              </h1>
              <p className="p-2">
                Suspendisse a ipsum vel risus facilisis posuere. Suspendisse
                potenti. Duis tincidunt mi purus, sed malesuada magna cursus id.{" "}
                <br /> <br />
                Nunc sed suscipit ex. Pellentesque bibendum, erat ac elementum
                aliquam. Suspendisse a ipsum vel risus facilisis posuere.
                Suspendisse potenti. Duis tincidunt mi purus, sed malesuada
                magna cursus id. <br /> <br />
                Nunc sed suscipit ex. Pellentesque bibendum, erat ac elementum
                aliquam.
                <br /> <br />
                Nunc sed suscipit ex. Pellentesque bibendum, erat ac elementum
                aliquam.
              </p>
              <div className="p-4 flex justify-center">
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
          strength={1000}
          className=""
          bgImageSize="100%"
        ></Parallax>
      </div>
      <div className="grid grid-cols-2">
        <Parallax
          bgImage="/images/img1.webp"
          bgImageAlt="the cat"
          strength={1000}
          bgImageSize="100%"
        ></Parallax>
        <div className="flex flex-col justify-center p-28 h-[1000px]">
          <h1 class=" font-extrabold text-5xl p-5">
            À propos de Grumiaux bollo
          </h1>
          <h1 className="text-teal-500 p-5 text-2xl">
            Fondateur et coach sportif certifié
          </h1>
          <p>
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
      <div>
        <Form />
      </div>
    </>
  );
};

export default Intro;
