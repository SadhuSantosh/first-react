import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./App.css";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function MovieInfo() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const history = useHistory();
    useEffect(() => {
        async function getMovie() {
             await fetch("https://6120e98a24d11c001762ee33.mockapi.io/movies/" + id)
                .then(res => res.json())
                .then(res => setMovie(res))
                .catch(err => console.log(err));

        }
        getMovie();
    }, [id]);

    return (
        <div className="movieInfo">
            <iframe width="100%" height="350" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>{movie.name}</h3>
            <p>{movie.description}</p>
            <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />} 
              onClick={()=>{ history.goBack()}} >
                Back
            </Button>
        </div>
    )
}

export default MovieInfo
