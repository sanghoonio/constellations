import { useLocation } from 'react-router-dom';

function Navbar() {

  const location = useLocation().pathname;

  return (
    <>
      <div className='text-center text-light pt-3'>
        <p className="d-inline-flex gap-2">
          <a
            className={`btn btn-outline-black btn_goldenrod ${location === '/constellations/' ? 'active' : ''}`}
            href='/constellations/'
          >
            Overview
          </a>
          <a
            className={`btn btn-outline-black btn_goldenrod ${location === '/constellations/concept' ? 'active' : ''}`}
            href='/constellations/concept'
          >
            Concept
          </a>
          <a
            className={`btn btn-outline-black btn_goldenrod`}
            href='https://github.com/sanghoonio/constellations' target='_blank' rel='noopener noreferrer'
          >
            Development
          </a>
        </p>
      </div>
            
    </>
  )
}

export default Navbar
