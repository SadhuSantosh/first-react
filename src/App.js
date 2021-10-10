import "./App.css";
import { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

var data =[

{
  movieName:"The Shawshank Redemption",
  poster:"https://images-na.ssl-images-amazon.com/images/I/91AlFxiq2cL._RI_.jpg",
  storyline:"Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.—J-S-Golden"
},
{
  movieName:"Man Of Steel",
  poster:"https://images-na.ssl-images-amazon.com/images/I/917UIG5vV-L._RI_.jpg",
  storyline:"Clark learns about the source of his abilities and his real home when he enters a Kryptonian ship in the Artic. However, an old enemy follows him to Earth in search of a codex and brings destruction."
},
{
  movieName:"Justice League",
  poster:"https://images-na.ssl-images-amazon.com/images/I/91JNWWQKGgL._RI_.jpg",
  storyline:"Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy."
},
{
  movieName:"Shershaah",
  poster:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2b0f4d44fe146fd28a92fb1750e9020fa9b7567452b99b4d9139a914345ac699._RI_V_TTW_.jpg",
  storyline:"The life of Indian army captain Vikram Batra, awarded with the Param Vir Chakra, India's highest award for valour for his actions during the 1999 Kargil War."
},
{
  movieName:"Master",
  poster:"https://upload.wikimedia.org/wikipedia/en/5/53/Master_2021_poster.jpg",
  storyline:"JD, an alcoholic professor, is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes."
},
{
  movieName:"Soorarai Pottru",
  poster:"https://static.toiimg.com/photo/79178860.cms?imgsize=144218",
  storyline:"Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest."
}

];

const useStyles = makeStyles((theme) => ({
    buttonColor:{
      color: "#f5f5f5",
      backgroundColor : "#f5f5f5"


    }


}));

export default function App() {
  const [movies,setMovies]=useState(data);


  return (
    <div className="main">
       <AddMovie setMovies={setMovies} />
       <div className="App">
      {movies.map((movie,index) => (
        <Movie key={index} movie={movie} index={index} setMovies={setMovies} movies={movies} />
      ))}
       </div>
    </div>
  );
}

function Movie({movie,setMovies, movies}) {
  const classes =useStyles();
  const [flag,setFlag]=useState(false);
  const { movieName, poster, storyline }= movie;
  return (
    <div  className="Movie">
      <img className="poster" src={poster} alt={movieName} />
      <Likes/>
      <h3>{movieName}</h3>
      <div>
      <Button 
      style={{
        color: "#000000",
        backgroundColor: "#f5f5f5",
        marginRight: 10,
        height: 23,
      }}
      className={classes.buttonColor} varient="contained" size="small" onClick={()=>{ setFlag(!flag) }}>show description</Button>
      <Button 
      style={{
        color: "#000000",
        backgroundColor: "#f5f5f5",
        height: 23, 
      }}
      className={classes.buttonColor}
      varient="contained" size="small"
      onClick={()=>{ 
        setMovies(movies.filter((mov)=> movieName !== mov.movieName )) }}
        >
        Delete Movie</Button>
      </div>
      { flag ? <p >{storyline}</p> : "" }
    </div>
  );
}

function Likes(){
  let [likes,setLikes]=useState(0);
  let [dislike,setDislike]=useState(0);
   return(
     <div className="Likes">
       <div className="flexThumb">
     <ThumbUpAltIcon  onClick={()=> { setLikes(likes+1);}} /> {likes}
     </div>
     <div className="flexThumb">
     <ThumbDownIcon onClick={()=> { setDislike(dislike+1); }}/>{dislike}
     </div>
    </div>
   )

}

function AddMovie({setMovies}){
  const classes=useStyles();
   const [movieName,setMovieName]=useState("");
   const [movieImage,setMovieImage]=useState("");
   const [movieDescription,setMovieDescription]=useState("");
   const newData={
    movieName: movieName,
    poster: movieImage,
    storyline: movieDescription,
   }
  const addMovie = ()=>{
      setMovies([...data,newData]);
  }


  return(
    <div className="addMovie">
        <input 
        type="text" 
        name="moviename" 
        id="moviename" 
        placeholder="Enter Movie Name"
        onChange={(event)=>{setMovieName(event.target.value)}}
        />
         <input type="text" name="image" id="image" placeholder="Enter movie poster URL" 
         onChange={(event)=>{setMovieImage(event.target.value)}}
         />
         <input type="text" name="description" id="description" placeholder="Enter movie description"
         onChange={(event)=>{setMovieDescription(event.target.value)}}
         />
        
        <Button 
        style={{
          color: "#000000",
          backgroundColor: "#f5f5f5",
          width: "30%", 
        }}
        className={ `${classes.buttonColor} movieButton`} varient="contained" onClick={addMovie}>ADD MOVIE</Button>
    </div>

  )

}