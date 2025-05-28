import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5' >
                 <img src='asset\largestBroker.svg'/>
               
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in india</h1>
                    <p className='mb-5'>2+ million zerodha clients contribute to over 16% of retail order volumes in india dialy by trading and investing in:</p>
               <div className='row '>
                <div className='col-6'><ul>
                    <li>
                        <p>Future and Options</p>
                    </li>
                    <li>
                        <p>Commodity derivitives</p>
                    </li>
                    <li>
                        <p>Currency derivativs</p>
                    </li>
                </ul></div>
                <div className='col-6'><ul>
                    <li>
                        <p>Stocks and ipo</p>
                    </li>
                    <li>
                        <p>Commodity derivitives</p>
                    </li>
                    <li>
                        <p>Currency derivativs</p>
                    </li>
                </ul></div>
               </div>
                <img src='asset\pressLogos.png' style={{width:'90%'}}/>
                
                </div>
            </div>
        </div>
     );
}

export default  Awards;