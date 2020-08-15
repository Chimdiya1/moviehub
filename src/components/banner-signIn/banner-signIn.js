import React from 'react';
import "./banner-signIn.scss"
import BannerImg from "../../assets/images/banner-img4.jpg"


function signInBanner(){
    return(
        <div className="banner-signIn-div" style={{backgroundImage:`url(${BannerImg})`}}>
            <div className="landing-content">
               <div className="intro-h2">
               <h2>Watch the best movies on the Go.</h2>
               </div>
            </div>
        </div>
    )


}

export default signInBanner