 import React from 'react';
  function Hero() {
    return ( 
    <div className='container p-5 mb-5' >
        <div className='row text-cernter text-white'>
           <img src='asset/homeHero.png' alt='Hero img' className='mb-5'/>
           <h1 className='mt-5'>
           Invest in  everything
           </h1>
           <p>
           Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
           </p>
           <button className='p-2 btn btn-primary fs-5' mb-5 style={{width:'20%',margin:'0 auto'}}>Sign up for free</button>
            </div>
        </div>
           

     );
  }
  
  export default Hero;