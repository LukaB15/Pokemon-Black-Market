import axios from "axios";

export async function sendMoneyToDB(id:string, credits:number) {
  const request = axios.put(`http://localhost:3001/api/user/credits/${id}`, {credits:credits}, {
    withCredentials: true,
  });
  return request.then((response) => response.data);
}