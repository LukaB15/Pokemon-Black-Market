import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { saveToDBAsync, selectUser, userAddPokedollars } from '../features/frontUser/userSlice';
import "./Buy.css";

export default function AddPokedollar() {
      const user = useAppSelector(selectUser);
      const dispatch = useAppDispatch();
      const [pokeDollarsToAdd, setPokeDollarsToAdd] = useState(0);
      const addPokedollars = (e: any) => {
            const pokeDollars: number = +e.target.value;
            setPokeDollarsToAdd(pokeDollars);
          };

      const addToCredit =() =>{
            dispatch(userAddPokedollars(pokeDollarsToAdd));
            dispatch(saveToDBAsync({id:user.userId!, amount:pokeDollarsToAdd}));
      }
  return (
      <>
      <div className='h-screen bg-bck flex flex-col items-center justify-center'>
            <div className='bg-white w-6/12 h-72 flex flex-col items-center rounded-xl'>
                  <h2 className='Pokemon mt-8 mb-8 text-xl text-red-rocket'>Add Pokedollar</h2>
                  <div className='flex flex-row items-center '>
                        <p className='Pokemon text-md'>Your Current amount of Pokedollar: </p>  
                        <p className='Pokemon text-md text-red-rocket ml-2 mr-2'>{user.credits? user.credits: "No login, no money"}</p>
                        <p className='Pokemon text-md'>$</p>
                  </div>
                  <div className='flex flex-row'>
                  <input type='text' value={pokeDollarsToAdd} onChange={addPokedollars} className='mt-8 w-96 rounded-l-xl' />
                  <button onClick={addToCredit} disabled={!user.userName} className="flex items-center hover:bg-red-rocket bg-white hover:text-white text-red-rocket border hover:border-transparent border-red-rocket px-6 py-4 rounded-r-xl text-lg space-x-2 transition duration-100 mt-8">                    
                              <span>Add Pokedollar</span>
                  </button>
                  </div>
            </div>
      </div>
      </>
  )
}
