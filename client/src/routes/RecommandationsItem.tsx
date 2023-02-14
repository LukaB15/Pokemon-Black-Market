import React, { useState } from 'react'
import { pkmn } from './RecommandationsList'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { buyPokemon, selectBuyList } from '../features/buyList/buyListSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fillState } from '../features/singlePokemon/singlePkmnSlice';

export default function RecommandationsItem(props:pkmn) {
      const [isClick, setIsClick] = useState(false);
      const navigate = useNavigate();
      const buyList = useAppSelector(selectBuyList);
      const dispatch = useAppDispatch();

      const navToPokemon = () => {
            const buyItem:buyPokemon = buyList.find((item:any) => {
                  return  item.namePokemon === props.namePokemon &&
                          item.level === props.level &&
                          item.price === props.price
                })!
            dispatch(fillState(buyItem));
            setIsClick(true);
        }
        if(isClick){
            <Navigate to={`/SinglePokemon/${ props.namePokemon}/${ props.level}/${ props.price}`} replace={true} />
        }
  return (
    <div onClick={navToPokemon} className="flex flex-col items-center">
     <img className='w-6/12 m-0 sm:w-6/12 max-w-sm hover:border hover:border-white hover:rounded-xl border border-transparent transition ease-in-out' src={props.imgUrl} />     
    
     </div>
  )
}


