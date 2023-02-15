import axios from 'axios';
import {useSelector} from 'react-redux'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { cartPokemon, emptyCart, listCart, selectCart } from '../features/Cart/cartSlice';
import { selectUser, userType } from '../features/frontUser/userSlice';

function Total(){
const cartPkmn:listCart = useAppSelector(selectCart);
const user:userType = useAppSelector(selectUser);
const dispatch = useAppDispatch();

const activated = "mt-6 w-full rounded-md bg-red-rocket py-1.5 font-medium text-blue-50 hover:bg-white hover:text-red-rocket border border-red-rocket hover:border hover:border-red-rocket";
const disActivated = "mt-6 w-full rounded-md bg-light py-1.5 font-medium text-blue-50 border border-red-rocket";

const getTotal = () => {
  let totalQuantity = 0
  let totalPrice = 0
  cartPkmn.list.forEach((item:any) => {
    totalQuantity += item.qty
    totalPrice += item.price * item.qty
  })
  return {totalPrice, totalQuantity}
}

const checkoutGo = () =>{
  const total = getTotal().totalPrice;
  axios.post(`http://localhost:3001/api/order/`,
  {
    idBuyers : user.userId,
    ordersItems : cartPkmn.list,
    total: total
  },
   {
    withCredentials: true,
  })
  .then(function(response){
    console.log(response);
    dispatch(emptyCart());
  })
  .catch(function(error){
    //console.log(error);
    
  })
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
        <button disabled={user.credits! < getTotal().totalPrice || cartPkmn.list.length === 0 } className={user.credits! >= getTotal().totalPrice && cartPkmn.list.length > 0 ? activated : disActivated} onClick={checkoutGo}>Check out</button>
      </div> 
      </>
)
}

export default Total