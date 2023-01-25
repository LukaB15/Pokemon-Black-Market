import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { selectSinglePkmn, singlePokeballGoAsync } from '../features/singlePokemon/singlePkmnSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';


export default function SinglePokemon() {
    const singlePkmn = useAppSelector(selectSinglePkmn);
    const id:string | undefined = useParams().id;
    const dispatch = useAppDispatch();
    useEffect(()=>{
      dispatch(singlePokeballGoAsync(id));
    },[]);
  return (
    <div className="flex flex-col h-screen bg-lightest">
      <div className="mx-auto my-24 rounded-md w-10/12 h-96 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-light p-3">
        <div className='bg-dark w-3/12 rounded-md'>
          <h3 className='text-light'>{singlePkmn.name}</h3>
          <img src={singlePkmn.imgUrl} alt="pkmnimg"  />
        </div>
        <div className='bg-dark w-3/12 rounded-md'>

        </div>
        <div className='bg-dark w-3/12 rounded-md'>

        </div>
      </div>
    </div>

  )
}
