import React from "react";
import Form from "../../../components/tools/form";

const Intro = () => {
  return (
    <>
      <body className=" mt-27 w-full">
        <div className=" bg-auto bg-no-repeat">
          <img src="/images/image11.jpg" alt="" />
          {/* <h1 className="font-bold text-2xl ">
            Le Fitness deviens ton quotidien
          </h1> */}
        </div>
        <div className="text-center">
          <h1 className="font-bold text-2xl ">A Propos </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ipsa doloremque expedita minima praesentium dolorum blanditiis natus
            ratione mollitia exercitationem quasi, rem odit, soluta commodi
            pariatur ducimus, delectus quia officiis.
          </p>
          <button
            className="font-bold text-xl "
            type="button"
            onClick={() => SubmitForm()}
          >
            {" "}
            Voir +
          </button>
          <img src="/images/image14.jpg" alt="" />
        </div>
        {/* ========Training============= */}
        <div className="text-center">
          <h1 className="font-bold text-xl">Training</h1>
          <div>
            <h2 className="font-bold text-2xl">Training Relax</h2>
            <button
              className="font-bold text-xl contain-blue"
              type="button"
              onClick={() => SubmitForm()}
            >
              Réserver
            </button>
          </div>
          <div>
            <h2 className="font-bold text-2xl">Training Hadcore</h2>
            <button
              className="font-bold text-xl contain-blue"
              type="button"
              onClick={() => SubmitForm()}
            >
              Réserver
            </button>
          </div>
          <div>
            <h2 className="font-bold text-2xl">Training Extreme</h2>
            <button
              className="font-bold text-xl bg-teal-500"
              type="button"
              onClick={() => SubmitForm()}
            >
              Réserver
            </button>
          </div>
        </div>
        {/* ==========Home============= */}
        <div className="flex flex-col text-center">
          <div>
            <h1 className="font-bold text-2xl">
              Rejoin Sportime et transforme ton corps et ton esprit
            </h1>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae quidem excepturi, laborum, modi tempora totam
                exercitationem aspernatur dolorum velit quisquam sed inventore
                qui animi magni. Nisi eaque deleniti tenetur nostrum.
              </p>
              <img src="/images/image2.jpg" alt="" />
            </div>
          </div>
          <div>
            <h1 className="font-bold text-2xl">Communauté</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quidem excepturi, laborum, modi tempora totam
              exercitationem aspernatur dolorum velit quisquam sed inventore qui
              animi magni. Nisi eaque deleniti tenetur nostrum.
            </p>
            <img src="/images/image12.jpg" alt="" />
          </div>
          <div>
            <h1 className="font-bold text-2xl">motivation</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quidem excepturi, laborum, modi tempora totam
              exercitationem aspernatur dolorum velit quisquam sed inventore qui
              animi magni. Nisi eaque deleniti tenetur nostrum.
            </p>
            <img src="/images/image11" alt="" />
          </div>
          <div>
            <h1 className="font-bold text-2xl">Résulats</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quidem excepturi, laborum, modi tempora totam
              exercitationem aspernatur dolorum velit quisquam sed inventore qui
              animi magni. Nisi eaque deleniti tenetur nostrum.
            </p>
            <img src="/images/image5" alt="" />
          </div>
          <h1>Suivez-Moi</h1>
          <div className="flex flex-cols-2 justify-center">
            <div>
              <img src="images/logos/instai.svg" alt="" />
            </div>
            <div>
              <img src="images/logos/iconyou.svg" alt="" />
            </div>
            <div>
              <img src="images/logos/icont.svg" alt="" />
            </div>
          </div>
        </div>
        {/* ==========contact============ */}
        <div className="">
          <div className="flex justify-center">
            <h1 className="font-bold text-2xl">
              Let's Go <br />
            </h1>
          </div>
          <p className="flex justify-center pb-10">
            Abonne toi pour recevoir notre actu.
          </p>
          <div>
            <div className="flex flex-row justify-center pb-4"></div>
            <div className="flex flex-col items-center">
              
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Intro;
