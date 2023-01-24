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
    async (id:string) => {
        const response = await fetchSinglePkmn(id);
        return response;
    }
);


const singlePkmnSlice = createSlice({
  name: 'SinglePkmn',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
      builder
        .addCase(singlePokeballGoAsync.fulfilled, (state, action)=>{
            const newSinglePkmn:SinglePkmnState = {
                id: action.payload.id,
                name: action.payload.name,
                imgUrl: action.payload.sprites.other.official_artwork.front_default,
                typeFirst: action.payload.types[0].type.name,
                typeSecond: null,
                flavorText: null
            }
            state = newSinglePkmn;
        })
  },
});



export const {} = singlePkmnSlice.actions

export const selectCount = (state: RootState) => state;

export default singlePkmnSlice.reducer