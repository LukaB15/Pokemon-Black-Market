import axios from "axios";

export async function fetchSinglePkmn(id:string | undefined){
    if(!id){return 0};
    const response = await axios({
        method:"get",
        url:`https://pokeapi.co/api/v2/pokemon/${id}`
    });    
    return response.data;
}