import axios from "axios";

export const apiCallTest = async() =>{
    console.log("avant axios");
    
    
    const response = await axios.get('http://localhost:3001/api')
        .then(function (response) {
            // handle success
            console.log(response);
          })
    
    return response;
}