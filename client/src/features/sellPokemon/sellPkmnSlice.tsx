import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { sendToSellAsync } from './sellPkmnAPI';

export type SellPkmnState = {
    idApi:number | null;
    name:string | null;
    price:number | null;
    lvl:number | null;
    qty:number | null;
}

const initialState:SellPkmnState = {
    idApi: null,
    name: null,
    price: null,
    lvl: null,
    qty: null
}

export const sellPkmnSliceAsync = createAsyncThunk(
    'sellPkmn/sendToSell',
    async (sellPkmn:SellPkmnState) => {
        const response = await sendToSellAsync(sellPkmn);
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
        })
  },
});

export const {storeApiId,storeLvl,storeName,storePrice,storeQty} = sellPkmnSlice.actions

export const selectSellPkmn = (state: RootState) => state.sellPkmn;

export default sellPkmnSlice.reducer