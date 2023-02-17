import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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

export type cartList = Array<cartPokemon>

export interface listCart{
  list:cartList;
}

export const initialState:listCart = {
  list:[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
      addToCart: (state,action:PayloadAction<cartPokemon>) => {
            if(state.list.find((item:cartPokemon) => item.idApi === action.payload.idApi) != undefined){
              const itemInCart:cartPokemon = state.list.find((item:cartPokemon) => item.idApi === action.payload.idApi)!;    
              itemInCart.qty!++;
            }
            else{
                  state.list.push(action.payload);
            }
      },
      incrementQuantity: (state, action) => {
            const item:any = state.list.find((item:any) => item.idApi === action.payload);
            item.qty++;
      },
      decrementQuantity: (state, action) => {
            const item:any = state.list.find((item:any) => item.idApi === action.payload);
            if (item.qty === 1) {
              item.qty = 1
            } else {
              item.qty--;
            }
      },
      removeItem:(state , action:PayloadAction<number>) => {
        state.list = state.list.filter((item:cartPokemon)=> item.idApi != action.payload );
      },
      emptyCart:(state) => {
        state.list = [];
      },
  }
});

export const {addToCart,incrementQuantity,decrementQuantity,removeItem,emptyCart} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cartList;

export default cartSlice.reducer;