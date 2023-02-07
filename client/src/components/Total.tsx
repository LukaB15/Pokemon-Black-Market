import {useSelector} from 'react-redux'
import { useAppSelector } from '../app/hooks';
import { cartPokemon, selectCart } from '../features/Cart/cartSlice';

function Total(){
const cartPkmn:Array<cartPokemon> = useAppSelector(selectCart);

const getTotal = () => {
  let totalQuantity = 0
  let totalPrice = 0
  cartPkmn.forEach((item:any) => {
    totalQuantity += item.qty
    totalPrice += item.price * item.qty
  })
  return {totalPrice, totalQuantity}
}
return(
      <>
       <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Quantity of items</p>
          <p className="text-gray-700">{getTotal().totalQuantity} </p>
        </div>
       
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">${getTotal().totalPrice}</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-red-rocket py-1.5 font-medium text-blue-50 hover:bg-white hover:text-red-rocket border border-red-rocket hover:border hover:border-red-rocket">Check out</button>
      </div> 
      </>
)
}

export default Total