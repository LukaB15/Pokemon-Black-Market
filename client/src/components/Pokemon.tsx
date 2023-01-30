import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import './Pokemon.css'
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getFromListAsync, selectSellPkmn } from '../features/sellPokemon/sellPkmnSlice';


export default function Pokemon(props:any) {
const randomlvl = Math.floor(Math.random() * 101);
console.log(props.searchTerm.searchTerm);

const sellPokemon = useAppSelector(selectSellPkmn);
const dispatch = useAppDispatch();

  return (
      <div className='container  overflow-y-scroll h-72'>
                  {props.pokemon.filter((val:any)=> {
                        if(props.searchTerm.searchTerm === ""){
                        return val
                        }
                        else if(val.name.toLowerCase().includes(props.searchTerm.searchTerm.toLowerCase())){
                              return val
                        }
                  }
                  ).map((p:any) => (
                        <div  key={uuidv4()} onClick={()=> dispatch(getFromListAsync(p.name))}  className="cursor-pointer hover:text-red-rocket">   
                        <div className="pokemon" >
                              <div className='info_poke mt-2'>
                                    <h3 className='Name mb-2'>{p.name}</h3>
                              </div>
                        </div>
                        </div> 
                        
                  ))}
      </div>
  )
}