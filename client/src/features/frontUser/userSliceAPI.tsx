import axios from "axios";

export async function sendMoneyToDB(id:string, credits:number) {
  const request = axios.put(`http://localhost:3001/api/user/credits/${id}`, {credits:credits}, {
    withCredentials: true,
  });
  return request.then((response) => response.data);
}

export async function getMoneyFromDB(id:string){
  const response = await axios.get(`http://localhost:3001/api/user/credits/${id}`, {
    withCredentials: true,
  });
  console.log(response.data);
  return response.data;
}