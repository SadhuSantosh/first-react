import React from 'react';
import { useParams } from "react-router-dom";
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  


function EditMovie() {
    const [open, setOpen] = React.useState(false);
    const {id} = useParams();
    const history=useHistory();
    const [movieName, setName] = useState("");
    const [movieImage, setMovieImage] = useState("");
    const [movieDescription, setMovieDescription] = useState("");
    const [movieTrailer, setTrailer] = useState("");
    async function getMovie(){
       await fetch("https://6120e98a24d11c001762ee33.mockapi.io/movies/"+id)
        .then(res => res.json())
        .then(movie => {
          setName(movie.name);
          setMovieImage(movie.pic);
          setMovieDescription(movie.description);
          setTrailer(movie.trailer);
        })
      
      }
        useEffect(() => {
         getMovie();
         
        }, []);
       
  const newData = {
    name: movieName,
    pic: movieImage,
    description: movieDescription,
    trailer: movieTrailer,
  };

 
  const editMovie = async () => {
    await fetch("https://6120e98a24d11c001762ee33.mockapi.io/movies/"+id,
      {
        method: "PUT",
        body: JSON.stringify(newData),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(res=> {
          setOpen(true);
          setTimeout(()=> history.push("/movies"),3000);
        });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <div className="addMovie">
      <TextField
        variant="outlined"
        label="Movie Name"
        value={movieName}
        onChange={(event) => { setName(event.target.value); }}
      />
      <TextField
        variant="outlined"
        label="Image URL"
        value={movieImage}
        onChange={(event) => { setMovieImage(event.target.value); }}
      />
      <TextField
        variant="outlined"
        label="Storyline"
        value={movieDescription}
        onChange={(event) => { setMovieDescription(event.target.value); }}
      />
      <TextField
        variant="outlined"
        label="Trailer URL"
        value={movieTrailer}
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
        varient="contained" onClick={editMovie}>EDIT MOVIE {movieName}</Button>
        <Snackbar open={open} autoHideDuration={3500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {movieName} movie has edited successfully !!
        </Alert>
      </Snackbar>
    </div>

  );

}



export default EditMovie
