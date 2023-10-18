import axios from "axios";

const UpdateAddress = ( address) => {
    const data = {
        address: address
    }
    
    axios
    .put("http://localhost:8000/api/users/8", data)
    .then(() => alert("sauvegardé"));

};

export default UpdateAddress;