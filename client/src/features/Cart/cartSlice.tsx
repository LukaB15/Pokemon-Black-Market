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
            const itemInCart:cartPokemon|undefined = state.find((item:cartPokemon) => item.idApi === action.payload.idApi);
            if(itemInCart){
                  itemInCart.qty!++;
            }
            else{
                  state.push({ ...action.payload });
            }
      },
      incrementQuantity: (state, action) => {
            const item:any = state.find((item:any) => item.idApi === action.payload);
            item.qty++;
          },
      decrementQuantity: (state, action) => {
            const item:any = state.find((item:any) => item.idApi === action.payload);
            if (item.qty === 1) {
              item.qty = 1
            } else {
              item.qty--;
            }
          },
      removeItem: (state, action) => {
            const removeItem= state.findIndex((item:cartPokemon) => item.idApi !== action.payload.idApi);
            return state.filter((_, i) => i !== removeItem);
           
          },
  }
});

export const {addToCart,incrementQuantity,decrementQuantity,removeItem,} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cartList;

export default cartSlice.reducer;