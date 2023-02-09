import React from 'react'
import "./Loading.css"

export default function Loading() {
  return (
    <div>
    <div className="pokeball-back"></div>
   
    <div className="pokeball-loading">
      <div className="pokeball" id="pokeball-normal"></div>
      <div className="pokeball" id="pokeball-great"></div>
      <div className="pokeball" id="pokeball-ultra"></div>
      <div className="pokeball" id="pokeball-master"></div>
      <div className="pokeball" id="pokeball-safari"></div>
    </div>
    </div>
  )
}