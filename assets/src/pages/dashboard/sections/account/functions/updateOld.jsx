import axios from "axios";

const UpdateOld = (old) => {
    const data = {
        old: old
    }
    
    axios
    .put("http://localhost:8000/api/users/8", data)
    .then(() => alert("sauvegardé"));

};

export default UpdateOld;