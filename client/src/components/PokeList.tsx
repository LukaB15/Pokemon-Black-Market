import React, {useState, useEffect} from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import LoadingSell from "./LoadingSell";

export default function PokeList(searchTerm:any) {



      const [loading, setLoading] = useState(true)
      const [pokemon, setPokemon] = useState([])

          useEffect(() => {
            setLoading(true)
            const fetchData2 = async () => {
            const result = await axios(
               'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1278',
                  );
            const pokemon = result.data.results;
            setLoading(false)
            setPokemon(pokemon);
            
              };
            fetchData2();
          }, []);
          
          
        
          if (loading) return <LoadingSell />
          
  return (
      <>
      <Pokemon pokemon={pokemon} searchTerm={searchTerm}  />
    </>
  )
}