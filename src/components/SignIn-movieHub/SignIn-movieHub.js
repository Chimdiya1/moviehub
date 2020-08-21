import React from 'react';
import "./SignIn-movieHub.css";
import LogoImg from "../../assets/logo.png";


function signInMovieHub(){
    return(
        <div className="SignIn-form-Logo-Img" style={{backgroundImage:`url(${LogoImg})`}}></div>
    )


}

export default signInMovieHub;