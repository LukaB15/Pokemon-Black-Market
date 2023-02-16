import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
}

export default App;
