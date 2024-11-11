import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom';

import App from './components/App.tsx'
import Concept from './components/Concept.tsx'

import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// const router = createBrowserRouter([
//   {
//     path: '/constellations/',
//     element: <App />,
//   },
//   {
//     path: '/constellations/concept',
//     element: <Concept />,
//   }
// ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/concept" element={<Concept />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
