import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./Home.css";
import CountUp from 'react-countup';

export default function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
  return (
  <>

{/* Hero */}

<section className="bg-blueGray-50 pt-20">
 
  <div className="overflow-hidden pt-16">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap -m-8">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="mb-6 text-2xl md:text-4xl lg:text-6xl font-bold font-heading md:max-w-xl leading-none title_home">Welcome to </h1>
          <h1 className="mb-6 text-2xl md:text-4xl lg:text-6xl font-bold font-heading md:max-w-xl leading-none title_home">PokeMarket</h1>
          <p className="mb-1 text-lg text-gray-900 font-medium md:max-w-md">Buy every Pokemon to become the best trainer in the league.</p>
          <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md">Sell your Pokemon to become the richest trainer in the league.</p>
          <div className="flex flex-wrap -m-2.5 mb-20">
            <div className="w-full md:w-auto p-2.5">
              <div className="block">
                  <Link to={"/Buy"}>
                        <button className="py-4 px-6 w-full text-white font-semibold border  rounded-xl focus:ring focus:ring-indigo-300   transition ease-in-out duration-200 buy_btn" type="button">Buy Them All !</button>
                  </Link>
              </div>
            </div>
            <div className="w-full md:w-auto p-2.5">
              <div className="block">
              <Link to={"/Sell"}>
                  <button className="py-4 px-9 w-full font-semibold border rounded-xl focus:ring focus:ring-gray-50 transition ease-in-out duration-200 sell_btn" type="button">
                        <div className="flex flex-wrap justify-center items-center -m-1">
                        <div className="w-auto p-1">
                        <span>Sell Them All !</span>
                        </div>
                        </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-row items-center'>
         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pokeball" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="9" cy="9" r="9" transform="translate(3 3)" /> <circle cx="12" cy="12" r="3" /> <path d="M3 12h6m6 0h6" /> </svg>
         <p className="text-sm text-gray-500 font-semibold uppercase pl-2">Trusted and loved by the team ROCKET </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <img className="transform hover:-translate-y-16 transition ease-in-out duration-1000" src="headerHome.png"  alt="" />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Certifications */}

<div className=' w-full h-full mt-8 flex lg:flex-row md:flex-col md:pt-8 md:pb-8 place-content-evenly items-center flex-col certif_container'>
      <div>
            <p className='w-44 text-center text-3xl hover:scale-125 transition ease-in-out duration-1000 certif_txt mt-10 '><CountUp end={100} />% QUALITY</p>
      </div>
      <div className=' '>
            <img className=' w-36  lg:w-52 xl:w-60  hover:scale-75 transition ease-in-out duration-1000 mt-12 mb-12' src='Original_Nintendo_Seal_of_Quality.png' />
      </div>
      <div>
            <p className='w-44 text-center text-3xl  hover:scale-125 transition ease-in-out duration-1000 certif_txt flex flex-col items-center mb-10 '>+ <CountUp end={1200} /> POKEMON<br/>AVAILAIBLE</p>
      </div>
</div>

{/* Our team  */}

<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white team_title">Our Team</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Check who is behind this amazing website !</p>
      </div> 
      <div className="grid gap-8 mb-6 lg:mb-16 xl:grid-cols-3 ">
          <div className="h-full w-full items-center justify-start bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-4 transition ease-in-out duration-1000">

                  <img className="w-4/12 rounded-lg sm:rounded-none sm:rounded-l-lg max-w-lg" src="rocket.jpeg" alt="Bonnie Avatar" />
              
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <p >Colin H.</p>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">CEO & Fullstack Developer</span>
                   <ul className="flex space-x-4 sm:mt-0">
                        <li>
                          <a href="https://github.com/ColinHuart" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/colin-huart/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                          </a>
                      </li>
                  </ul>
              </div>
          </div> 
          <div className="h-full w-full items-center justify-start bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-4 transition ease-in-out duration-1000">

            <img className="w-4/12 rounded-lg sm:rounded-none sm:rounded-l-lg max-w-lg" src="rocket.jpeg" alt="Bonnie Avatar" />

              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <p>Andreas S.</p>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">CEO & Frontend Developer</span>
                   <ul className="flex space-x-4 sm:mt-0">
                        <li>
                          <a href="https://github.com/Nimarho" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/andreas-schimanski/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                          </a>
                      </li>
                  </ul>
              </div>
          </div> 
          <div className="h-full w-full items-center justify-start bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-4 transition ease-in-out duration-1000">

                  <img className="w-4/12 rounded-lg sm:rounded-none sm:rounded-l-lg max-w-lg" src="rocket.jpeg" alt="Bonnie Avatar" />
              
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <p>Luka B.</p>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">CEO & Frontend Developer</span>
                 <ul className="flex space-x-4 sm:mt-0">
                        <li>
                          <a href="https://github.com/LukaB15" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/luka-brabant/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                          </a>
                      </li>
                  </ul>
              </div>
          </div> 
      </div>  
  </div>
</section>

  </>
  )
}
