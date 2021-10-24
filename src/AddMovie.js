import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";


export function AddMovie({ setMovies, movies }) {

  const history=useHistory();
  const [name, setname] = useState("");
  const [movieImage, setMovieImage] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [trailer, setTrailer] = useState("")

  const newData = {
    name: name,
    pic: movieImage,
    description: movieDescription,
    trailer: trailer,
  };
  const addMovie = async () => {
    await fetch("https://6120e98a24d11c001762ee33.mockapi.io/movies",
      {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(res=> history.push("/movies"));
  };


  return (
    <div className="addMovie">
      <TextField
        variant="outlined"
        label="Movie Name"
        onChange={(event) => { setname(event.target.value); }}
      />
      <TextField
        variant="outlined"
        label="Image URL"
        onChange={(event) => { setMovieImage(event.target.value); }}
      />
      <TextField
        variant="outlined"
        label="Storyline"
        onChange={(event) => { setMovieDescription(event.target.value); }}
      />
      <TextField
        variant="outlined"
        label="Trailer URL"
        onChange={(event) => { setTrailer(event.target.value); }}
      />
      <Button
        style={{
          backgroundColor: "grey",
          color: "white",
          fontWeight: "bold",
          marginTop: "10px",
          width: "50%",
        }}
        varient="contained" onClick={addMovie}>ADD MOVIE</Button>
    </div>

  );

}
