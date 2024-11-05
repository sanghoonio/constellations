import { useState } from 'react'

import About from './About';
import Concept from './Concept';

import readmeData from '../assets/readme.json';

function App() {

  const [activeCollapse, setActiveCollapse] = useState('about');

  const handleButtonClick = (collapseId: string) => {
    const collapseDiv = document.getElementById(collapseId);
    setTimeout(() => {
      if (collapseDiv?.classList.contains('show')) {
        setActiveCollapse(collapseId);
      } else {
        setActiveCollapse('');
      }
    }, 5);
  };

  console.log(activeCollapse)

  return (
    <>
      <div className='container-fluid bg-dark' style={{ minHeight: '100vh', minWidth: '100vw' }}>
        <div className='row'>
          <div className='col-12' id='parent'>
            <div className='text-center text-light pt-3'>
              <p className="d-inline-flex gap-2">
                <button
                  className={`btn btn-outline-light ${activeCollapse === 'about' ? 'active' : ''}`}
                  onClick={() => handleButtonClick('about')}
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#about'
                  aria-expanded='true'
                  aria-controls='about'
                >
                  About
                </button>
                <button
                  className={`btn btn-outline-light ${activeCollapse === 'concept' ? 'active' : ''}`}
                  onClick={() => handleButtonClick('concept')}
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#concept'
                  aria-expanded='false'
                  aria-controls='resume'
                >
                  Concept
                </button>
                <a
                  className={`btn btn-outline-light`}
                  href='https://github.com/sanghoonio/constellations' target='_blank' rel='noopener noreferrer'
                >
                  Development
                </a>
              </p>
            </div>

            <div className='collapse no-transition p-4 show' id='about' data-bs-parent='#parent'>
              <div className='page-width'>
                <About ReadmeData={readmeData} />
              </div>
            </div>
            <div className='collapse no-transition p-4' id='concept' data-bs-parent='#parent'>
              <div className='page-width'>
                <Concept />
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
