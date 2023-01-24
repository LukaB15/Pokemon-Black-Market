import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Params, useParams } from 'react-router-dom';


export default function SinglePokemon() {
    const [pokemon, setPokemon] = useState(null);
    const id:string | undefined = useParams().id;
    useEffect(()=>{
    const fetchPokemon = async (id:string | undefined) => {
        const response = await axios ({
            method:"get",
            url:`https://pokeapi.co/api/v2/pokemon/${id}`
        })
        return(response.data);
    }
    fetchPokemon(id);
    console.log(pokemon);
    
    })
  return (
    <div>SinglePokemon</div>
  )
}
