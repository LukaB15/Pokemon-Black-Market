import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { getFromApiAsync, sendToSellAsync } from './sellPkmnAPI';

export type SellPkmnState = {
    idApi:number | null;
    name:string | null;
    imgUrl:string | null;
    typeFirst: string | null;
    typeSecond: string | null;
    flavorText: string | null;
    price:number | null;
    lvl:number | null;
    qty:number | null;
}

const initialState:SellPkmnState = {
    idApi: null,
    name: null,
    price: null,
    lvl: null,
    qty: null,
    imgUrl: null,
    typeFirst: null,
    typeSecond: null,
    flavorText: null
}

export const sellPkmnSliceAsync = createAsyncThunk(
    'sellPkmn/sendToSell',
    async (sellPkmn:SellPkmnState) => {
        const response = await sendToSellAsync(sellPkmn);
        return response;
    }
);

export const getFromListAsync = createAsyncThunk(
    'sellPkmn/getFromList',
    async (name:string) => {
        const response = await getFromApiAsync(name);
        return response;
    }
);

const sellPkmnSlice = createSlice({
  name: 'sellPkmn',
  initialState,
  reducers: {
    storeApiId:(state, action) =>{
        state.idApi = action.payload;
    },
    storeName:(state, action) =>{
        state.name = action.payload;
    },
    storePrice:(state, action) =>{
        state.price = action.payload;
    },
    storeLvl:(state, action)=>{
        state.lvl = action.payload;
    },
    storeQty:(state, action)=>{
        state.qty = action.payload;
    }
  },
  extraReducers:(builder) => {
      builder
        .addCase(sellPkmnSliceAsync.fulfilled, (state, action)=>{
            state.idApi = null;
            state.name = null;
            state.price = null;
            state.lvl = null;
            state.qty=null;
            state.imgUrl=null;
            state.typeFirst=null;
            state.typeSecond=null;
            state.flavorText=null;
            window.location.reload();
        })
        .addCase(getFromListAsync.fulfilled, (state, action)=>{
            state.idApi= action.payload.id;
            state.name= action.payload.name;
            state.imgUrl= action.payload.sprites.other["official-artwork"].front_default;
            state.typeFirst= action.payload.types[0].type.name;
            state.typeSecond= action.payload.types.length > 1 ? action.payload.types[1].type.name : null;
            state.flavorText= null
        })
  },
});

export const {storeApiId,storeLvl,storeName,storePrice,storeQty} = sellPkmnSlice.actions

export const selectSellPkmn = (state: RootState) => state.sellPkmn;

export default sellPkmnSlice.reducer