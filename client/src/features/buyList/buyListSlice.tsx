import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { getBuyListAsync } from './buyListSliceAPI';

export type buyPokemon = {
    "COUNT(*)":number;
    level:number;
    namePokemon:string;
    price:number;
    idApi:number;
    imgUrl:string;
    typeFirst:string;
    typeSecond:string;
    flavorText:string;
}


export const initialState:Array<buyPokemon> = [];


export const getBuyListFromServerAsync = createAsyncThunk(
    'buyList/buildBuyList',
    async () => {
        const response = await getBuyListAsync();
        return response;
    }
);

const buyListSlice = createSlice({
  name: "buyList",
  initialState,
  reducers: {
    emptyArray:(state)=>{
        state.splice(0, state.length);
    }
  },
  extraReducers:(builder) => {
      builder
        .addCase(getBuyListFromServerAsync.fulfilled, (state, action) => {
            action.payload.forEach((element:buyPokemon) => {
                return state.push(element)
            });
            
        })
  },
});

export const {emptyArray} = buyListSlice.actions

export const selectBuyList = (state: RootState) => state.buyList;

export default buyListSlice.reducer