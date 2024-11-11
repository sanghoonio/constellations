import React from 'react';

import Navbar from './nav/Navbar';
import StarField from './StarField';

const Concept: React.FC = () => {
  
  return (

    <div className='container-fluid bg-black' style={{ minHeight: '100vh', minWidth: '100vw'}}>
      <div className='row'>
        <div className='col-12' id='parent'>
          <Navbar />

          <div className='pt-0 pb-3 px-3'>
            <div className='page-width'>

              <div className='concept text-dark'>
                <div className='row'>
                  <div className='col-12'>
                    <div 
                      className='window_border' 
                      style={{height: '88.8vh'}}
                    >

                      <StarField />
                      
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Concept;
