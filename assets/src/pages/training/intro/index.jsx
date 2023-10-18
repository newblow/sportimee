import React, { useState } from "react";
import axios from "axios";

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
      <div className="mt-28 mb-10 mx-4">
        <div className="mb-4 p-4 w-7/12 lg:w-2/12">
          <h2 className="font-bold">Training</h2>
        </div>
        <input
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
            setNewReservation({ ...newReservation, day: event.target.value })
          }
        />
        <input
          type="time"
          onChange={(event) =>
            setNewReservation({ ...newReservation, hour: event.target.value })
          }
        />
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
        <button type="button" onClick={() => SubmitReservations()}>
          Envoyer
        </button>
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
      </div>
    </>
  );
};

export default Intro;