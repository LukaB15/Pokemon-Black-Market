import React from 'react'
import { Link } from 'react-router-dom'
import { buyPokemon } from '../features/buyList/buyListSlice'

export default function BuyPokemon(props:buyPokemon) {
  return (
    <Link to={{pathname: `/SinglePokemon/${props.namePokemon}/${props.level}/${props.price}`}}>
    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 article">
     
        <div className="relative flex flex-col items-center overflow-hidden rounded-xl">
          <img src={props.imgUrl} alt="Pokemon_Product" />
          <p className='text-darkest mt-4 mb-4 Pokemon'>
            {props.namePokemon}
          </p>
          <div className='flex flex-row pt-4 pb-4 h-24 items-center ml-auto mr-auto border-t border-b border-red-rocket '>
            <div className='w-8 flex flex-col items-center'>
              <p className='Pokemon text-xs'>Type</p>
              <p>{props.typeFirst}</p>
              <p>{props.typeSecond ? props.typeSecond: "" }</p>
            </div>
            <div className='flex flex-col items-center border-l-4 border-red-rocket border-r-4 ml-5 pl-3 mr-3 pr-3'>
              <p className='Pokemon text-xs'>Level</p>
              <p>{props.level}</p>
            </div>
            <div className='w-14 flex flex-col items-center'>
              <p className='Pokemon text-xs'>Qty</p>
              <p>{props['COUNT(*)']}</p>
            </div>
          </div>
          <div className='mt-8 mb-4 flex flex-col justify-center items-center'>
            <div className='flex flex-row'>
              <p className=" mr-2 Pokemon mt-1">{props.price} $</p>
              
            </div>
            <div className="flex items-center space-x-1.5 rounded-lg bg-red-rocket px-4 py-1.5 text-white duration-100 hover:bg-white hover:text-red-rocket hover:border border ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <button className="text-sm">Add to cart</button>
              </div>
          </div>
        </div>
      
    </article>
    </Link>
  )
}