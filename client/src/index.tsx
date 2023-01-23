import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
// import { createStore } from '@reduxjs/toolkit';
// import allReducers from "./reducers/index";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page'; 
import Buy from "./routes/Buy";
import { persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import Sell from './routes/Sell';
import Login from './routes/Login';
import Register from './routes/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Buy",
        element: <Buy />,
      },
      {
        path: "/Sell",
        element: <Sell />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
]);
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
