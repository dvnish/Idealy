import React, { useEffect, useState } from "react";
import Axios from "axios"
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import AddCompany from "./Pages/AddCompany";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddProduct from "./Pages/AddProduct";
import ProductConfig from "./Pages/ProductConfig";

// npm start index.js to start  clientside
// node index.js to start server side
//control C to kill 
//rfce for new pages

function App() {


 





  return (

      
      <Router>
        <div className="navbar">
        <h1>Idealy</h1>
        <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/addcompany">Add a company</a></li>
          <li><a href="/addproduct">Add a product</a></li>
          <li><a href= "/productconfig">add product config</a></li>

        </ul>
      </nav>
      </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addcompany" element={<AddCompany/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/productconfig" element={<ProductConfig/>}/>


        </Routes>
    </Router>

    
      
      
  );
} 
  


export default App;
