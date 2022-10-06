import React, { useEffect, useState } from "react";
import Axios from "axios"
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Dropdown, Option} from "./Dropdown";
import { v4 as uuidv4 } from 'uuid';











function AddProduct() {


const initList= [];
const [productType,setProdType] = useState("");
//const [prodList,setProdList] = useState(initList);

//product details
const [prodName,setProdName] = useState("");
const [brandName,setBrandName] = useState("");
const [prodOwner,setProdOwner] = useState("");
const [prodDesc,setProdDesc] = useState("");







const handleTypeChange = (e) => {
  setProdType(e.target.value);
  console.log('this is ',productType);
}


const product = () => {

    Axios.post('http://localhost:3307/addproduct',{
      productName: prodName,
      description: prodDesc,
      ownerEmail: prodOwner,
      brand: brandName
    }).then((response)=> {
      console.log(response);
    });
}



  Axios.get("http://localhost:3307/addproduct").then((response)=>{
  //console.log(response);
  if (response == true) {
      console.log(response);

  }
  }); 



  






  return (
    <div className='AddProductType'>
        
    <h1> add product types</h1>
        
  
        


        
    
    <h1> add product</h1>
    <label>Product name</label>
    <input 
        type="text" 
        placeholder="enter name"
        onChange={(e) => {
          setProdName(e.target.value);
        }}/>

    <label>Product Brand</label>
    <input 
        type="text" 
        placeholder="enter brand"
        onChange={(e) => {
          setBrandName(e.target.value);
        }}/>

    <label>Product owner</label>
    <input 
        type="text" 
        placeholder="enter email"
        onChange={(e) => {
          setProdOwner(e.target.value);
        }}/>
    <label>Product description</label>
    <input 
        type="text" 
        placeholder="enter description"
        onChange={(e) => {
          setProdDesc(e.target.value);
        }}/>
    <button onClick={product}> Add product </button>
    

        

      <label>select product type</label>
      

    </div>
    

    

  )
}

export default AddProduct