import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import singleReducer from '../features/singlePokemon/singlePkmnSlice';
import sellPkmnReducer from '../features/sellPokemon/sellPkmnSlice';
import buyListReducer from '../features/buyList/buyListSlice';
import cartReducer from "../features/Cart/cartSlice"
import userReducer  from '../features/frontUser/userSlice';
import storage from 'redux-persist/lib/storage';
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

const persistConfig = {
  key: 'root',
  storage,
}

// combine all reducers
const reducers = combineReducers({
  singlePkmn: persistReducer(persistConfig, singleReducer),
  user: persistReducer(persistConfig, userReducer),
  sellPkmn: sellPkmnReducer,
  buyList: buyListReducer,
  cartList :  cartReducer,
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




