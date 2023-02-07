import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import BuyPokemon from '../components/BuyPokemon';
import {  buyPokemon, emptyArray, getBuyListFromServerAsync, selectBuyList } from '../features/buyList/buyListSlice';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import "./Buy.css";
import { cartPokemon, selectCart } from '../features/Cart/cartSlice';
import { Link } from 'react-router-dom';


export default function Buy() {

  const buyList:Array<buyPokemon> = useAppSelector(selectBuyList);
  const cartPkmn:Array<cartPokemon> = useAppSelector(selectCart)
  const dispatch = useAppDispatch();
  // console.log(cartPkmn)
  const shouldLoad = useRef(true);

  const getTotalQuantity = () => {
    let total = 0
    cartPkmn.forEach((item:any) => {
      total += item.qty
    })
    return total
 
}

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
        <section className="py-10 bg-bck h-full  pt-32">
          <div className="mx-auto grid max-w-7xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {buyList.length === 0 ? "loading" : buyList.map((pkmn)=>
              <BuyPokemon key={uuidv4()} {...pkmn} />
            )}
          </div>
        </section>
        <Link to={{pathname: `/Checkout`}}>
        <div className='shopping-cart w-1/12'>
          <img id='cartIcon' src="pokeball.png"/>
          <p>{getTotalQuantity() || 0}</p>
        </div>
        </Link>
      </div>
    </>
  )
}
