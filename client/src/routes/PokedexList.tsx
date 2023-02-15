import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { order } from './Profile'

export default function PokedexList(props:order) {
      
  return (
      <>
      {props.ordersItems.map((order) =>
            <img key={uuidv4()} src={order.imgUrl!} className='w-1/6 ml-2 mr-2' />
      )}
    </>
  )
}
