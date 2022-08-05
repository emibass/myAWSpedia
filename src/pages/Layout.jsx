import React from "react";
import { Outlet} from "react-router-dom";
import Footer from "./Footer"
import Burger from "../components/Burger";

function Layout(){


    return (
        <>
        <div>
          <Burger/>
        </div>
          <Outlet />
          <Footer />
        </>
   
      )
    }


export default Layout;