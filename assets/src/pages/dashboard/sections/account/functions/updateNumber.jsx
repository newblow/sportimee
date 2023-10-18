import axios from "axios";

const UpdateNumber = (number) => {
    const data = {
        number: number
    }
    
    axios
    .put("http://localhost:8000/api/users/8", data)
    .then(() => alert("sauvegardé"));

};

export default UpdateNumber;