import React, { useEffect, useState } from "react";
import Axios from "axios"
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import AddCompany from "./Pages/AddCompany";
import Register from "./Pages/Register";

// npm start index.js to start  clientside
// node index.js to start server side
//control C to kill 

function App() {

  

  //register
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  //login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //login status
  const [loginStatus, setLoginStatus] = useState("")
  Axios.defaults.withCredentials = true;


  //register function
  const register = () => {
    Axios.post('http://localhost:3307/register',{
      email: emailReg,
      password: passwordReg
    }).then((response)=> {
      console.log(response);
    });
  }
  //login function
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

    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/company" element={<AddCompany/>} />
          <Route path="/register" element={<Register/>} />

        </Routes>
    </Router>

      <nav>
        <ul>
          <li><a href="/register">register</a></li>
          <li><a href="/addCompany">AddCompany</a></li>
        </ul>
      </nav>
      
      <div className="registration">
        <h1>Registration</h1>
        <label>Email</label>
        <input 
          type="text" 
          onChange={(e) => {
            setEmailReg(e.target.value)}} 
          placeholder='enter email'/>
        <label>Password</label>
        <input 
          type="password" 
          placeholder="enter password"
          onChange={(e) => {
            setPasswordReg(e.target.value)}}/>
        <button onClick={register}> Register </button>
      </div>
    
      <div className="login">
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
      </div>
      <h1>{loginStatus}</h1>
    </div>   
  );
} 
  


export default App;
