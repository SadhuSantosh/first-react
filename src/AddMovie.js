import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';


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

export function AddMovie() {

   const history=useHistory();
   const {handleSubmit, handleBlur, handleChange, values, touched, errors}=useFormik({
     initialValues:{
        name:"",
        pic: "",
        description: "",
       trailer: "",
       },
      validationSchema: addMovieValidationSchema,
       onSubmit: (values) => {
               console.log("sending to server", values);
               addMovie(values);
       },
   });
  // const [name, setname] = useState("");
  // const [movieImage, setMovieImage] = useState("");
  // const [movieDescription, setMovieDescription] = useState("");
  // const [trailer, setTrailer] = useState("")

  // const newData = {
  //   name: name,
  //   pic: movieImage,
  //   description: movieDescription,
  //   trailer: trailer,
  // };

  const addMovie = async (data) => {
    await fetch("https://6120e98a24d11c001762ee33.mockapi.io/movies",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(res => history.push("/movies"));
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
      // onChange={(event) => { setname(event.target.value); }}
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
        type="submit"
        varient="contained"
       
      >
        ADD MOVIE
      </Button>
    </form>

  );

}
