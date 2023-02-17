import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/frontUser/userSlice';

export interface userUpdated{
    password:string,
    username:string,
    email:string
}

export default function ModifyProfile() {

    const user = useAppSelector(selectUser);
    const [nickName, setNickName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordVis, setPasswordVis] = useState("password");
    const [confirmPasswordVis, setConfirmPasswordVis] = useState("password");
    const [samePassword, setSamePassword] = useState(false);
    const [safePassword, setSafePassword] = useState(false);

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
    
    const updateUser = async () =>{
        const updatedUser:userUpdated ={
            password: password,
            username: nickName,
            email: email
        }

        console.log(updatedUser);
        
        const request = axios.put(`http://localhost:3001/api/user/${user.userId}`, updatedUser, {
            withCredentials: true,
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error)); 
    }
    
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[]);
  return (
    <>
    
    <div className='h-screen bg-bck flex flex-col items-center justify-center'>
    <div className="flex flex-col bg-white rounded-lg shadow-xl p-8 h-96 mt-24">
                    <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
                    <ul className="mt-2 text-gray-700">
                        <li className="flex border-y py-2">
                            <span className="font-bold w-24">Name:</span>
                            <input className="text-gray-700 border" onChange={handleChangeNickname} placeholder={user.userName ? user.userName : "Please login"}/>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">E-mail:</span>
                            <input className="text-gray-700 border" onChange={handleChangeEmail} placeholder={user.mail ? user.mail : "Please login"}/>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Password</span>
                            <input type={passwordVis} className="text-gray-700 border" onChange={handleChangePassword} placeholder='*****'/>
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
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Confirm Password</span>
                            <input type={confirmPasswordVis} className="text-gray-700 border" onChange={handleChangeConfirmPassword} placeholder='*****'/>
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
                        </li>
                    <div className='flex flex-row justify-between'>
                    
                    <button disabled={!user.userId || nickName === "" || email === "" || password === ""} onClick={updateUser} className="flex items-center hover:bg-red-rocket bg-white hover:text-white text-red-rocket border hover:border-transparent border-red-rocket px-4 py-2 rounded text-sm space-x-2 transition duration-100 mt-8">                    
                        <span>Save Modifications</span>
                    </button>
                
                    
                    </div>
                    </ul>
                </div>
      </div>
    
    </>
  )
}
