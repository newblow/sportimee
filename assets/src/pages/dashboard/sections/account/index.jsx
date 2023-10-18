import React, { useContext } from "react";
import { UserContext } from "../../../../components/context/userProvider";
import axios from "axios";

const Account = () => {
  const { user, setUser } = useContext(UserContext);

  const UpdateUser = () => {
    const data = {
      photo: user.photo,
      old: user.old,
      zip: user.zip,
      address: user.address,
      number: user.number,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    axios.put(`http://localhost:8000/api/users/${user.id}`, data);
  };

  return (
    <>
      {console.log(user.id)}
      <h1>Coordonées :</h1>
      {user.firstName}
      <div className="grid grid-col">
        <label>Modifier image :</label>
        <input
          type="text"
          onChange={(event) => {
            setUser({ ...user, photo: event.target.value });
          }}
        />
        <label>Modifier nom :</label>
        <input
          type="text"
          onChange={(event) => {
            setUser({ ...user, lastName: event.target.value });
          }}
        />
        <label>Modifier prénom :</label>
        <input
          type="text"
          onChange={(event) => {
            setUser({ ...user, firstName: event.target.value });
          }}
        />
        <label>Modifier age :</label>
        <input
          type="text"
          onChange={(event) => {
            setUser({ ...user, old: parseInt(event.target.value) });
          }}
        />
        <label>Modifier code postal :</label>
        <input
          type="text"
          onChange={(event) => {
            setUser({ ...user, zip: parseInt(event.target.value) });
          }}
        />
        <label>Modifier addresse :</label>
        <input
          type="text"
          onChange={(event) => {
            setUser({ ...user, address: event.target.value });
          }}
        />
        <label>Modifier numéro:</label>
        <input
          type="text"
          onChange={(event) => {
            setUser({ ...user, number: parseInt(event.target.value) });
          }}
        />
        <button
          type="button"
          className="mx-4 p-1 bg-green-500"
          onClick={() => UpdateUser()}
        >
          Sauvegarder
        </button>
      </div>
    </>
  );
};

export default Account;
