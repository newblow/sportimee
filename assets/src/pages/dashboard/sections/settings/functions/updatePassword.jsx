import axios from "axios";

const UpdatePassword = (password) => {
  const data = {
    password: password,
  };

  axios
    .put("http://localhost:8000/api/users/8", data)
    .then(() => alert("Mot de passe modifié"));
};

export default UpdatePassword;
