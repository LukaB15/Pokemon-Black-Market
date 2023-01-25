import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { fetchSinglePkmn } from './singlePkmnAPI';

export type SinglePkmnState = {
    id:number;
    name:string;
    imgUrl:string;
    typeFirst:string;
    typeSecond:string | null;
    flavorText:string | null;
}

const initialState:SinglePkmnState = {
    id: 0,
    name: '',
    imgUrl: '',
    typeFirst: '',
    typeSecond: null,
    flavorText: null
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
  reducers: {},
  extraReducers:(builder) => {
      builder
        .addCase(singlePokeballGoAsync.fulfilled, (state, action)=>{
            const newSinglePkmn:SinglePkmnState = {
                id: action.payload.id,
                name: action.payload.name,
                imgUrl: action.payload.sprites.other["official-artwork"].front_default,
                typeFirst: action.payload.types[0].type.name,
                typeSecond: action.payload.types.length > 1 ? action.payload.types[1].type.name : null,
                flavorText: null
            }
            
            state.id = newSinglePkmn.id;
            state.name = newSinglePkmn.name;
            state.imgUrl = newSinglePkmn.imgUrl;
            state.typeFirst = newSinglePkmn.typeFirst;
            state.typeSecond = newSinglePkmn.typeSecond;
            state.flavorText = newSinglePkmn.flavorText;
        })
  },
});



export const {} = singlePkmnSlice.actions

export const selectSinglePkmn = (state: RootState) => state.singlePkmn;

export default singlePkmnSlice.reducer