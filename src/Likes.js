import { useState } from 'react';
import React from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Badge from '@mui/material/Badge';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { useHistory } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export function Likes({movieID,getMovies,name}) {
  const [open, setOpen] = React.useState(false);
  const history=useHistory();
  
  async function deleteMovie(){
   
    await fetch("https://6120e98a24d11c001762ee33.mockapi.io/movies/"+movieID,
                {
                  method: "DELETE"
                } )
                .then(res=> {
                  setOpen(true);
                  setTimeout(() => { getMovies();}, 3000);
                   
                              });

  }
  function editMovie(){
     history.push("/movies/editmovie/"+movieID);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  let [likes, setLikes] = useState(0);
  let [dislike, setDislike] = useState(0);
  return (
    <div className="Likes">
      <div className="flexThumb">
        <Badge badgeContent={likes} color="success">
          <ThumbUpAltIcon onClick={() => { setLikes(likes + 1); }} />
        </Badge>

      </div>
      <div className="flexThumb">
        <Badge badgeContent={dislike} color="error">
          <ThumbDownIcon onClick={() => { setDislike(dislike + 1); }} />
        </Badge>
      </div>
      <DeleteIcon onClick={deleteMovie}/>
      <CreateIcon onClick={editMovie}/>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {name} movie has deleted successfully !!
        </Alert>
      </Snackbar>
    </div>
  );

}
