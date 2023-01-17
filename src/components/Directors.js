import React from "react";
import { directors } from "../data";

function Directors() {
  return (<div>
    <h1>Directors Page</h1>
     <div>
        {
          directors.map((director, index)=>(
            <ul key={index}>
              {director.name}
              <li>{director.movies}</li>
            </ul>
            
          ))
        }
     </div>
    
    </div>)
}

export default Directors;
