import axios from 'axios';
import React, { useState } from 'react'
import { Link, Navigate, redirect } from 'react-router-dom'
import "./Login.css";

export default function Login() {
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVis, setPasswordVis] = useState("password");
  const [loggedIn, setLoggedIn] = useState(false);

  const escapeHtml=(unsafeString:string)=>{
    return unsafeString
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
  }

  const handleChangeNickname = (e:any) =>{
    setNickName(escapeHtml(e.target.value));
  }

  const handleChangePassword = (e:any) =>{
    setPassword(escapeHtml(e.target.value));
  }
  
  const togglePassword = () =>{
    if(passwordVis === "password"){
      setPasswordVis("text");
    }else{
      setPasswordVis("password");
    }
  }

  const logUserIn = async () =>{
    console.log(nickName);
    console.log(password);
    const response = await axios.post(`http://localhost:3001/api/auth/login`, {
      username : nickName,
      password : password
    });
    console.log(response);
    
    if(response.status === 200){
      //setLoggedIn(true);
    }
  }

  if(loggedIn){
    return <Navigate to="/Buy" />
  }

  return (
    <>
  <section className="h-screen mb-96 mg:mb-0 lg:mb-0 mt-24">
  <div className="px-6 h-full text-gray-800">
    <div
      className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="headerHome.png"
          className="w-9/12 ml-auto mr-auto mb-8 lg:ml-40 md:ml-12 transform hover:-translate-y-12 transition ease-in-out duration-1000"
          alt="Sample image"
        />
      </div>
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
      <h2 className='text-xl text-red-rocket mb-8 title_form'>Login</h2>
        <form>

          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Username"
              onChange={handleChangeNickname}
              value={nickName}
            />
          </div>

          <div className="mb-6">
            <input
              type={passwordVis}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Password"
              onChange={handleChangePassword}
              value={password}
            />
            <input
                  onChange={togglePassword}
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-red-rocket rounded-sm bg-white checked:bg-red-rocket checked:border-red-rocket focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                />
                <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">
                  Show Password
                </label>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-red-rocket rounded-sm bg-white checked:bg-red-rocket checked:border-red-rocket focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-red-rocket">Forgot password?</a>
          </div>

          <div className="text-center lg:text-left mb-20">
            <button
              type="button"
              className="inline-block px-7 py-3 bg-red-rocket text-white font-medium text-sm leading-snug uppercase rounded  hover:bg-white hover:shadow-lg hover:text-red-rocket hover:border hover:border-red-rocket border border-white  transition duration-150 ease-in-out"
              onClick={logUserIn}
            >
              Login
            </button>
            <p className="text-sm font-semibold mt-2 pt-1 mb-0 pb-8">
              Don't have an account?
              <Link  className="text-red-rocket hover:underline focus:text-red-700 transition duration-200 ease-in-out" to={"/Register"}>
              
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
