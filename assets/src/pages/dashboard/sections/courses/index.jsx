import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../../components/context/userProvider";
import axios from "axios";

const Courses = () => {
  const { user, setUser } = useContext(UserContext);
  const [courses, setCourses] = useState([]);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/courses").then((response) => {
      setCourses(response.data["hydra:member"]);
    });

    axios
      .get("http://localhost:8000/api/courses_reservations")
      .then((response) => {
        setReservations(response.data["hydra:member"]);
      });
  }, []);

  const ShowRelaxCourses = () => {
    return (
      <>
        {courses.map((course) => {
          if (course.subscription === "Relax") {
            return (
              <div key={course.id}>
                <h1>{course.title}</h1>
                <div className="grid grid-cols-2">
                  {course.seasons.map((season) => {
                    return (
                      <div key={season.id}>
                        <div className="bg-red-300 flex flex-col p-4">
                          <h1>{season.title}</h1>
                          <p>{season.description}</p>
                          <p>Catégorie : {course.category}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </>
    );
  };

  const ShowHardcoreCourses = () => {
    return (
      <>
        {courses.map((course) => {
          if (course.subscription === "Hardcore") {
            return (
              <div key={course.id}>
                <h1>{course.title}</h1>
                <div className="grid grid-cols-2">
                  {course.seasons.map((season) => {
                    return (
                      <div key={season.id}>
                        <div className="bg-red-300 flex flex-col p-4">
                          <h1>{season.title}</h1>
                          <p>{season.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </>
    );
  };

  const ShowExtremeCourses = () => {
    return (
      <>
        {courses.map((course) => {
          if (course.subscription === "Extreme") {
            return (
              <div key={course.id}>
                <h1>{course.title}</h1>
                <div className="grid grid-cols-2">
                  {course.seasons.map((season) => {
                    return (
                      <div key={season.id}>
                        <div className="bg-red-300 flex flex-col p-4">
                          <h1>{season.title}</h1>
                          <p>{season.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </>
    );
  };

  const ShowReservations = () => {
    return (
      <>
        {reservations.map((reservation) => {
          return (
            <div className="">
              <h1>{reservation.fullName}</h1>
              <h1>{reservation.day}</h1>
              <h1>{reservation.hour}</h1>
              <h1>{reservation.category}</h1>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <h1>
        Votre abonnement :
        <span className="bold underline"> {user.subscription}</span>
      </h1>
      {user.subscription === "Relax" ? ShowRelaxCourses() : null}
      {user.subscription === "Hardcore" ? (
        <>
          {ShowRelaxCourses()}
          {ShowHardcoreCourses()}
        </>
      ) : null}
      {user.subscription === "Extreme" ? (
        <>
          {ShowRelaxCourses()}
          {ShowHardcoreCourses()}
          {ShowExtremeCourses()}
        </>
      ) : null}
      <br />
      <h1>MES RESERVATIONS</h1>
      {ShowReservations()}
      <br />
    </>
  );
};

export default Courses;
