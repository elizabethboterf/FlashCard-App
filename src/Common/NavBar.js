import React from "react";
import {Link} from "react-router-dom";

function NavBar ({links}){

    const navLinks=links.map((link, index)=>{
        return(
            <li key={index+1} className="breadcrumb-item">
                <Link to={link.dir}>{index===0 ? (<span className="oi oi-home"></span>) : ("")}{link.label}</Link>
            </li> 
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