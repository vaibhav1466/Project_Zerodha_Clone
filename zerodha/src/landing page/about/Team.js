import React from 'react';
function Team() {
    return (  
      <>       <div className = "container ">
      <div className='row p-5 mt-5 border-top'>
          <div className='fs-2 text-center'>
          <h1>People</h1>
     </div>
     

          <div className="col-6 fs-6 text-center">
     ,<img src='asset/nithinKamath.jpg'  style={{borderRadius:"100%",width:"60%"}}/>
     <h4>Nitin kamath</h4>
     <h4>CEO    </h4>
          </div>
          <div className="col-6 fs-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
            </div>
     </div>
     </div>
    
      </>
    );
}

export default Team;