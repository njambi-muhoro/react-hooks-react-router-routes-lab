import React from "react";
import { actors } from "../data";

function Actors() {
  return (<div>
    <h1>Actors Page</h1>
    <div>
        {
          actors.map((actor, index)=>(
            <ul key={index}>
              {actor.name}
              <li>{actor.movies}</li>
            </ul>
            
          ))
        }
     </div>


  </div>);
}

export default Actors;
