import axios from "axios";
import { SellPkmnState } from "./sellPkmnSlice";

export async function sendToSellAsync(pkmnToSell: SellPkmnState) {
  const request = axios.post(
    `https://black-market-pokemon-server.onrender.com/api/product/`,
    pkmnToSell,
    {
      withCredentials: true,
    }
  );
  return request.then((response) => response.data);
}

export async function getFromApiAsync(name: string) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data;
}
