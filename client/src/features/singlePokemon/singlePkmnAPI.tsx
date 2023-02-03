import axios from "axios";

export async function fetchSinglePkmn(id:string | undefined){
    if(!id){return 0};
    const response = await axios({
        method:"get",
        url:`https://pokeapi.co/api/v2/pokemon/${id}`
    });    
    return response.data;
}

export async function fetchFlavorTextAsync(id:string){
    console.log("before axios")
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    console.log(response);
    if(response.status===200){
        console.log("inside if 200");
        return response.data;
    }else{
        console.log("inside if not 200");
        return "No description found";
    }
}
