import axios from "axios";
import { SellPkmnState } from "./sellPkmnSlice";

export async function sendToSellAsync(pkmnToSell:SellPkmnState){    
    console.log(pkmnToSell);
    
    const request = axios.post(`http://localhost:3001/api/product/`, pkmnToSell);
    return request.then(response => response.data);
}