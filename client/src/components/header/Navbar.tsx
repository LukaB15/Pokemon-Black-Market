import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
   <>
<nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
  <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
    <Link to={`/`} className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pokeball" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="9" cy="9" r="9" transform="translate(3 3)" /> <circle cx="12" cy="12" r="3" /> <path d="M3 12h6m6 0h6" /> </svg>
        <span className="self-center whitespace-nowrap text-xl font-semibold">PokeMarket</span>
    </Link>
    
    <div className="mt-2 sm:mt-0 sm:flex md:order-2">
      <Link to={`/Login`}>
        <button type="button" className="btn_login rounde mr-3 hidden border py-1.5 px-6 text-center text-sm font-medium focus:outline-none focus:ring-4  md:inline-block rounded-lg">Login</button>
      </Link>
      <Link to={`/Register`}>
        <button type="button" className="rounde mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block rounded-lg btn_register">Register</button>
      </Link>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setIsNavOpen((prev) => !prev)}>
        <span className="sr-only">Open main menu</span>
        <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>
    </div>
    <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
      <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
        <li>
          <Link to={`/Buy`} className=" block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 btn_buy" aria-current="page">Buy</Link>
        </li>
        <li>
          <Link to={`/Sell`} className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 btn_sell" aria-current="page">Sell</Link>
        </li>
       
      </ul>
    </div>
    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to={`/Buy`} onClick={() => setIsNavOpen(false)} className="block rounded py-2 pl-3 pr-4 text-red-rocket  md:p-0 " aria-current="page">Buy</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to={`/Sell`} onClick={() => setIsNavOpen(false)} className="block rounded py-2 pl-3 pr-4 text-red-rocket  md:p-0  " aria-current="page">Sell</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to={`/Login`} onClick={() => setIsNavOpen(false)} className="block rounded py-2 pl-3 pr-4 text-red-rocket  md:p-0  " aria-current="page">Login</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to={`/Register`} onClick={() => setIsNavOpen(false)} className="block rounded py-2 pl-3 pr-4 text-red-rocket  md:p-0 " aria-current="page">Register</Link>
              </li>
            </ul>
          </div>
  </div>
</nav>
<style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>



   </>
  )
}