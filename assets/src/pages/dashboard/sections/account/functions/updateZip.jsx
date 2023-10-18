import axios from "axios";

const Updatezip = (zip) => {
    const data = {
        zip: zip
    }
    
    axios
    .put("http://localhost:8000/api/users/8", data)
    .then(() => alert("sauvegardé"));

};

export default Updatezip;