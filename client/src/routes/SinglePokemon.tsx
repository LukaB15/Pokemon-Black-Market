import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { fillState, getFlavorTextAsync, selectSinglePkmn } from '../features/singlePokemon/singlePkmnSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import "./Buy.css";
import { selectBuyList } from '../features/buyList/buyListSlice';
import {buyPokemon} from '../features/buyList/buyListSlice';


export default function SinglePokemon() {
    const singlePokemon = useAppSelector(selectSinglePkmn);
    const name:string | undefined = useParams().name;
    const price: string | undefined = useParams().price;
    const level: string | undefined = useParams().level;
    const dispatch = useAppDispatch();
    const buyList = useAppSelector(selectBuyList);
   
    const filteredBuyList :Array<buyPokemon> = buyList.filter(
      (buy: buyPokemon) => buy.level === +level! && buy.namePokemon === name && buy.price === +price!
    );

    useEffect(()=>{
      if(buyList.length > 0){
        dispatch(fillState(filteredBuyList[0]));
        dispatch(getFlavorTextAsync(""+filteredBuyList[0].idApi))
      }
    },[]);
  return (   
    
      <>

      <div className='bg-bck h-full flex flex-col '>

        <div className='bg-white h-96 w-6/12 sm:w-4/12 ml-28 mt-32 rounded-lg static'>
        <img className='w-4/12 h-6/12' src='../../../pokemon1.png' />
        <img src={singlePokemon.imgUrl} alt="pkmnimg" className='w-28 top-36 left-44 md:w-36 sm:top-96 lg:w-52 lg:top-96 xl:top-72 xl:w-72 2xl:w-96  max-w-xs 2xl:max-w-none absolute sm:left-36 2xl:left-28  z-10'  />
        <div className='bg-red-rocket bg-opacity-90 w-full sm:w-9/12  ml-0 sm:ml-28 mt-40 pt-10 pb-9 sm:pl-44 pl-10 rounded-lg absolute top-28 right-0 sm:right-16'>
        
          <h2 className='pokemon text-xs md:text-2xl text-white uppercase'>{singlePokemon.namePokemon}</h2>

          <div className='mt-4 flex flex-row'>
             <p className="mr-1 Pokemon text-xl">${singlePokemon.price}</p>
           </div>

          <h3 className='Pokemon mt-5 mb-2'>Type(s)</h3>
           <div className='mt-4 flex flex-row'>
            <p className="mr-1 Pokemon md:text-xl text-white uppercase text-xs">{singlePokemon.typeFirst}</p>
            <p className="mr-1 Pokemon md:text-xl text-white uppercase text-xs ml-5">{singlePokemon.typeSecond}</p>
           </div>

           <h3 className='Pokemon mt-5 mb-2'>Description</h3>
           <div className='mt-4 flex flex-row'>
            <p className="mr-1 Pokemon text-xs uppercase">{singlePokemon.flavorText}</p>
           </div>

           <button className='bg-white mt-5 rounded-lg px-8 pt-2 pb-2 border border-29
           9 border-transparent  hover:text-red-rocket  transition ease-in-out'>Add to Cart</button>
        </div>
        </div>

        <div className='bg-red-rocket  bg-opacity-90 w-9/12 mt-96 sm:md-72 mb-28 ml-auto mr-auto rounded-xl flex flex-col items-center'>
          <h2 className='text-white text-xs md:text-xl Pokemon mt-5'>Recommandations</h2>
          <div className='flex flex-col sm:flex-row items-center justify-center pt-5 pb-5'>
          <img className='w-6/12 sm:w-3/12 max-w-sm hover:border hover:border-white hover:rounded-xl p-2 border border-transparent transition ease-in-out' src="../../../charizard.png" alt="recommandations_poke" />
          <img className='w-6/12 sm:w-3/12 max-w-sm hover:border hover:border-white hover:rounded-xl p-2 border border-transparent transition ease-in-out' src="../../../charizard.png" alt="recommandations_poke" />
          <img className='w-6/12 sm:w-3/12 max-w-sm hover:border hover:border-white hover:rounded-xl p-2 border border-transparent transition ease-in-out' src="../../../charizard.png" alt="recommandations_poke"/>
         
        </div>
        </div>
      </div>
     
      </>
    

  )
}
