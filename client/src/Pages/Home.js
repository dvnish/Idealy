
import React, { useEffect, useState } from "react";
import Axios from "axios"
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AddCompany from "./AddCompany";
import Register from "./Register";


function Home() {
  return (
    <div className="homepage">
    <h2>Welcome to Idealy</h2> 
    </div>
    
  )
}

export default Home;