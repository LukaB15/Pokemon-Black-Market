import axios from "axios";

export async function getBuyListAsync() {
  const response = await axios.get(
    `https://black-market-pokemon-server.onrender.com/api/product/`
  );
  return response.data;
}
