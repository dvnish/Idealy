import React, { useEffect, useState } from "react";
import Axios from "axios"
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function AddCompany() {

  const [company, setCompany] = useState("");
  const [admin, setAdmin] = useState("");
  const [domain, setDomain] = useState("");
  const [industry, setIndustry] = useState("");
  Axios.defaults.withCredentials = true;


  const addCompany = () => {
    Axios.post('http://localhost:3307/addcompany',{
    companyName: company,
    admin: admin,
    domain: domain,
    industry: industry
    }).then((response)=> {
        console.log(response);
    });
    };


  return (

      <div className="addCompany">
        <h2> welcome to add a company page page</h2>
        <h1>Add a Company</h1>
        <label>Company Name</label>
        <input 
          type="text" 
          onChange={(e) => {
            setCompany(e.target.value)}} 
          placeholder='enter company name'/>

        <label>Industry</label>
        <input 
          type="text" 
          placeholder="enter Industry"
          onChange={(e) => {
            setIndustry(e.target.value)}}/>

        <label>Domain</label>
        <input 
          type="text" 
          placeholder="enter domain"
          onChange={(e) => {
            setDomain(e.target.value)}}/>
        
        <label>Admin</label>
        <input 
          type="text" 
          placeholder="enter admin name"
          onChange={(e) => {
            setAdmin(e.target.value)}}/> 

      <button onClick={addCompany}> Add company </button>
      </div>
  )
}

export default AddCompany;