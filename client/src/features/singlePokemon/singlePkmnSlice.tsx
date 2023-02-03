import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { buyPokemon } from '../buyList/buyListSlice';
import { fetchSinglePkmn } from './singlePkmnAPI';



const initialState:buyPokemon = {
    'COUNT(*)': 0,
    level: 0,
    namePokemon: '',
    price: 0,
    idApi: 0,
    imgUrl: '',
    typeFirst: '',
    typeSecond: '',
    flavorText: ''
}

export const singlePokeballGoAsync = createAsyncThunk(
    'singlePkmn/fetchSinglePkmn',
    async (id:string | undefined) => {
        const response = await fetchSinglePkmn(id);
        return response;
    }
);


export const singlePkmnSlice = createSlice({
  name: 'SinglePkmn',
  initialState,
  reducers: {
    fillState:(state, action)=>{
        state['COUNT(*)']=action.payload['COUNT(*)'];
        state.idApi = action.payload.idApi;
        state.imgUrl = action.payload.imgUrl;
    }
  },
  extraReducers:(builder) => {
      builder
        .addCase(singlePokeballGoAsync.fulfilled, (state, action)=>{
            state['COUNT(*)'] = 1;

        })
  },
});



export const {fillState} = singlePkmnSlice.actions

export const selectSinglePkmn = (state: RootState) => state.singlePkmn;

export default singlePkmnSlice.reducer