import React, { useEffect, useState } from "react";
import Axios from "axios"
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Dropdown, Option} from "./Dropdown";
import { v4 as uuidv4 } from 'uuid';




function ProductConfig() {

const initialList= [];

const [prodList,setProdList] = useState(initialList);
const [initList,setInitList] = useState(initialList);
const [oppList,setOppList] = useState(initialList);
const [metricList,setMetricList] = useState(initialList);

//product details

const [prodType,setProdType] = useState("");
const [prodInitiatives,setProdInitiatives] = useState("");
const [prodOpportunities,setProdOpportunities] = useState("");
const [prodMetrics,setProdMetrics] = useState("");
Axios.defaults.withCredentials = true;



//const [prod, setprod] = useState("");

//product types
const handleProdChange = (e) => {
    setProdType(e.target.value);
}
const handleProdOnclick = (e) => {
    if (prodType){
        setProdList(prodList.concat(prodType));
    }
        setProdType("");

    console.log(prodList);
    Axios.put('http://localhost:3307/productconfig',{
      productType: prodType
    }).then((response)=> {
      console.log(response);
    });
}

const handleTypeChange = (e) => {
    setProdType(e.target.value);
    console.log('this is ',prodType);
}
//product initiatives
const handleInitChange = (e) => {
    setProdInitiatives(e.target.value);
}
const handleInitOnclick =(e)=> {
    if (prodInitiatives){
        setInitList(initList.concat(prodInitiatives));
    }

    Axios.put('http://localhost:3307/productconfig',{
      productInitiative: prodInitiatives
    }).then((response)=> {
      console.log(response);
    });
}
//product opportunities 
const handleOppChange = (e) => {
    setProdOpportunities(e.target.value);
}
const handleOppOnclick =(e)=> {
    if (prodOpportunities){
        setOppList(oppList.concat(prodOpportunities));
    }
    Axios.put('http://localhost:3307/productconfig',{
      productOpportunity: prodOpportunities
    }).then((response)=> {
      console.log(response);
    });
}


//product metrics
const handleMetricChange = (e) => {
    setProdMetrics(e.target.value);
}
const handleMetricOnclick =(e)=> {
    if (prodMetrics){
        setMetricList(metricList.concat(prodMetrics));
    }
    Axios.put('http://localhost:3307/productconfig',{
      productMetric: prodMetrics
    }).then((response)=> {
      console.log(response);
    });
}




  return (
    <div className="configs">
    
    <div className="setProdTypeConfig">
        {prodType}
    <p> Add product types</p>
        <input 
        type="text"
        placeholder="enter product types"
        onChange={handleProdChange}/>
        <button class="x1" onClick={handleProdOnclick}> Add </button>
      <ul>
        {prodList.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>


    <div className="setProdInitConfig">
    <p> Add product initiatives</p>
        <input 
        type="text"
        placeholder="enter product initiatives"
        onChange={handleInitChange}/>
        <button class="x1" onClick={handleInitOnclick}> Add </button>
      <ul>
        {initList.map(item2 => (
          <li key={item2}>{item2}</li>
        ))}
      </ul>    
    </div>
            <br/>
    <div className="setProdOppConfig">
    <p> Add product opportunities</p>
        <input 
        type="text"
        placeholder="enter product opportunities"
        onChange={handleOppChange}/>
        <button class="x1" onClick={handleOppOnclick}> Add </button>
      <ul>
        {oppList.map(item3 => (
          <li key={item3}>{item3}</li>
        ))}
      </ul>
    </div>

    <div className="setProdMetricsConfig">
    <p> Add product Metrics</p>
        <input 
        type="text"
        placeholder="enter product metrics"
        onChange={handleMetricChange}/>
        <button class="x1" onClick={handleMetricOnclick}> Add </button>
      <ul>
        {metricList.map(item4 => (
          <li key={item4}>{item4}</li>
        ))}
      </ul>
    </div>

    
    </div>
  )
}

export default ProductConfig;
