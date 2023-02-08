import axios from "axios";

export async function sendMoneyToDB(id: string, credits: number) {
  const request = axios.put(
    `https://black-market-pokemon-server.onrender.com/api/user/credits/${id}`,
    { credits: credits },
    {
      withCredentials: true,
    }
  );
  return request.then((response) => response.data);
}

export async function getMoneyFromDB(id: string) {
  const response = await axios.get(
    `https://black-market-pokemon-server.onrender.com/api/user/credits/${id}`,
    {
      withCredentials: true,
    }
  );
  console.log(response.data);
  return response.data;
}
