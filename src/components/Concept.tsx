import React from 'react';

import spaceBackground from '../assets/space.jpg';

const Concept: React.FC = () => {
  
  return (
    <div className='concept text-dark'>
      
      <div className='row'>
        <div className='col-12'>
          <div 
            className='btn-gradient-2' 
            style={{height: '88.8vh'}}
          >
            <div 
              className='h-100' 
              style={{
                borderRadius: '4.75rem', 
                backgroundImage: `url(${spaceBackground})`,
                backgroundSize: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat'
              }}
            >
            </div>
            
          </div>
        </div>

      </div>

    </div>
  );
};

export default Concept;
