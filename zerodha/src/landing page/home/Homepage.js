import React from 'react';

import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Openaccount from '../Openaccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import Awards from './Award';
function Homepage() {
    return (
        <>
      {/* <Navbar/> */}
      
        <Hero/>
       <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <Openaccount/>
        <Footer/>

        </>
      );
}

export default Homepage;