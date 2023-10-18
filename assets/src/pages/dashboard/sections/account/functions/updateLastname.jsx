import axios from "axios";

const UpdateLastname = (lastName) => {
    const data = {
        lastName: lastName
    }
    
    axios
    .put("http://localhost:8000/api/users/8", data)
    .then(() => alert("sauvegardé"));

};

export default UpdateLastname;