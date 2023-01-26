import React from 'react'
import "./Buy.css";

export default function Sell() {
  return (
    <>
    <div className='w-screen h-max'>
    <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center ml-auto mr-auto w-fit mt-28 mb-36'>
      <article className="rounded-xl bg-white p-3 shadow-lg article w-6/12 lg:mr-12 mb-16 lg:mb-0">
      <a href="#">
        <div className="relative flex flex-col items-center overflow-hidden rounded-xl">
          <img src="charizard.png" className="w-64" alt="Pokemon_Product" />
          <p className='text-darkest mt-4 mb-4 Pokemon'>
            Charizard
          </p>

          <form>
          <div className='flex flex-row justify-around'>
          <input className='w-3/12 placeholder:text-center ' type="text" name="Price" placeholder='Price' required />
          <input className='w-3/12 placeholder:text-center ' type="text" name="Level" placeholder='Level' required/>
          <input className='w-3/12 placeholder:text-center ' type="text" name="Quantity" placeholder='Qty' required />
          </div>

          <div className="flex justify-center space-x-1.5 rounded-lg bg-red-rocket px-4 py-1.5 text-white duration-100 hover:bg-white hover:text-red-rocket hover:border border mt-6 w-6/12 ml-auto mr-auto">
              <button className="text-lg">Sell</button>
            </div>
          </form>
    </div>
      </a>
    </article>
      <div className="rounded-xl bg-white p-3 shadow-lg article w-6/12 h-80 flex flex-col items-center mb-16 lg:mb-0">
        <input type="text" name="name" className='mt-3' />
        <div>
          <p>Result</p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
