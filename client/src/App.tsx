import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Counter } from './features/counter/Counter';
import Navbar from './components/header/Navbar';
import { Outlet } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <>
    <Navbar />
    <Outlet />
    {/* <div className="App">
    <a href={`/Helloworld`}>Lien</a>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div> */}
    {/* <Counter /> */}
    </>
  );
}

export default App;
