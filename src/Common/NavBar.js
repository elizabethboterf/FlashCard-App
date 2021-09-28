import React from "react";
import {Link} from "react-router-dom";

function NavBar ({links}){
    const last = links.length-1
    const navLinks=links.map((link, index)=>{
        if(index!==last){
           return(
            <li key={index+1} className="breadcrumb-item">
                <Link to={link.dir}>{index===0 ? (<span className="oi oi-home"></span>) : ("")}{link.label}</Link>
            </li> 
        ); 
        }
         return (
            <li key={index+1} className="breadcrumb-item active" aria-current="page">{link.label}</li>
         );       
    });

    return(
        <div className="container">
            <nav>
                <ol className="breadcrumb">
                      {navLinks}
                </ol>
            </nav>
        </div>
    );
}

export default NavBar;