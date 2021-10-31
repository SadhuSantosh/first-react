import React from 'react';
import { useParams } from "react-router-dom";
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  

  const addMovieValidationSchema=yup.object({
    name: yup
    .string()
    .required("Movie name is required !!"),
    pic: yup
    .string()
    .required("Movie poster URL is required"),
    description: yup
    .string()
    .required(" Movie Description is required !!")
    .min(10,"Description is too short"),
    trailer: yup
    .string()
    .required("Movie trailer URL is required"),
})

function EditMovie() {
    const [open, setOpen] = React.useState(false);
    const {id} = useParams();
    const history=useHistory();
    const [movieName, setName] = useState("");
    const [movieImage, setMovieImage] = useState("");
    const [movieDescription, setMovieDescription] = useState("");
    const [movieTrailer, setTrailer] = useState("");

    const {handleSubmit, handleBlur, handleChange, values, touched, errors}=useFormik({
      initialValues:{
         name:movieName,
         pic:movieImage ,
         description: movieDescription,
        trailer:movieTrailer,
        },
       validationSchema: addMovieValidationSchema,
        onSubmit: (values) => {
                console.log("sending to server", values);
                editMovie(values);
        },
    });
    
        useEffect(() => {
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
         getMovie();
        }, [id]);
       
  // const newData = {
  //   name: movieName,
  //   pic: movieImage,
  //   description: movieDescription,
  //   trailer: movieTrailer,
  // };

 
  const editMovie = async (data) => {
    await fetch("https://6120e98a24d11c001762ee33.mockapi.io/movies/"+id,
      {
        method: "PUT",
        body: JSON.stringify(data),
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
    <form onSubmit={handleSubmit} className="addMovie">
      <TextField
        id="name"
        name="name"
        variant="outlined"
        label="Movie Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name && touched.name}
        helperText={errors.name && touched.name && errors.name }
        // onChange={(event) => { setName(event.target.value); }}
      />
      <TextField
        id="pic"
        name="pic"
        variant="outlined"
        label="Image URL"
        value={values.pic}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.pic && touched.pic}
        helperText={errors.pic && touched.pic && errors.pic }
        // onChange={(event) => { setMovieImage(event.target.value); }}
      />
      <TextField
       id="description"
       name="description"
       variant="outlined"
       label="Storyline"
       value={values.description}
       onChange={handleChange}
       onBlur={handleBlur}
       error={errors.description && touched.description}
       helperText={errors.description && touched.description && errors.description }
        // onChange={(event) => { setMovieDescription(event.target.value); }}
      />
      <TextField
        id="trailer"
        name="trailer"
        variant="outlined"
        label="Trailer URL"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.trailer && touched.trailer}
        helperText={errors.trailer && touched.trailer && errors.trailer }
        // onChange={(event) => { setTrailer(event.target.value); }}
      />
      <Button
        style={{
          backgroundColor: "grey",
          color: "white",
          fontWeight: "bold",
          marginTop: "10px",
          width: "50%",
        }}
        varient="contained"  type="submit">EDIT MOVIE {movieName}</Button>
        <Snackbar open={open} autoHideDuration={3500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {movieName} movie has edited successfully !!
        </Alert>
      </Snackbar>
      </form>

  );

}



export default EditMovie
