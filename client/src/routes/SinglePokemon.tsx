import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fillState, getFlavorTextAsync, selectSinglePkmn } from '../features/singlePokemon/singlePkmnSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import "./Buy.css";
import { selectBuyList } from '../features/buyList/buyListSlice';
import {buyPokemon} from '../features/buyList/buyListSlice';
import { addToCart, cartPokemon, listCart, selectCart } from '../features/Cart/cartSlice';
import RecommandationsList from './RecommandationsList';


export default function SinglePokemon() {
    const singlePokemon = useAppSelector(selectSinglePkmn);
    let cartPkmn:listCart = useAppSelector(selectCart);
    const name:string | undefined = useParams().name;
    const price: string | undefined = useParams().price;
    const level: string | undefined = useParams().level;
    const dispatch = useAppDispatch();
    const buyList = useAppSelector(selectBuyList);
    const [enoughStock, setEnoughStock] = useState(true);
   
    const filteredBuyList :Array<buyPokemon> = buyList.list.filter(
      (buy: buyPokemon) => buy.level === +level! && buy.namePokemon === name && buy.price === +price!
    );

    const itemPokemon: cartPokemon = {
      idApi: singlePokemon.idApi,
      name: singlePokemon.namePokemon,
      imgUrl: singlePokemon.imgUrl,
      typeFirst: singlePokemon.typeFirst,
      typeSecond: singlePokemon.typeSecond,
      flavorText: singlePokemon.flavorText,
      price: singlePokemon.price,
      lvl: singlePokemon.level,
      qty: 1
    }
    const getTotalQuantity = () => {
      let total = 0
      cartPkmn.list.forEach((item:any) => {
        total += item.qty
      })
      return total
   
  }
  
    const SendToCart = () => {
      const buyQty = buyList.list.find(item =>{
        return  item.namePokemon === singlePokemon.namePokemon &&
                item.level === singlePokemon.level &&
                item.price === singlePokemon.price
      })
      const cartQty = cartPkmn.list.find(item => {
        return  item.name === singlePokemon.namePokemon &&
                item.lvl === singlePokemon.level &&
                item.price === singlePokemon.price
      })
      if(cartQty === undefined || buyQty!['COUNT(*)'] > cartQty.qty!){
        dispatch(addToCart(itemPokemon));
      }else{
        setEnoughStock(false);
      }
      
    };
    
    useEffect(()=>{
      window.scrollTo(0, 0);
      if(buyList.list.length > 0){
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
           <div className='mt-4 flex flex-row items-center'>
            <p className="mr-1 Pokemon md:text-xl text-white uppercase text-xs">{singlePokemon.typeFirst}</p>
            <img src={`../../../${singlePokemon.typeFirst}.svg`} className="w-10 h-10 p-1 bg-white rounded-full " />

            {singlePokemon.typeSecond ? 
            <>
            <p className="mr-1 Pokemon md:text-xl text-white uppercase text-xs ml-5">{singlePokemon.typeSecond}</p>
            <img src={`../../../${singlePokemon.typeSecond}.svg`} className="w-10 h-10 p-1 bg-white rounded-full " />
            </>
            : "" }

            </div>

           <h3 className='Pokemon mt-5 mb-2'>Description</h3>
           <div className='mt-4 flex flex-row'>
            <p className="mr-1 Pokemon text-xs uppercase">{singlePokemon.flavorText}</p>
           </div>

           <button className='bg-white mt-5 rounded-lg px-8 pt-2 pb-2 border border-29
           9 border-transparent  hover:text-red-rocket  transition ease-in-out '  onClick={SendToCart}>Add to Cart</button>
           <span className={enoughStock? "invisible" : "text-lightest"}>*Stock limit reached*</span>
        </div>
        </div>

        <div className='bg-red-rocket  bg-opacity-90 w-9/12 mt-96 sm:md-72 mb-28 ml-auto mr-auto rounded-xl flex flex-col items-center'>
          <h2 className='text-white text-xs md:text-xl Pokemon mt-5'>Recommandations</h2>
          <div className='flex flex-col sm:flex-row items-center justify-center pt-5 pb-5'>
          {/* <img className='w-6/12 sm:w-3/12 max-w-sm hover:border hover:border-white hover:rounded-xl p-2 border border-transparent transition ease-in-out' src="../../../charizard.png" alt="recommandations_poke" />
          <img className='w-6/12 sm:w-3/12 max-w-sm hover:border hover:border-white hover:rounded-xl p-2 border border-transparent transition ease-in-out' src="../../../charizard.png" alt="recommandations_poke" />
          <img className='w-6/12 sm:w-3/12 max-w-sm hover:border hover:border-white hover:rounded-xl p-2 border border-transparent transition ease-in-out' src="../../../charizard.png" alt="recommandations_poke"/>
          */}
          <RecommandationsList />
        </div>
        </div>
        <Link to={{pathname: `/Checkout`}}>
        <div className='shopping-cart w-20 sm:w-32'>
          <img id='cartIcon' src="../../../pokeball.png"/>
          <p>{getTotalQuantity() || 0}</p>
        </div>
        </Link>
      </div>
     
      </>
    

  )
}
