import axios from "axios";

const UpdateEmail = (email) => {

  const data = {
    email: email,
  };

  axios
    .put("http://localhost:8000/api/users/8", data)
    .then(() => alert("Adresse Email modifié"));
};

export default UpdateEmail;
