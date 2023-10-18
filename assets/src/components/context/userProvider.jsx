import { number } from "prop-types";
import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: window.user.id,
    email: window.user.email,
    password: window.user.password,
    firstName: window.user.firstName,
    lastName: window.user.lastName,
    old: window.user.old,
    zip: window.user.zip,
    address: window.user.address,
    number: window.user.number,
    subscription: window.user.subscription,
    photo: window.user.photo,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
