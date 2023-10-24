import React from "react";

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
          backgroundImage: `url("/images/background.png")`,
          width: "1903",
          height: "956px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center p-20">
          <div className=" text-white text-8xl flex flex-col justify-center">
            <h1 className=" w-2/4 flex flex-row justify-center p-20">
              Le fitness devient ton quotidien
            </h1>
          </div>
          <div className="w-1/5">
            <button class=" bg-white border-0 focus:outline-none hover:bg-teal-600 rounded">
              C'est Partie
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
