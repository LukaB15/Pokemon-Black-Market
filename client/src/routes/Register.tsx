import axios from 'axios';
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import "./Login.css";

export default function Register() {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVis, setPasswordVis] = useState("password");
  const [confirmPasswordVis, setConfirmPasswordVis] = useState("password");
  const [safePassword, setSafePassword] = useState(false);
  const [samePassword, setSamePassword] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const escapeHtml=(unsafeString:string)=>{
    return unsafeString
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
  }
  const checkPassword = (inputString:string)=>{
    const passW = /^[A-Za-z0-9_]\w{7,30}$/;
    return inputString.match(passW);
  }
  const handleChangeNickname = (e:any) =>{
    setNickName(escapeHtml(e.target.value));
  }
  const handleChangeEmail = (e:any) =>{
    setEmail(escapeHtml(e.target.value));
  }
  const handleChangePassword = (e:any) =>{
    if(checkPassword(e.target.value)){
      setSafePassword(true);
    }else{
      setSafePassword(false);
    }
    setPassword(escapeHtml(e.target.value));
    if(confirmPassword === escapeHtml(e.target.value)){
      setSamePassword(true);
    }else{
      setSamePassword(false);
    }
  }
  const handleChangeConfirmPassword = (e:any) =>{
    setConfirmPassword(escapeHtml(e.target.value));
    if(password === escapeHtml(e.target.value)){
      setSamePassword(true);
    }else{
      setSamePassword(false);
    }
  }
  const togglePassword = () =>{
    if(passwordVis === "password"){
      setPasswordVis("text");
    }else{
      setPasswordVis("password");
    }
  }
  const toggleConfirmPassword = () =>{
    if(confirmPasswordVis === "password"){
      setConfirmPasswordVis("text");
    }else{
      setConfirmPasswordVis("password");
    }
  }

  const handleRegister = async () =>{
    const registerReq = {
      username : nickName,
      password : password,
      email : email
    }
    const response = await axios.post(`http://localhost:3001/api/auth/register`, registerReq);
    if(response.status === 201){
      setLoggedIn(true);
    }
    else{
      console.log(response)
    }
  }

  if (loggedIn) {
    return <Navigate to="/Buy" />;
    
  }
 
  return (
  
    <>
    <section className="h-screen mb-96 mg:mb-0 lg:mb-0 mt-24">
    <div className="px-6 h-full text-gray-800">
      <div
        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
      >
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <h2 className='text-xl text-red-rocket mb-8 title_form'>Register</h2>
          <form>
  
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="Nickname"
                onChange={handleChangeNickname}
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="Email address"
                onChange={handleChangeEmail}
              />
            </div>
  
            <div className="mb-6">
              <input
                type={passwordVis}
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                id="firstPassword"
                placeholder="Password"
                onChange={handleChangePassword}
              />
              
              <div className="form-group form-check">
                <input
                  onChange={togglePassword}
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-red-rocket rounded-sm bg-white checked:bg-red-rocket checked:border-red-rocket focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                />
                <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">
                  Show Password
                </label>
                <p className={password.length>0?"visible":"invisible"}>{safePassword ? "Password is safe" : "Password not safe"}</p>
              </div>
            </div>

            <div className="mb-6">
              <input
                type={confirmPasswordVis}
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                id="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChangeConfirmPassword}
              />
              <div className="form-group form-check">
                <input
                  onChange={toggleConfirmPassword}
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-red-rocket rounded-sm bg-white checked:bg-red-rocket checked:border-red-rocket focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                />
                <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">
                  Show Confirm Password
                </label>
                <p className={confirmPassword.length>0?"visible":"invisible"}>{samePassword?"Same Password":"Not the same password"}</p>
              </div>
            </div>
  
            <div className="text-center lg:text-left mb-20">
              <button
                type="button"
                className="inline-block px-7 py-3 bg-red-rocket text-white font-medium text-sm leading-snug uppercase rounded  hover:bg-white hover:shadow-lg hover:text-red-rocket hover:border hover:border-red-rocket border border-white  transition duration-150 ease-in-out"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div
          className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
        >
          <img
            src="headerHome.png"
            className="w-9/12 ml-auto mr-auto mb-8 lg:ml-40 md:ml-12 transform hover:-translate-y-12 transition ease-in-out duration-1000"
            alt="Sample image"
          />
        </div>
      </div>
    </div>
  </section>
      </>
  )
}
