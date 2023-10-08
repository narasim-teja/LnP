import React from 'react'
import { Routes, Route } from "react-router-dom";
import CoursePage from './CoursePage';
import Home from './Home';

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:title" element={<CoursePage />} />

        
      </Routes>
    </>
  )
}

export default App
