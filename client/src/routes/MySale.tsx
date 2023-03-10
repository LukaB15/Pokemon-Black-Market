import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { selectSinglePkmn, singlePokeballGoAsync } from '../features/singlePokemon/singlePkmnSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import "./Buy.css";
import { selectBuyList } from '../features/buyList/buyListSlice';
import {buyPokemon} from '../features/buyList/buyListSlice';
import BuyPokemon from '../components/BuyPokemon';


export default function Mysale() {
//     const singlePkmn:buyPokemon = {
//       "COUNT(*)": 0,
//       level:0,
//       namePokemon:"",
//       price:0,
//       idApi:0,
//       imgUrl:"",
//       typeFirst:"",
//       typeSecond:"",
//       flavorText:"",
      
//   } ;
//     const name:string | undefined = useParams().name;
//     const price: string | undefined = useParams().price;
//     const level: string | undefined = useParams().level;

//     const buyList = useAppSelector(selectBuyList);
   
//     const filteredBuyList :any = buyList.filter(
//       (buy: any) => buy.level === +level! && buy.namePokemon === name && buy.price === +price!
  
      
//     );
    
//     // console.log(filteredBuyList[0].namePokemon);
  
//     const dispatch = useAppDispatch();
//     useEffect(()=>{
//       dispatch(singlePokeballGoAsync(name));
//     },[]);
  return (   
    
      <>

      <div className='bg-bck h-screen flex flex-col '>

        <div className='bg-white h-96 w-6/12 sm:w-4/12 ml-28 mt-32 rounded-lg static'>
        <img className='w-4/12 h-6/12' src='../../../pokemon1.png' />
        <img src="charizard.png"alt="pkmnimg" className='w-28 top-36 left-44 md:w-36 sm:top-96 lg:w-52 lg:top-96 xl:top-72 xl:w-72 2xl:w-96  max-w-xs 2xl:max-w-none absolute sm:left-36 2xl:left-28  z-10'  />
        <div className='bg-red-rocket bg-opacity-90 w-full sm:w-9/12  ml-0 sm:ml-28 mt-40 pt-10 pb-9 sm:pl-44 pl-10 rounded-lg absolute top-28 right-0 sm:right-16'>
        
          <h2 className='pokemon text-xs md:text-2xl text-white uppercase'>name</h2>

          <div className='mt-4 flex flex-row'>
             <img className="w-8 h-8" src="../../../pokedollar.png" alt="pokedollar"/>
             <input className="mr-1 Pokemon text-xl pl-5 pb-2 ml-5 w-2/12" value="680"/>
           </div>

          <h3 className='Pokemon mt-5 mb-2'>Type(s)</h3>
           <div className='mt-4 flex flex-row'>
            <p className="mr-1 Pokemon md:text-xl text-white uppercase text-xs">FEU</p>
            <p className="mr-1 Pokemon md:text-xl text-white uppercase text-xs ml-5">VOL</p>
           </div>

           <h3 className='Pokemon mt-5 mb-2'>Level</h3>
           <div className='mt-4 flex flex-row'>
           <input className="mr-1 Pokemon text-xl pl-5 pb-2 w-2/12" value="52"/>
           </div>

           <button className='bg-white mt-5 rounded-lg px-8 pt-2 pb-2 border border-29
           9 border-transparent  hover:text-red-rocket  transition ease-in-out'>Save modifications</button>
        </div>
        </div>
      </div>
     
      </>
    

  )
}
