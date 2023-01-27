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
    <div className='w-screen h-max  pt-28 pb-36 bg-bck'>
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
    </div>
    </>
  )
}
