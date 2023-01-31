import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    {/* <div className='flex flex-col justify-between h-screen '> */}
    <Navbar />
    <Outlet />
    <Footer />
    {/* </div> */}
    </>
  );
}

export default App;
