import React from 'react'
import "./Buy.css";

export default function Buy() {
  return (
    <>
<div className="bg-white">


<div className="pt-32  bg-white">
<h1 className="text-center text-2xl font-bold text-gray-800">All Products</h1>
</div>
<div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800 ">
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600 hover:text-red-rocket">
		<img className='w-8 h-8' src='fire.png' />
		<span>Fire</span>
	</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900 hover:text-red-rocket">
    <img className='w-8 h-8' src='water.png' />
		<span>Water</span>
	</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
  <img className='w-8 h-8' src='grass.png' />
		<span>Grass</span>
	</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600 hover:text-red-rocket">
  <img className='w-8 h-8' src='fly.png' />
		<span>Fly</span>
	</a>
</div>

<section className="py-10 bg-bck h-screen">
  <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    
    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 article">
      <a href="#">
        <div className="relative flex flex-col items-center overflow-hidden rounded-xl">
          <img src="charizard.png" alt="Pokemon_Product" />
          <p className='text-darkest mt-4 mb-4 Pokemon'>
            Charizard
          </p>
          <div className='flex flex-row pt-4 pb-4 items-center ml-auto mr-auto border-t border-b border-red-rocket '>
            <div className='w-8 flex flex-col items-center'>
              <p className='Pokemon text-xs'>Type</p>
              <p>Feu</p>
            </div>
            <div className='flex flex-col items-center border-l-4 border-red-rocket border-r-4 ml-5 pl-3 mr-3 pr-3'>
              <p className='Pokemon text-xs'>Level</p>
              <p>200cm</p>
            </div>
            <div className='w-14 flex flex-col items-center'>
              <p className='Pokemon text-xs'>Qty</p>
              <p>220kg</p>
            </div>
          </div>
          <div className='mt-8 mb-4 flex flex-row justify-center items-center'>
            <p className=" mr-2 Pokemon mt-1">250</p>
            <img className="w-8 h-8 mr-2 mt-1" src="pokedollar.png"/>
          

            <div className="flex items-center space-x-1.5 rounded-lg bg-red-rocket px-4 py-1.5 text-white duration-100 hover:bg-white hover:text-red-rocket hover:border border ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <button className="text-sm">Add to cart</button>
              </div>
          </div>
        </div>
      </a>
    </article>

    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 article">
      <a href="#">
        <div className="relative flex flex-col items-center overflow-hidden rounded-xl">
          <img src="charizard.png" alt="Pokemon_Product" />
          <p className='text-darkest mt-4 mb-4 Pokemon'>
            Charizard
          </p>
          <div className='flex flex-row pt-4 pb-4 items-center ml-auto mr-auto  border-t border-b border-red-rocket'>
            <div className='w-8 flex flex-col items-center'>
              <p className='Pokemon text-xs'>Type</p>
              <p>Feu</p>
            </div>
            <div className='flex flex-col items-center border-l-4 border-red-rocket border-r-4 ml-5 pl-3 mr-3 pr-3'>
              <p className='Pokemon text-xs'>Height</p>
              <p>200cm</p>
            </div>
            <div className='w-14 flex flex-col items-center'>
              <p className='Pokemon text-xs'>Weight</p>
              <p>220kg</p>
            </div>
          </div>
          <div className='mt-8 mb-4 flex flex-row justify-center items-center'>
            <p className=" mr-2 Pokemon mt-1">250</p>
            <img className="w-8 h-8 mr-2 mt-1" src="pokedollar.png"/>
          

            <div className="flex items-center space-x-1.5 rounded-lg bg-red-rocket px-4 py-1.5 text-white duration-100 hover:bg-white hover:text-red-rocket hover:border border ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <button className="text-sm">Add to cart</button>
              </div>
          </div>
        </div>
      </a>
    </article>

    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 article">
      <a href="#">
        <div className="relative flex flex-col items-center overflow-hidden rounded-xl">
          <img src="charizard.png" alt="Pokemon_Product" />
          <p className='text-darkest mt-4 mb-4 Pokemon'>
            Charizard
          </p>
          <div className='flex flex-row pt-4 pb-4 items-center ml-auto mr-auto border-t border-b border-red-rocket '>
            <div className='w-8 flex flex-col items-center'>
              <p className='Pokemon text-xs'>Type</p>
              <p>Feu</p>
            </div>
            <div className='flex flex-col items-center border-l-4 border-red-rocket border-r-4 ml-5 pl-3 mr-3 pr-3'>
              <p className='Pokemon text-xs'>Height</p>
              <p>200cm</p>
            </div>
            <div className='w-14 flex flex-col items-center'>
              <p className='Pokemon text-xs'>Weight</p>
              <p>220kg</p>
            </div>
          </div>
          <div className='mt-8 mb-4 flex flex-row justify-center items-center'>
            <p className=" mr-2 Pokemon mt-1">250</p>
            <img className="w-8 h-8 mr-2 mt-1" src="pokedollar.png"/>
          

            <div className="flex items-center space-x-1.5 rounded-lg bg-red-rocket px-4 py-1.5 text-white duration-100 hover:bg-white hover:text-red-rocket hover:border border ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <button className="text-sm">Add to cart</button>
              </div>
          </div>
        </div>
      </a>
    </article>

    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 article">
      <a href="#">
        <div className="relative flex flex-col items-center overflow-hidden rounded-xl">
          <img src="charizard.png" alt="Pokemon_Product" />
          <p className='text-darkest mt-4 mb-4 Pokemon'>
            Charizard
          </p>
          <div className='flex flex-row pt-4 pb-4 items-center ml-auto mr-auto border-t border-b border-red-rocket'>
            <div className='w-8 flex flex-col items-center'>
              <p className='Pokemon text-xs'>Type</p>
              <p>Feu</p>
            </div>
            <div className='flex flex-col items-center border-l-4 border-red-rocket border-r-4 ml-5 pl-3 mr-3 pr-3'>
              <p className='Pokemon text-xs'>Height</p>
              <p>200cm</p>
            </div>
            <div className='w-14 flex flex-col items-center'>
              <p className='Pokemon text-xs'>Weight</p>
              <p>220kg</p>
            </div>
          </div>
          <div className='mt-8 mb-4 flex flex-row justify-center items-center'>
            <p className=" mr-2 Pokemon mt-1">250</p>
            <img className="w-8 h-8 mr-2 mt-1" src="pokedollar.png"/>
          

            <div className="flex items-center space-x-1.5 rounded-lg bg-red-rocket px-4 py-1.5 text-white duration-100 hover:bg-white hover:text-red-rocket hover:border border ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <button className="text-sm">Add to cart</button>
              </div>
          </div>
        </div>
      </a>
    </article>
    </div>
</section>

  
</div>
</>
  )
}
