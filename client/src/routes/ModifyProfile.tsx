import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ModifyProfile() {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[]);
  return (
    <>
    
    <div className='h-screen bg-bck flex flex-col items-center justify-center'>
    <div className="flex flex-col bg-white rounded-lg shadow-xl p-8 h-96 mt-24">
                    <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
                    <ul className="mt-2 text-gray-700">
                        <li className="flex border-y py-2">
                            <span className="font-bold w-24">Name:</span>
                            <input className="text-gray-700 border" value="Name"/>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">E-mail:</span>
                            <input className="text-gray-700 border" value="Email"/>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Password</span>
                            <input className="text-gray-700 border" value="****"/>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Confirm Password</span>
                            <input className="text-gray-700 border" value="****"/>
                        </li>
                    <div className='flex flex-row justify-between'>
                    
                    <button className="flex items-center hover:bg-red-rocket bg-white hover:text-white text-red-rocket border hover:border-transparent border-red-rocket px-4 py-2 rounded text-sm space-x-2 transition duration-100 mt-8">                    
                        <span>Save Modifications</span>
                    </button>
                
                    
                    </div>
                    </ul>
                </div>
      </div>
    
    </>
  )
}
