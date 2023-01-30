import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import PokeList from '../components/PokeList';
import { selectSellPkmn, sellPkmnSliceAsync, SellPkmnState, storeLvl, storePrice, storeQty } from '../features/sellPokemon/sellPkmnSlice'

export default function Sell() {

  const [searchTerm, setSearchTerm] = useState("");

  const sellPkmn:SellPkmnState = useAppSelector(selectSellPkmn);
  const dispatch = useAppDispatch();

  const sellStorePrice = (e:any) =>{
    const sellValue:number = +e.target.value;
    dispatch(storePrice(sellValue));
  }
  const sellStoreLvl = (e:any)=>{
    const lvlValue:number = +e.target.value;
    dispatch(storeLvl(lvlValue))
  }
  const sellStoreQty = (e:any)=>{
    const qtyValue:number = +e.target.value;
    dispatch(storeQty(qtyValue))
  }
  const sendStateToServer = ()=>{
    dispatch(sellPkmnSliceAsync(sellPkmn));
    window.location.reload();
  }


  return (
    <>
    {/* <div className='w-full h-max  pt-48 md:pb-96 bg-bck'>
    <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center ml-auto mr-auto w-fit '>
      <article className="rounded-xl bg-white p-3 shadow-lg article w-6/12 lg:mr-12 mb-16 lg:mb-0">
     
        <div className="relative flex flex-col items-center overflow-hidden rounded-xl">
          <img src={sellPkmn.imgUrl ? sellPkmn.imgUrl: "pokeball.png" } className="w-64" alt="Pokemon_Product" />
          <p className='text-darkest mt-4 mb-4 Pokemon'>
            {sellPkmn.name}
          </p>
          <form className='flex flex-row justify-around'>
            <input className='w-3/12' type="text" name="Price" placeholder='Price' onChange={sellStorePrice} />
            <input className='w-3/12' type="text" name="Level" placeholder='Level' onChange={sellStoreLvl} />
            <input className='w-3/12' type="text" name="Quantity" placeholder='Qty' onChange={sellStoreQty} />
          </form>

          <div className="flex items-center space-x-1.5 rounded-lg bg-red-rocket px-4 py-1.5 text-white duration-100 hover:bg-white hover:text-red-rocket hover:border border mt-6 ">
              <button className="text-lg w-24" onClick={sendStateToServer}>Sell</button>
          </div>
        </div>

    </article>
      <div className="rounded-xl bg-white p-3 shadow-lg article w-96 h-80  flex flex-col items-center mb-16 lg:mb-0">
      <div className='searchbardiv'>
            <input className='searchbar' type="text" placeholder='Search a Pokemon' onChange={event=>{setSearchTerm(event.target.value)}}/>
        </div>
            <PokeList searchTerm={searchTerm}/>
      </div>
    </div>
    </div> */}

    <div className='bg-bck flex flex-col h-screen '>

        <div className='bg-white h-96 w-6/12 sm:w-4/12 ml-28 mt-32 rounded-lg static'>
        <img className='w-4/12 h-6/12' src='../pokemon1.png' />
        <img src={sellPkmn.imgUrl ? sellPkmn.imgUrl: "pokeball.png" } alt="pkmnimg" className='w-28 top-36 left-44 md:w-36 sm:top-96 lg:w-52 lg:top-96 xl:top-72 xl:w-72 2xl:w-96  max-w-xs 2xl:max-w-none absolute sm:left-36 2xl:left-28 z-10'  />
        <div className='bg-red-rocket bg-opacity-90 w-full sm:w-9/12  ml-0 sm:ml-28 mt-40 pt-10 pb-5 sm:pl-44 pl-10 rounded-lg absolute top-28 right-0 sm:right-16'>
        
          <h2 className='pokemon text-xs md:text-2xl text-white uppercase'>{sellPkmn.name ? sellPkmn.name: "Name of the pokemon" }</h2>
          <div className='flex flex-col-reverse xl:flex-row'>

            <div className='flex flex-col w-6/12 md:w-11/12 sm:w-10/12'>
              <h3 className='Pokemon mt-5 mb-2'>Enter informations here</h3>
              <form className='flex flex-col'>
                <input className='w-6/12 mt-2 mb-2' type="text" name="Price" placeholder='Price' onChange={sellStorePrice} />
                <input className='w-6/12 mt-2 mb-2' type="text" name="Level" placeholder='Level' onChange={sellStoreLvl} />
                <input className='w-6/12 mt-2 mb-2' type="text" name="Quantity" placeholder='Qty' onChange={sellStoreQty} />
              </form>
            </div>

          <div className="rounded-xl bg-white p-3 shadow-lg article w-9/12 md:w-9/12 lg:w-6/12 lg:mr-12 h-80  flex flex-col items-center mb-16 lg:mb-0 xl:mt-0 mt-5 ">
            <div className='searchbardiv'>
                <input  className='w-6/12 md:w-full mt-2 mb-2' type="text" placeholder='Search a Pokemon' onChange={event=>{setSearchTerm(event.target.value)}}/>
            </div>
                <PokeList searchTerm={searchTerm}/>
          </div>

          </div>
          <div className="flex items-center space-x-1.5 rounded-lg bg-white w-2/12 px-4 py-1.5 text-black duration-100  hover:text-red-rocket hover:border border mt-6 ">
              <button className="text-lg ml-auto mr-auto" onClick={sendStateToServer}>Sell</button>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
