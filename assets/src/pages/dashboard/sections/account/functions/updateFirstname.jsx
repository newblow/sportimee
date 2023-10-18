import axios from "axios";

const UpdateFirstname = (firstName) => {
    const data = {
        firstName: firstName
    }
    
    axios
    .put("http://localhost:8000/api/users/8", data)
    .then(() => alert("sauvegardé"));

};

export default UpdateFirstname;