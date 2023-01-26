import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { selectSinglePkmn, singlePokeballGoAsync } from '../features/singlePokemon/singlePkmnSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import "./Buy.css";


export default function SinglePokemon() {
    const singlePkmn = useAppSelector(selectSinglePkmn);
    const id:string | undefined = useParams().id;
    const dispatch = useAppDispatch();
    useEffect(()=>{
      dispatch(singlePokeballGoAsync(id));
    },[]);
  return (
    // <div className="flex flex-col h-screen bg-lightest">
    //   <div className="mx-auto my-24 rounded-md w-10/12 h-96 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-light p-3">
    //     <div className='bg-dark w-3/12 rounded-md'>
    //       <h3 className='text-light'>{singlePkmn.name}</h3>
    //       <img src={singlePkmn.imgUrl} alt="pkmnimg"  />
    //     </div>
    //     <div className='bg-dark w-3/12 rounded-md'>

    //     </div>
    //     <div className='bg-dark w-3/12 rounded-md'>

    //     </div>
    //   </div>
    // </div>
   
       <div className='flex flex-col lg:flex-row items-center justify-center w-fit pt-28 pb-36 bg-bck'>
          <article className="rounded-xl bg-white p-3 shadow-lg article lg:w-3/12 w-6/12">
          <a href="#">
            <div className="relative flex flex-col items-center overflow-hidden rounded-xl">
            <img src={singlePkmn.imgUrl} alt="pkmnimg" className='w-64'  />
              <p className='text-darkest mt-4 mb-4 Pokemon'>
              {singlePkmn.name}
              </p>
              <div className='flex flex-row pt-2 pb-2 items-center ml-auto mr-auto '>
            <div className='w-8 flex flex-col items-center'>
              <p className='Pokemon text-xs'>Type</p>
              <p>{singlePkmn.typeFirst}</p>
            </div>
            <div className='flex flex-col items-center border-l-4 border-red-rocket border-r-4 ml-5 pl-3 mr-3 pr-3'>
              <p className='Pokemon text-xs'>Type 2</p>
              <p>{singlePkmn.typeSecond}</p>
            </div>
            <div className='w-14 flex flex-col items-center'>
              <p className='Pokemon text-xs'>Level</p>
              <p>100</p>
            </div>
          </div>
          <div className='mt-4 flex flex-row'>
            <p className="mr-2 Pokemon">250</p>
            <img className="w-4 h-6" src="../pokedollar.png"/>
          </div>
    
          <div className="flex items-center space-x-1.5 rounded-lg bg-red-rocket px-4 py-1.5 text-white duration-100 hover:bg-white hover:text-red-rocket hover:border border mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>

              <button className="text-lg">Add to cart</button>
            </div>
            </div>
          </a>
        </article>
        <div className='flex flex-col ml-0 lg:ml-10 lg:w-3/12 w-6/12'>
          <div className='rounded-xl bg-white p-3 shadow-lg article w-full mt-4 lg:mt-0 mb-2'>
          <h4 className='Pokemon mb-4'>Description</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, deleniti asperiores? Eveniet, sapiente fugit nulla error vel modi veritatis saepe accusantium quas accusamus possimus aliquid, deserunt neque rerum a at.</p>
          </div>
          <div className='rounded-xl bg-white p-3 shadow-lg article w-full mt-2'>
            <h4 className='Pokemon mb-4'>Recommandations</h4>
            <div className='flex flex-row justify-evenly'>
              <img className='w-24 hover:border hover:border-red-rocket hover:rounded p-2 border border-transparent transition ease-in-out' src="../charizard.png" />
              <img className='w-24 hover:border hover:border-red-rocket hover:rounded p-2 border border-transparent transition ease-in-out' src="../charizard.png" />
              <img className='w-24 hover:border hover:border-red-rocket hover:rounded p-2 border border-transparent transition ease-in-out' src="../charizard.png" />
            </div>
          </div>
         
        </div>
        </div>

  )
}
