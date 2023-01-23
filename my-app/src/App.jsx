import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About/About'
import Complex from './pages/complex/Complex'
import Contact from './pages/contact/Contact'
import Equipment from './pages/equipment/Equipment'
import Layout from './pages/Layout/Layout'
import Main from './pages/Main/Main'
import Review from './pages/review/Review'


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout />} >
              <Route index element={<Main/>} />
              <Route path='/complex' element={<Complex/>} />
              <Route path='/review' element={<Review/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/equipment' element={<Equipment/>} />
              <Route path='/contact' element={<Contact/>} />
          </Route>
        </Routes>
    </div>
  )
}

export default App