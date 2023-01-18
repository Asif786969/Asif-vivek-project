import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import axios from "axios"

const Books = () => {

  const [data, setData]= useState([])
    useEffect (()=>{
    {getbooks()}
    },[])
const getbooks =()=>{
  axios.get("http://localhost:3002/books")
  .then((response)=>{
    console.log(response.data)
    setData(response.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}
	return (

    <div className="asif-grid-container">
    {
       data ? data.map((input)=>{
            return (
                <div>
                    <div className="card-asif" >
                        <h5>{input.title}</h5>
                        <p class="card-text">{input.description}</p>
                        <a href="#" class="card-link">Card link</a>
                    </div>
                    
                    
                </div>
                
                

            )
        }):<h2>Error</h2>
    }

    </div>
    
    
  )
  }
  export default Books;