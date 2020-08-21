import React from 'react';
import LandingBanner from '../../components/landing-banner/landing-banner.component';
import InfoCallout from '../../components/info-callout/info-callout.component';
import Nav from '../../components/nav/nav.component';
import Footer from '../../components/footer/footer.component';
const Home = () => {
    return (
      <div className="home">
        <Nav/>
        <LandingBanner/>
        <InfoCallout />
        <Footer/>  
      </div>
    );
}

export default Home;