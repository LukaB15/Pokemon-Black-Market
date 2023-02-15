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
      idOrder: string | null
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

        console.log(sales);
        
  return (
    <>
     
      {sales.length === 0 ? <LoadingSell /> : sales.map((sale) => sale.idOrder  ===  "" ? 
            <Link to={{pathname: `/SinglePokemon/${ sale.namePokemon}/${ sale.level}/${ sale.price}`}}>
                  <img src={sale!.imgUrl!} className='ml-2 mr-2 w-4/6'/>
             </Link>
             :
            
                  <div className='relative'>
                  <img src={sale!.imgUrl!} className='ml-2 mr-2 w-4/6 z-20'/>
                  <p className='absolute top-16 right-28 Pokemon text-xl text-red-rocket uppercase bg-white bg-opacity-80 p-4 rounded-2xl'>sold</p>
                  </div>
             
        )}
        
    </>
  )
}
