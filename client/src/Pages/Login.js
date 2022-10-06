import React, { useEffect, useState } from "react";
import Axios from "axios"
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


 


function Login() {

    //login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //login status
    const [loginStatus, setLoginStatus] = useState("")
    Axios.defaults.withCredentials = true;


    const login = () => {
        Axios.post('http://localhost:3307/login',{
        email: email,
        password: password
        }).then((response)=> {
        if (response.data.message){
            //console.log(response);
            setLoginStatus(response.data.message);
            } else {
            setLoginStatus(response.data[0].email);
            
            }
        });
        };

    useEffect(()=>{
    Axios.get("http://localhost:3307/login").then((response)=>{
    //console.log(response);
    if (response.data.loggedIn == true) {
        setLoginStatus(response.data.email[0].email);
    }
    //console.log(response.data.email[0].email);
    });
    },[]);  


  return (
    <div className="login">
        <h2> welcome to login page</h2>

        <h1> Login</h1>
        <input 
        type="text" 
        placeholder="enter email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        />
        
        <input 
        type="password" 
        placeholder="enter password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}/>
        <button onClick={login}> Login </button>
        <h1>{loginStatus}</h1>
      </div>

  )
}

export default Login;