import "./App.css";
import React from 'react';
import { Movie } from "./Movie";
import { useState, useEffect } from 'react';
import { AddMovie } from "./AddMovie";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieInfo from "./MovieInfo";
import EditMovie from "./EditMovie";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AddIcon from '@mui/icons-material/Add';

// var data =[

// {
//   id: 100,
//   name:"The Shawshank Redemption",
//   pic:"https://images-na.ssl-images-amazon.com/images/I/91AlFxiq2cL._RI_.jpg",
//   description:"Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.—J-S-Golden",
//   trailer:"https://www.youtube.com/embed/6hB3S9bIaco" 
// },
// {
//   id: 101,
//   name:"Man Of Steel",
//   pic:"https://images-na.ssl-images-amazon.com/images/I/917UIG5vV-L._RI_.jpg",
//   description:"Clark learns about the source of his abilities and his real home when he enters a Kryptonian ship in the Artic. However, an old enemy follows him to Earth in search of a codex and brings destruction.",
//   trailer:"https://www.youtube.com/embed/T6DJcgm3wNY" 
// },
// {
//   id: 102,
//   name:"Justice League",
//   pic:"https://images-na.ssl-images-amazon.com/images/I/91JNWWQKGgL._RI_.jpg",
//   description:"Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy.",
//   trailer:"https://www.youtube.com/embed/3cxixDgHUYw" 
// },
// {
//   id: 103,
//   name:"Shershaah",
//   pic:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2b0f4d44fe146fd28a92fb1750e9020fa9b7567452b99b4d9139a914345ac699._RI_V_TTW_.jpg",
//   description:"The life of Indian army captain Vikram Batra, awarded with the Param Vir Chakra, India's highest award for valour for his actions during the 1999 Kargil War.",
//   trailer:"https://www.youtube.com/embed/6hB3S9bIaco" 
// },
// {
//   id: 104,
//   name:"Master",
//   pic:"https://m.media-amazon.com/images/I/71yR1ufXalL._SL1200_.jpg",
//   description:"JD, an alcoholic professor, is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
//   trailer:"https://www.youtube.com/embed/1_iUFT3nWHk" 
// },
// {
//   id: 105,
//   name:"Soorarai Pottru",
//   pic:"https://static.toiimg.com/photo/79178860.cms?imgsize=144218",
//   description:"Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.",
//   trailer:"https://www.youtube.com/embed/JQSCYoLi-AI" 
// }

// ];


export default function App() {
  const [darkMode,setDarkMode]=useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light' ,
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ minHeight:"100vh" }}>
      <Router>
    <div className="main">
      <AppBar position="static" >
        <Toolbar className={`toolbar`} variant="dense" >
        <Link to="/"><HomeIcon/> Home</Link>            
        <Link to="/movies"><LocalMoviesIcon/> Movies</Link> 
        <Link to="/addMovie"> <AddIcon/>Add-Movie</Link>
        <Button 
        startIcon={darkMode ? <Brightness7Icon/> : <Brightness4Icon/> }
        color="inherit" style={{ marginLeft:"auto" }} onClick={()=>{setDarkMode(!darkMode);}} > 
        {darkMode ? " LIGHT MODE" : "DARK MODE"}
        </Button>
        </Toolbar>
      </AppBar>
      <Switch>
          <Route exact path="/">
            <h3 style={{ textAlign:"center"}}>Welcome To Movie Site !! </h3>
          </Route>
          <Route exact path="/movies">
             <Movie/>
          </Route>
          <Route exact path="/addMovie">
             <AddMovie />
          </Route>
          <Route exact path="/movies/:id">
             <MovieInfo />
          </Route>
          <Route exact path="/movies/editmovie/:id">
             <EditMovie />
          </Route>
        </Switch>       
    </div>
    </Router>
    </Paper>
    </ThemeProvider>
  );
}

