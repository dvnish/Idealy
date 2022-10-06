//rfce for script
import React, { useEffect, useState } from "react";
import Axios from "axios"
import { useNavigate} from "react-router-dom";



function Register() {
  //register
  const [emailReg, setEmailReg] = useState("");       // left is the variable  right is what u want to set as variable
  const [passwordReg, setPasswordReg] = useState("");
  const [registerStatus, setRegisterStatus] = useState("")

  let navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  //register function
  const register = () => {
    Axios.post('http://localhost:3307/register',{
      email: emailReg,
      password: passwordReg
    }).then((response)=> {
      if (response.data.message){
        //console.log(response);
        setRegisterStatus(response.data.message);
        } else {
        setRegisterStatus(response.data[0].email);
        }
      console.log(registerStatus);
    });
  }
  

  return (
    <div className="registration">
        <h2> welcome to registration page</h2>
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
        <button onClick={() => {  //regsiter and then navigate to login page to login
          register();
          navigate("/login");
        }}> Register </button>
        {registerStatus}
      </div>
    

  )
  
  
}

export default Register;