import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../app/hooks';
import CartItem from '../components/CartItem';
import Total from '../components/Total';
import { cartPokemon, listCart, selectCart } from '../features/Cart/cartSlice';


export default function Checkout() {
  const cartPkmn:listCart= useAppSelector(selectCart);
  console.log(cartPkmn)
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
    <div className="h-screen bg-gray-100 pt-20 pb-96">
      <h1 className="mb-10 text-center text-2xl font-bold text-red-rocket">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <div className="justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start overflow-y-scroll h-96 flex flex-col border-b border-2 border-red-rocket">
            {cartPkmn?.list.map((item:cartPokemon) => (
            <CartItem
              key={item.idApi}
              {...item}    
                    />
          ))}
          </div>
    
          </div>
          <Total/>
    </div>
  </div>




    </>
  )
}
