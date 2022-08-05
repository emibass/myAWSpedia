import React,{useState} from "react";
import Navbar from "./Navbar";
import CloseIcon from '@mui/icons-material/Close';

function Burger () {

const [open, setOpen] = useState(false);

function Open(){
    setOpen(prev => !prev);
}


    return (
        <div>
        <div className="BurgerIcon" onClick={Open}>
        {/* <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div> */}
        {open ? ( <CloseIcon />) : <i className="fa fa-bars"></i> }
        
        </div>
      
        <div>
        {open ? ( <Navbar /> ) : null}
        </div>
        </div>
    )
}


export default Burger;