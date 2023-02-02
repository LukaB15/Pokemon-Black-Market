import React from 'react'

export default function Profile() {
  return (
    <>
    <div className='bg-gray-200 flex flex-col items-center'>
    <div className='w-6/12'>
    <div className="w-full h-[250px] rounded-2xl">
                <div className="w-full h-full rounded-tl-lg rounded-tr-lg bg-red-rocket"> </div>
            </div>
            <div className="flex flex-col items-center -mt-20">
                <img src="./rocket.jpeg" className="w-40 border-4 border-white rounded-full" />
                <div className="flex items-center space-x-2 mt-2">
                    <p className="text-2xl">Your name</p>
                    
                </div>
                <p className="text-gray-700">Your nickname</p>
                <p className="text-sm text-gray-500">Your e-mail</p>
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                <div className="flex items-center space-x-4 mt-2">
                    <button className="flex items-center hover:bg-red-rocket bg-white hover:text-white text-red-rocket border hover:border-transparent border-red-rocket px-4 py-2 rounded text-sm space-x-2 transition duration-100">                    
                        <span>Modify Profile</span>
                    </button>
                    <button className="flex items-center bg-red-700 hover:bg-white text-white hover:text-red-700 border border-transparent hover:border-red-700 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                       <span>Delete Profile</span>
                    </button>
                </div>
            </div>
            </div>
          
            <div className="flex-1 bg-gray-200 rounded-lg shadow-xl p-8">
                    <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
                    <ul className="mt-2 text-gray-700">
                        <li className="flex border-y py-2">
                            <span className="font-bold w-24">Full name:</span>
                            <span className="text-gray-700">Amanda S. Ross</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Birthday:</span>
                            <span className="text-gray-700">24 Jul, 1991</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Joined:</span>
                            <span className="text-gray-700">10 Jan 2022 (25 days ago)</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Mobile:</span>
                            <span className="text-gray-700">(123) 123-1234</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Email:</span>
                            <span className="text-gray-700">amandaross@example.com</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Location:</span>
                            <span className="text-gray-700">New York, US</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Languages:</span>
                            <span className="text-gray-700">English, Spanish</span>
                        </li>
                    </ul>
                </div>
                </div>
            </>
  )
}
