import React, { useContext } from "react";
import { UserContext } from "../../../../components/context/userProvider";
import UpdateSubscription from "../subscription/functions/updateSubscription";

const Subscription = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>Abonnement:</h1>$
      <div>
      {user.subscription} 
      </div>
        
      
    </>
  );
};

export default Subscription;
