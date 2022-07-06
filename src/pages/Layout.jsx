import React from "react";
import { Outlet, Link} from "react-router-dom";
import Footer from "./Footer"

function Layout(){
    return (
        <>

        <nav>
       <div className ="navItem"> <Link to= "/">Home</Link></div>
       <div className ="navItem"><Link to = "/Analytics">Analytics</Link></div> 
       <div className ="navItem"><Link to = "/Compute">Compute</Link></div> 
       <div className ="navItem"><Link to = "/Database">Database</Link></div> 
       <div className ="navItem"><Link to = "/Developer-Tools">Developer-Tools</Link></div> 
       <div className ="navItem"><Link to = "/Machine-Learning">Machine-Learning</Link></div> 
       <div className ="navItem"><Link to = "/Management-Governance">Management-Governance</Link></div> 
       <div className ="navItem"><Link to = "/Networking-Content-Delivery">Networking-Content-Delivery</Link></div> 
       <div className ="navItem"><Link to = "/Security-Identity-Compliance">Security-Identity-Compliance</Link></div> 
       
        </nav>
    
          <Outlet />
          <Footer />
        </>
   
      )
    }


export default Layout;