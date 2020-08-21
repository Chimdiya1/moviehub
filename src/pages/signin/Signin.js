import React from 'react';
import BannerSignIn from '../../components/banner-signIn/banner-signIn';
import BannerSignInForm from '../../components/SignIn-form-banner/SignIn-form-banner';
import './signin.scss';
import Nav from '../../components/nav/nav.component';
import Footer from '../../components/footer/footer.component';


function Signin() {
   return (
      <>
         <Nav />
         <div className= "SignIn">
          <div className="SignIn-form">
           <BannerSignInForm/>
          </div>
          <div className="intro">
          <div className="intro-h2">
            <BannerSignIn/>
            {/* <h2>Watch the best movies on the Go.</h2> */}
            </div>
          </div>
         </div>
         <Footer/>
      </>
       
       
    );
}

export default Signin
  