import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import LoadingSell from '../components/LoadingSell';
import { cartPokemon } from '../features/Cart/cartSlice';
import { selectUser } from '../features/frontUser/userSlice';
import { order } from './Profile';


export type buyPokemon = {
      _id:string,
      idApi:number | null;
      namePokemon:string | null;
      imgUrl:string | null;
      typeFirst: string | null;
      typeSecond: string | null;
      flavorText: string | null;
      level:number | null;
      price:number | null;
      idSeller: string
      isOrder: string
      __v:number,
      createdAt:string,
      updatedAt:string,
  }

  export type salesArray = Array<buyPokemon>;

export default function SalesList() {
      const initialOrders:salesArray = [];
      const user = useAppSelector(selectUser);
      const dispatch = useAppDispatch()
      const [sales, setSales] = useState(initialOrders);


      const getSales = async() =>{
            const response = await axios.get(`http://localhost:3001/api/product/findProduct/${user.userId}`, {
                withCredentials: true,
            })
            .then(function(response){
                  setSales(response.data);
            })
            .catch(function(error){
                console.log(error);
            })
        }

        useEffect( ()=>{
            getSales();
        },[])

      //   console.log(sales[0].ordersItems.imgUrl);
      // console.log(sales.length);
      
      
        

  return (
    <>
     
      {sales.length === 0 ? <LoadingSell /> : sales.map((sale) =>
      <Link to={{pathname: `/SinglePokemon/${ sale.namePokemon}/${ sale.level}/${ sale.price}`}}>
             <img src={sale!.imgUrl!} className='ml-2 mr-2 w-4/6'/>
             </Link>
        )}
        
    </>
  )
}
