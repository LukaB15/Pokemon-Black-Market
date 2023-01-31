import axios from "axios";


export async function getBuyListAsync(){    
   
    const response = await axios.get(`http://localhost:3001/api/product/`);
    return response.data;
}