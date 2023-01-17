import React from "react";
import { movies } from "../data";

function Movies() {
  return (<div>
      <h1>Movies Page</h1>
      <div>
        {
          movies.map((movie, index)=>(
          <div key={index}>
            <h2 >"Name:" {movie.title}</h2>
            <h4 >"Time:" {movie.time}</h4>
            <ul >
              Genres
            <li>{movie.genres}</li>
            </ul>
          </ div>
          ))
        }
     </div>

  </div>)
}

export default Movies;
