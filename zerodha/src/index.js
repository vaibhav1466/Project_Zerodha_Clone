import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Homepage from './landing page/home/Homepage';
import Signup from './landing page/signup/Signup';
import Aboutpage from './landing page/about/Aboutpage';
import Pricing from './landing page/pricing/Pricingpage';
import Supportpage from './landing page/support/Supportpage';

import Hero from './landing page/product/Hero';
import Footer from './landing page/Footer';
import Navbar from './landing page/Navbar';
import Leftsection from './landing page/product/Leftsection';
import Pricingpage from './landing page/pricing/Pricingpage';
import Productpage from './landing page/product/Productpage';
// import Productpage from './landing page/product/Productpage';


// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/about' element={<Aboutpage/>}></Route>
    <Route path='/pricing' element={<Pricing/>}></Route>
    <Route path='/support' element={<Supportpage/>}></Route>
\    <Route path='/product' element={<Productpage/>}> </Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
);


