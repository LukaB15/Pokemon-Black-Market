import React from 'react'

export default function Sell() {
  return (
    <>
    <div className='flex flex-row items-center ml-auto mr-auto w-fit mt-28 mb-36'>
      <div>
      <article className="rounded-xl bg-white p-3 shadow-lg article w-6/12">
      <a href="#">
        <div className="relative flex flex-col items-center overflow-hidden rounded-xl">
          <img src="charizard.png" className="w-64" alt="Pokemon_Product" />
          <p className='text-darkest mt-4 mb-4 Pokemon'>
            Charizard
          </p>
          <form className='flex flex-row justify-around'>
          <input className='w-3/12' type="text" name="Price" placeholder='Price' />
          <input className='w-3/12' type="text" name="Level" placeholder='Level'/>
          <input className='w-3/12' type="text" name="Quantity" placeholder='Qty' />
        </form>

          <div className="flex items-center space-x-1.5 rounded-lg bg-red-rocket px-4 py-1.5 text-white duration-100 hover:bg-white hover:text-red-rocket hover:border border mt-6 ">
              <button className="text-lg w-24">Sell</button>
            </div>
        </div>
      </a>
    </article>
      </div>
      <div className="bg-gray-500 h-32">
        <input type="text" name="name" />
        <div>
          <p>Result</p>
        </div>
      </div>
    </div>
    </>
  )
}
