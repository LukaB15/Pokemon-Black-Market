import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import singleReducer from '../features/singlePokemon/singlePkmnSlice';
import sellPkmnReducer from '../features/sellPokemon/sellPkmnSlice';
import buyListReducer from '../features/buyList/buyListSlice';
import cartReducer from "../features/Cart/cartSlice"
import userReducer  from '../features/frontUser/userSlice';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const singlePkmnPersistConfig = {
  key: 'singlePkmn',
  storage: storage,
}

const userPersistConfig ={
  key: 'user',
  storage: storage,
}

const cartPersistConfig={
  key:'cartList',
  storage: storage,
}

const buyListPersistConfig={
  key:'buyList',
  storage: storage,
}

// combine all reducers
const reducers = combineReducers({
  singlePkmn: persistReducer(singlePkmnPersistConfig, singleReducer),
  user: persistReducer(userPersistConfig, userReducer),
  sellPkmn: sellPkmnReducer,
  buyList: persistReducer(buyListPersistConfig, buyListReducer) ,
  cartList : persistReducer(cartPersistConfig,cartReducer),
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;




