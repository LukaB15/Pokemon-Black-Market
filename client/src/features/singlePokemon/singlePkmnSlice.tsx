import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { buyPokemon } from '../buyList/buyListSlice';
import { fetchFlavorTextAsync, fetchSinglePkmn } from './singlePkmnAPI';



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

export const getFlavorTextAsync = createAsyncThunk(
    'singlePkmn/fetchFlavorText',
    async (id:string)=>{
        const response = await fetchFlavorTextAsync(id);
        return response;
    }
)


export const singlePkmnSlice = createSlice({
  name: 'SinglePkmn',
  initialState,
  reducers: {
    fillState:(state, action)=>{
        state['COUNT(*)']=action.payload['COUNT(*)'];
        state.idApi = action.payload.idApi;
        state.imgUrl = action.payload.imgUrl;
        state.level = action.payload.level;
        state.namePokemon = action.payload.namePokemon;
        state.price = action.payload.price;
        state.typeFirst = action.payload.typeFirst;
        state.typeSecond = action.payload.typeSecond;
        
    }
  },
  extraReducers:(builder) => {
      builder
        .addCase(singlePokeballGoAsync.fulfilled, (state, action)=>{
            state['COUNT(*)'] = 1;

        })
        .addCase(getFlavorTextAsync.fulfilled, (state, action)=>{
            let i:number = 0;
            while(action.payload.flavor_text_entries[i].language.name != "en"){
                i++;
            };
            console.log(action.payload.flavor_text_entries[i].flavor_text)
            state.flavorText = action.payload.flavor_text_entries[i].flavor_text;
        })
  },
});



export const {fillState} = singlePkmnSlice.actions

export const selectSinglePkmn = (state: RootState) => state.singlePkmn;

export default singlePkmnSlice.reducer