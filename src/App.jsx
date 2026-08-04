import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


function App() {


  return (
    <>
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/services' element={<Services />} />
             <Route path='/about' element={<About />} />
             <Route path='/contact' element={<Contact />} />
             <Route path='*' element={<NotFound />} />
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
