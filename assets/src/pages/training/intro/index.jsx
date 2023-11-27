import React, { useState } from "react";
import axios from "axios";
import Trainingh from "../../home/trainingh";

const Intro = () => {
  const [newReservation, setNewReservation] = useState({
    day: "",
    hour: "",
    category: "",
    fullName: "",
  });

  const SubmitReservations = () => {
    const data = {
      day: newReservation.day,
      hour: newReservation.hour,
      category: newReservation.category,
      fullName: newReservation.fullName,
    };

    const config = {
      headers: {
        Authorization:
          "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTY5MjgxODgsImV4cCI6MTY5NjkzMTc4OCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmZyIn0.0uqZI5TqmMHNG7w5ejPRqm0M3U3wra3SX6TLRk1D7r_L1wQ9IlMVWnBGTHnyYJGh1NIhp3I6IfcgDk8RQTB-fx8GUGb_FXxEof6J9UGeYwG-i7ZejuxtJCrs0Vd1_ucvH0vZqMZgINj_aFoDOjSS0O9fxvB9A888P25MD5lT7kN3Kz5ipnnf5GbzSzoRyPrzoLhTDv3OG46CILUR9B4BqRR0_R86EqLNM7pBLMecCJxOWcfZygTeRC7X2R7hN3aCVWU0fui80uAkJ14xXyTpyoEWDCWKLGNqJgeZjZzWYbHV-jQ8ySbR7rH21xc4KZc1FBrmgl39a-IhSLgsA4Oj-g",
      },
    };
    axios.post("/api/courses_reservations", data, config);
  };

  return (
    <>
      <div
        className="bg-top bg-cover"
        style={{
          backgroundImage: `url("https://www.uniquefitness.fr/data/uploads/2022/05/crosstraining.jpg")`,
          height: "1150px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center p-20">
          <div className=" text-white text-6xl flex flex-col justify-center">
            <h1 className=" w-3/6 flex flex-row justify-center p-60">
            Réveiller vous avec détermination et endormez vous avec satisfaction..
            </h1>
          </div>
          <div className="w-1/5">
            <button class=" bg-white border-0 focus:outline-none hover:bg-teal-600 rounded">
              C'est Partie
            </button>
          </div>
        </div>
      </div>

      <section>
        <Trainingh />
      </section>
      <div className="mt-28 mb-10 mx-4">
        <div class="flex flex-col p-10 ">
          <h1 className="font-bold md:text-5xl text-black flex justify-center p-10">
            Reserver un cours
          </h1>
          <div class="h-1 bg-gray-800 rounded overflow-hidden">
            <div class="w-24 h-full bg-red-500"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 font-medium title-font text-2xl mb-2 sm:mb-0">
              Réserver un cours selon vos disponibilités
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-center">
          <div className="grid grid-cols-2 justify-center">
            <div>
              <div class=" flex justify-center">
                <div class="">
                  <label
                    for="email"
                    class="leading-7 text-sm text-gray-600 font-bold"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class=" flex justify-center">
                <div class="">
                  <label
                    for="email"
                    class="leading-7 text-sm text-gray-600 font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="leading-7 text-sm text-gray-600 font-bold">
                message
              </h2>
              <textarea
                id="message"
                name="message"
                cols="50"
                rows="5"
                class="bg-gray-100 bg-opacity-50 rounded border border-gray-300"
              ></textarea>
            </div>
          </div>
          <div className="text-xl grid grid-cols-3 w-full">
            <div className="">
              <h2 className="font-bold">Choisiser votre date</h2>
              <input
                className="px-4"
                type="text"
                onChange={(event) =>
                  setNewReservation({
                    ...newReservation,
                    fullName: event.target.value,
                  })
                }
              />
              <input
                type="date"
                name=""
                id=""
                onChange={(event) =>
                  setNewReservation({
                    ...newReservation,
                    day: event.target.value,
                  })
                }
              />
              <input
                type="time"
                onChange={(event) =>
                  setNewReservation({
                    ...newReservation,
                    hour: event.target.value,
                  })
                }
              />
            </div>

            <div>
              <h2 className="pb-8 font-bold ">Choisiser votre catégory</h2>
              <select
                name=""
                id=""
                onChange={(event) => {
                  setNewReservation({
                    ...newReservation,
                    category: event.target.value,
                  });
                }}
              >
                <optgroup label="Dos">
                  <option>A</option>
                  <option>B</option>
                </optgroup>
                <optgroup label="Jambes">
                  <option>Fessiers</option>
                  <option>Ischio</option>
                </optgroup>
              </select>
            </div>

            {/* <div className="my-4 lg:grid lg:grid-cols-2">
          {dataTraining.map((training) => {
            return (
              <div key={training.id} className="my-4 flex justify-center">
                <CardTraining
                  title={training.title}
                  image ={training.date}
                  description={training.description}
                  alt={training.alt}
                />
              </div>
            );
          })}
        </div> */}
            <div className="p-6 ">
              <button type="button" onClick={() => SubmitReservations()}>
                Envoyer
              </button>
            </div>
          </div>
          
        </div>
        <div
            className="bg-cover bg-center flex flex-col justify-center m-20 font-extrabold text-8xl text-center text-white"
            style={{
              backgroundImage: `url("https://static.wixstatic.com/media/ad420a_a4005babf5224625a8ce3ddaf7fbd913~mv2_d_4608_2592_s_4_2.jpg/v1/fill/w_1263,h_655,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ad420")`,
              width: "",
              height: "300px",
              backgroundRepeat: "no-repeat",
            }}
          >Just Take your Time..</div>
      </div>
    </>
  );
};

export default Intro;
