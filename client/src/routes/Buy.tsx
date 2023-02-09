import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import BuyPokemon from '../components/BuyPokemon';
import {  buyPokemon, emptyArray, getBuyListFromServerAsync, selectBuyList } from '../features/buyList/buyListSlice';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import "./Buy.css";
import { cartPokemon, listCart, selectCart } from '../features/Cart/cartSlice';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { type } from 'os';


export default function Buy() {
  const [typerecherche, setTypeRecherche] = useState("");
  const buyList:Array<buyPokemon> = useAppSelector(selectBuyList);
  let cartPkmn:listCart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const shouldLoad = useRef(true);
  const getTotalQuantity = () => {
    let total = 0
    cartPkmn.list.forEach((item:any) => {
      total += item.qty
    })
    return total
 
}

const switchType = (type:string) => (event:any) =>
{
  setTypeRecherche(type);
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
            <img className='w-8 h-8' src='pokeball.png' />
            <span onClick={ switchType('') }>All</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600 hover:text-red-rocket">
            <img className='w-8 h-8' src='fire.svg' />
            <span onClick={ switchType('fire') }>Fire</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900 hover:text-red-rocket">
            <img className='w-8 h-8' src='water.svg' />
            <span onClick={switchType('water')}>Water</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='grass.svg' />
            <span onClick={switchType('grass')} >Grass</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='flying.svg' />
            <span onClick={switchType('flying')} >Flying</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='normal.svg' />
            <span onClick={switchType('normal')} >Normal</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='electric.svg' />
            <span onClick={switchType('electric')} >Electric</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='ice.svg' />
            <span onClick={switchType('ice')} >Ice</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='fighting.svg' />
            <span onClick={switchType('fighting')} >Fighting</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='poison.svg' />
            <span onClick={switchType('poison')} >Poison</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='ground.svg' />
            <span onClick={switchType('ground')} >Ground</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='psychic.svg' />
            <span onClick={switchType('psychic')} >Psychic</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='bug.svg' />
            <span onClick={switchType('bug')} >Bug</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='rock.svg' />
            <span onClick={switchType('rock')} >Rock</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='ghost.svg' />
            <span onClick={switchType('ghost')} >Ghost</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='dark.svg' />
            <span onClick={switchType('dark')} >Dark</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='dragon.svg' />
            <span onClick={switchType('dragon')} >Dragon</span>
          </a>
          <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='steel.svg' />
            <span onClick={switchType('steel')} >Steel</span>
          </a>
          <button data-active className=" flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
          <img className='w-8 h-8' src='fairy.svg' />
            <span onClick={switchType('fairy')} >Fairy</span>
          </button>
        </div>
        <section className="py-10 bg-bck h-full  pt-32">
          <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {buyList.length === 0 ? <Loading/> : buyList.map((pkmn)=> pkmn.typeFirst === typerecherche || pkmn.typeSecond ===typerecherche || typerecherche === "" ? 
              <BuyPokemon key={uuidv4()} {...pkmn} type={typerecherche} />
            : "")}
          </div>
        </section>
        <Link to={{pathname: `/Checkout`}}>
        <div className='shopping-cart w-20 sm:w-32'>
          <img id='cartIcon' src="pokeball.png"/>
          <p>{getTotalQuantity() || 0}</p>
        </div>
        </Link>
      </div>
    </>
  )
}
