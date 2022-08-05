import React, {useState} from "react";
import {Link} from "react-router-dom";


function Navbar() {

const [clicked, setClosed] = useState(false);

function Close(){
    setClosed(true);
}
    return (
        
        <div>
        { clicked ? null :
   <div className="topnav"> 
       <div className ="navItem" onClick={Close}><Link to= "/">Home</Link></div>
       <div className ="navItem" onClick={Close}><Link to = "/Analytics">Analytics</Link></div> 
       <div className ="navItem" onClick={Close}><Link to = "/Compute">Compute</Link></div> 
       <div className ="navItem" onClick={Close}><Link to = "/Database">Database</Link></div> 
       <div className ="navItem" onClick={Close}><Link to = "/Developer-Tools">Developer-Tools</Link></div> 
       <div className ="navItem" onClick={Close}><Link to = "/Machine-Learning">Machine-Learning</Link></div> 
       <div className ="navItem" onClick={Close}><Link to = "/Management-Governance">Management-Governance</Link></div> 
       <div className ="navItem" onClick={Close}><Link to = "/Networking-Content-Delivery">Networking-Content-Delivery</Link></div> 
       <div className ="navItem" onClick={Close}><Link to = "/Security-Identity-Compliance">Security-Identity-Compliance</Link></div> 
       <div className ="navItem" onClick={Close}><Link to = "/Cloud-Financial-Management">Cloud-Financial-Management</Link></div>
       </div> }
       </div>
    )
};

export default Navbar;