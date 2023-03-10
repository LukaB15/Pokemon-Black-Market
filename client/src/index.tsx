import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
// import { createStore } from '@reduxjs/toolkit';
// import allReducers from "./reducers/index";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Buy from "./routes/Buy";
import { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import Sell from "./routes/Sell";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Checkout from "./routes/Checkout";
import SinglePokemon from "./routes/SinglePokemon";
import Profile from "./routes/Profile";
import Home from "./routes/Home";
import Mysale from "./routes/MySale";
import AddPokedollar from "./routes/AddPokedollar";
import ModifyProfile from "./routes/ModifyProfile";
import axios from "axios";


const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
      {
        path: "/Checkout",
        element: <Checkout />,
      },
      {
        path: "/SinglePokemon/:name/:level/:price",
        element: <SinglePokemon />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/MySale",
        element: <Mysale />,
      },
      {
        path: "/AddPokedollar",
        element: <AddPokedollar />,
      },
      {
        path: "/ModifyProfile",
        element: <ModifyProfile />,
      },
    ],
  },
]);
const container = document.getElementById("root")!;
const root = createRoot(container);



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
