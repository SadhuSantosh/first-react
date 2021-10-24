import React from 'react';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";

function Description({description,name,id}) {
    const history=useHistory();
    function editMovie(){
        history.push("/movies/"+ id);
    }
    const [flag, setFlag] = useState(false);
    return (
        <>
        <div className="description">
              <h4>{name}</h4>
              <InfoIcon onClick={editMovie}/>
              <IconButton aria-label="Description" onClick={() => { setFlag(!flag);}}>
              {flag ? <KeyboardArrowUpSharpIcon/> : <KeyboardArrowDownSharpIcon/>}
              </IconButton>
        </div>
        {flag ? "" :<p>{description}</p>}
        </>
    )
}

export default Description
