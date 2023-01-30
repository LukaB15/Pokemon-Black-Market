import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/header/Navbar';
import { Outlet } from "react-router-dom";
import Footer from './components/footer/Footer';

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:3001/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
}

export default App;
