import { useState, useEffect } from 'react';
import { Likes } from "./Likes";
import Description from "./Description";


export function Movie() {
  const [movies, setMovies] = useState([]);

async function getMovies(){
  fetch("https://6120e98a24d11c001762ee33.mockapi.io/movies")
  .then(res => res.json())
  .then(mvs => {
    setMovies(mvs);
  })

}
  useEffect(() => {
   getMovies();
  }, []);
 
 
  return (
    <div className="App" >
      {
        movies.map((movie, index) => (
  
          <div className="Movie" key={index}>
            <img className="pic" src={movie.pic} alt={movie.name} />
            <div className="Likes">
            <Likes  movieID={movie.id} getMovies={getMovies} name={movie.name} />
            
             </div>
            <Description description={movie.description} name={movie.name} id={movie.id}/>

          </div>
        ))}
    </div>
  );
}
