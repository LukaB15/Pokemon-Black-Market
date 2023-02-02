import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import BuyPokemon from '../components/BuyPokemon';
import {  buyPokemon, emptyArray, getBuyListFromServerAsync, selectBuyList } from '../features/buyList/buyListSlice';
import { v4 as uuidv4 } from 'uuid';
import "./Buy.css";


export default function Buy() {
  const buyList:Array<buyPokemon> = useAppSelector(selectBuyList);
  const dispatch = useAppDispatch();
  const shouldLoad = useRef(true);
  useEffect(()=>{
    if(shouldLoad.current){
      dispatch(emptyArray());
      dispatch(getBuyListFromServerAsync());
      shouldLoad.current = false;
    }
  },[])
  return (
    <>
      <div className="bg-white">
        <div className="pt-32  bg-white">
          <h1 className="text-center text-2xl font-bold text-gray-800">All Products</h1>
        </div>
        <div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800 ">
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600 hover:text-red-rocket">
            <img className='w-8 h-8' src='fire.png' />
            <span>Fire</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900 hover:text-red-rocket">
            <img className='w-8 h-8' src='water.png' />
            <span>Water</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='grass.png' />
            <span>Grass</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='fly.png' />
            <span>Fly</span>
          </a>
        </div>
        <section className="py-10 bg-bck h-screen overflow-y-scroll">
          <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {buyList.length === 0 ? "loading" : buyList.map((pkmn)=>
              <BuyPokemon key={uuidv4()} {...pkmn} />
            )}
          </div>
        </section>
        <div className='shopping-cart w-1/12' onClick={() => window.location.replace("/Checkout")}>
          <img id='cartIcon' src="pokeball.png"/>
          <p>5</p>
        </div>
      </div>
    </>
  )
}
