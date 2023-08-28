import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import RateUs from './Components/RateUs/RateUs'
import Success from './Components/Success/Success'

function App() {
 
  return (
    <main>
      <Routes>
        <Route path='/' element={<RateUs />} />
        <Route path='/success/:rating' element={<Success />} />
      </Routes>
    </main>
  )
}

export default App
