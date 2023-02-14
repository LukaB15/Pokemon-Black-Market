import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { buyPokemon, selectBuyList } from '../features/buyList/buyListSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fillState, getFlavorTextAsync } from '../features/singlePokemon/singlePkmnSlice';

export default function RecommandationsItem(props:buyPokemon) {
      const navigate = useNavigate();
      const buyList = useAppSelector(selectBuyList);
      const dispatch = useAppDispatch();

      const navToPokemon = () => {
            const buyItem:buyPokemon = buyList.list.find((item:any) => {
                  return  item.namePokemon === props.namePokemon &&
                          item.level === props.level &&
                          item.price === props.price
                })!
            dispatch(fillState(buyItem));
            dispatch(getFlavorTextAsync(""+buyItem.idApi))
            navigate(`/SinglePokemon/${ props.namePokemon}/${ props.level}/${ props.price}`);
            navigate(0);
        }
      
  return (
    <div onClick={navToPokemon} className="flex flex-col items-center">
     <img className='w-6/12 m-0 sm:w-6/12 max-w-sm hover:border hover:border-white hover:rounded-xl border border-transparent transition ease-in-out' src={props.imgUrl} />     
    
     </div>
  )
}


