import React, { useContext } from "react";
import { UserContext } from "../../../../components/context/userProvider";
import bcrypt from "bcryptjs-react";
import UpdateEmail from "./functions/updateEmail";
import UpdatePassword from "./functions/updatePassword";


const Settings = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div className="flex flex-col">
        <div>
          <label>Modifier mon email :</label>
          <input
            type="text"
            onChange={(event) => {
              setUser({ ...user, email: event.target.value });
            }}
          />
          <button
            type="button"
            className="mx-4 p-1 bg-green-500"
            onClick={() => UpdateEmail(user.email)}
          >
            Modifier email
          </button>
        </div>
        <div>
          <label>Modifier mon mot de passe :</label>
          <input
            type="text"
            onChange={(event) => {
              setUser({
                ...user,
                password: bcrypt.hashSync(event.target.value, 10),
              });
            }}
          />
          <button
            type="button"
            className="mx-4 p-1 bg-green-500 "
            onClick={() => UpdatePassword(user.password)}
          >
            Modifier mot de passe
          </button>
        </div>
        
      </div>
    </>
  );
};

export default Settings;
