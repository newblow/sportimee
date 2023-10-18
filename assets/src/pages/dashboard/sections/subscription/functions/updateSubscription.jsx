import axios from "axios";

const UpdateSubscription = (subscription) => {

  const data = {
    user: subscription,
  };

  axios
    .put("http://localhost:8000/api/users/8", data)
    .then(() => alert("Abonnement modifié"));
};

export default UpdateSubscription;
