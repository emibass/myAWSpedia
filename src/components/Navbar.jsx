import React from "react";
import {Link} from "react-router-dom";


function Navbar() {
    return (
    <div className="topnav">
       <div className ="navItem"><Link to= "/">Home</Link></div>
       <div className ="navItem"><Link to = "/Analytics">Analytics</Link></div> 
       <div className ="navItem"><Link to = "/Compute">Compute</Link></div> 
       <div className ="navItem"><Link to = "/Database">Database</Link></div> 
       <div className ="navItem"><Link to = "/Developer-Tools">Developer-Tools</Link></div> 
       <div className ="navItem"><Link to = "/Machine-Learning">Machine-Learning</Link></div> 
       <div className ="navItem"><Link to = "/Management-Governance">Management-Governance</Link></div> 
       <div className ="navItem"><Link to = "/Networking-Content-Delivery">Networking-Content-Delivery</Link></div> 
       <div className ="navItem"><Link to = "/Security-Identity-Compliance">Security-Identity-Compliance</Link></div> 
       <div className ="navItem"><Link to = "/Cloud-Financial-Management">Cloud-Financial-Management</Link></div>
       </div>
    )
};

export default Navbar;