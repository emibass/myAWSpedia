import React,{useState} from "react";
import Navbar from "./Navbar";
// import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";

function Burger () {

const [open, setOpen] = useState(false);



function Open(){
    setOpen(prev => !prev);
}

    return (
        <div>
        
        <div className="BurgerIcon" onClick={Open}> 
         <i className="fa fa-bars"></i>
   
        </div>  
        <div className="homeIcon"><Link to= "/"> <i className="fa fa-home"></i></Link></div>
        {open ? ( <Navbar /> ) : null}
      
      
        </div> 
    )
}


export default Burger;