import React from "react";
import { useState} from "react";


export default function Filter({handleChange}) {
   
   
  // handle change event of search input

 
  return (
    <div>
         <input  
             type="search"
             placeholder="Filter by Title/Rate"
             name="Title/Rate"
             onChange={e=>handleChange(e.target.value)}>
        </input>        
      </div>
   
  );
}