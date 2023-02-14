import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import { cartPokemon } from '../features/Cart/cartSlice'
import RecommandationsItem from './RecommandationsItem';
import { v4 as uuidv4 } from 'uuid';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { buyPokemon, selectBuyList } from '../features/buyList/buyListSlice';
import { useAppSelector } from '../app/hooks';
import { fillState } from '../features/singlePokemon/singlePkmnSlice';

export interface pkmn{
      'COUNT(*)': number,
      level: number,
      namePokemon: string,
      price: number,
      idApi: number,
      imgUrl: string,
      typeFirst: string,
      typeSecond: string,
      flavorText: string,
  }
  
  export type pkmnArray = Array<pkmn>;

export default function RecommandationsList(props:buyPokemon) {
      const initialOrders:pkmnArray = [];
      const [reco, setReco] = useState(initialOrders);

      const getRecommandations = async() =>{
            const response = await axios.get(`http://localhost:3001/api/product/findSimilar/${props.typeFirst}`, {
                withCredentials: true,
            })
            .then(function(response){
                  setReco(response.data);
              })
            .catch(function(error){
                console.log(error);
            })
        }
        console.log(reco);
        
        
    useEffect( ()=>{
      getRecommandations();
  },[])

  return (
    <>
      {reco.length === 0 ? <Loading /> : reco.map((recom)=> 
          <RecommandationsItem key={uuidv4()} {...recom} />
)}
    </>
  )
}


