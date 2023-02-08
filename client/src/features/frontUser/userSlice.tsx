import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { getMoneyFromDB, sendMoneyToDB } from './userSliceAPI';

export type userType = {
    userId : string | null,
    userName:string | null,
    mail:string | null,
    credits:number | null,
    isAdmin:boolean | null,
}

export type objectForMoney = {
    id:string,
    amount:number
}

const initialState:userType = {
    userName: null,
    mail: null,
    credits: null,
    userId: null,
    isAdmin: null
}

export const saveToDBAsync = createAsyncThunk(
    'userSlice/saveMoneyToDB',
    async (moneyObj:objectForMoney) => {
        const response = await sendMoneyToDB(moneyObj.id, moneyObj.amount);
        return response;
    }
);

export const getMoneyAsync = createAsyncThunk(
    'userSlice/getMoney',
    async (id:string) => {
        const response = await getMoneyFromDB(id);
        return response;
    }
);


const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    storeUser:(state, action) =>{
        state.userId = action.payload.userId;
        state.userName = action.payload.userName;
        state.mail = action.payload.mail;
        state.credits = action.payload.credits;
        state.isAdmin = action.payload.isAdmin;
    },
    registerUser:(state, action)=>{
        state.userName = action.payload.userName;
        state.mail = action.payload.mail;
        state.credits = 200;
    },
    userLogout:(state)=>{
        state.credits = null;
        state.mail = null;
        state.userId = null;
        state.userName = null;
        state.isAdmin = null;
    },
    userAddPokedollars:(state, action)=>{
        state.credits += action.payload;
    },
  },
  extraReducers:(builder) => {
    builder
        .addCase(saveToDBAsync.fulfilled, (state, action)=>{
            console.log(action.payload);
        })
        .addCase(getMoneyAsync.fulfilled, (state, action)=>{
            console.log(action.payload);
            state.credits = action.payload;
        })
}
});

export const { storeUser, registerUser, userLogout, userAddPokedollars} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer