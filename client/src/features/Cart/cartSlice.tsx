import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

export type cartPokemon = {
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

  export const initialState:Array<cartPokemon> = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
      addToCart: (state,action) => {
            const itemInCart:any = state.find((item:any) => item.idApi === action.payload.idApi);
            if(itemInCart){
                  itemInCart['COUNT(*)']++;
            }
            else{
                  state.push({ ...action.payload, 'COUNT(*)': 1 });
            }
      },
      incrementQuantity: (state, action) => {
            const item:any = state.find((item:any) => item.idApi === action.payload);
            item['COUNT(*)']++;
          },
          decrementQuantity: (state, action) => {
            const item:any = state.find((item:any) => item.idApi === action.payload);
            if (item['COUNT(*)'] === 1) {
              item['COUNT(*)'] = 1
            } else {
              item['COUNT(*)']--;
            }
          },
          removeItem: (state, action) => {
            const removeItem = state.filter((item:any) => item.idApi !== action.payload);
            state = removeItem;
          },
  }
});

export const {addToCart,incrementQuantity,decrementQuantity,removeItem,} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cartList;

export default cartSlice.reducer;