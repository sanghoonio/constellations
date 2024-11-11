import Navbar from './nav/Navbar';
import About from './About';

function App() {

  return (
    <div className='container-fluid bg-black' style={{ minHeight: '100vh', minWidth: '100vw'}}>
      <div className='row'>
        <div className='col-12' id='parent'>
          <Navbar />

          <div className='pt-0 pb-3 px-3'>
            <div className='page-width'>
              <About />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
