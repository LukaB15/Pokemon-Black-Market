import { incrementQuantity, decrementQuantity, removeItem, selectCart, listCart} from '../features/Cart/cartSlice'
import { useDispatch } from 'react-redux'
import { cartPokemon } from '../features/Cart/cartSlice'
import "../routes/Buy.css"
import { useAppSelector } from '../app/hooks';
import { buyPokemon, selectBuyList } from '../features/buyList/buyListSlice';
import { useState } from 'react';

function CartItem(props:cartPokemon) {
  const buyList:Array<buyPokemon> = useAppSelector(selectBuyList);
  const dispatch = useDispatch()
  const [enoughStock, setEnoughStock] = useState(true);

  const incrementHandler = () =>{
    const buyItem:buyPokemon = buyList.find(item => {
      return  item.namePokemon === props.name &&
              item.level === props.lvl &&
              item.price === props.price
    })!
    if(buyItem['COUNT(*)'] > props.qty!){
      dispatch(incrementQuantity(props.idApi));
    }else{
      setEnoughStock(false);
    }
  }

  const decrementHandler = () =>{
    dispatch(decrementQuantity(props.idApi));
    setEnoughStock(true);
  }

  return (
    <>
    <div className='border-b-2 border-lightest pb-4 pt-4'>
      <img src={props.imgUrl!} alt="pokemon-image" className="w-full rounded-lg sm:w-40 bg-lightest" />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900 Pokemon capitalize">{props.name}</h2>
              <p className="mt-1 text-xs text-gray-700 Pokemon">Level : {props.lvl}</p>
              <p className="mt-1 text-sm Pokemon">{props.price} $</p>
            </div>
            <div className="mt-4  mr-8 flex justify-center sm:space-y-6 sm:mt-0 sm:flex sm:flex-col sm:items-center sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={decrementHandler}> - </span>
                <p>{props.qty}</p>
                <button className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={incrementHandler}> + </button>
              </div>
              <span className={enoughStock? "invisible" : "text-red-rocket"}>*Stock limit reached*</span>
              <div className="flex items-center space-x-4">
                <button
                    className='bg-red-700 pt-2 pb-2 pl-4 pr-4 rounded-2xl text-white text-xs border border-transparent hover:bg-white hover:border hover:border-red-700 hover:text-red-700' 
                    onClick={() => dispatch(removeItem(props.idApi!))}>
                      Remove
                </button>
              </div>
            </div>
          </div> 
          </div>
        </>
  )
}

export default CartItem