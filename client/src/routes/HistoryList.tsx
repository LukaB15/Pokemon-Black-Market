import dayjs from 'dayjs';
import React, { useEffect } from 'react'
import { order } from './Profile';
import "./Buy.css";

export default function HistoryList(props:order) {


useEffect( ()=>{
      console.log(props.ordersItems[0].imgUrl)
  },[])

  return (
    <>
      <div className="flex items-center w-full my-6 -ml-1.5">
            <div className="w-1/12 z-10">
                  {/* <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div> */}
                  <img src="../superball.png"  className='w-2/3' />
            </div>
            <div className="w-11/12">
            <div className="flex flex-row items-center">
                  <img src={props.ordersItems[0].imgUrl!} className='w-1/6 p-2 bg-rocket bg-contain border rounded-full' />
                  <p className="text-sm text-red-rocket Pokemon ml-4 mr-4">SELL</p>
                  <p className='mr-4'>-</p>
                  <p className="text-xs text-gray-500">{dayjs(props.createdAt).format("DD MMM YYYY")}</p>
            </div>
            
            {/* <p className="text-sm">{props._id} </p> */}
            </div>
      </div>
    </>
  )
}
