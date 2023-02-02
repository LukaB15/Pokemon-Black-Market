import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css";

export default function Register() {
  const [nickName, setNickName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passwordVis, setPasswordVis] = useState("password");
  const [confirmPasswordVis, setConfirmPasswordVis] = useState("password");

  const handleChangeNickname = (e:any) =>{
    setNickName(e.target.value);
  }
  const handleChangeEmail = (e:any) =>{
    setEmail(e.target.value);
  }
  const handleChangePassword = (e:any) =>{
    setPassword(e.target.value);
  }
  const handleChangeConfirmPassword = (e:any) =>{
    setConfirmPassword(e.target.value);
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

  const handleRegister = () =>{
    console.log("nickName : "+nickName);
    console.log("email : "+email);
    console.log("password : "+password);
    console.log("confirmPassword : "+confirmPassword);
    
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
              <input type="checkbox" name='passwordToggle' onChange={togglePassword} />
              <label htmlFor="passwordToggle">  Show Password</label>
            </div>

            <div className="mb-6">
              <input
                type={confirmPasswordVis}
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                id="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChangeConfirmPassword}
              />
              <input type="checkbox" name='passwordToggle' onChange={toggleConfirmPassword} />
              <label htmlFor="passwordToggle">  Show Confirm Password</label>
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
