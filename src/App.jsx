import React from 'react'
import Home from './Components/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blogpostpage from './Components/Pages/Blogpostpage'
import Navbar from './Components/Navbar'
import Api from './Components/Api'

function App() {
  return (
    <div>
            <BrowserRouter>
            <Navbar />

 
   <Routes>
         <Route path="/" element={<Home />} />
         {/* <Route path="/api" element={<Api />} /> */}
        <Route path="/blog/:id" element={<Blogpostpage />}/>
      </Routes>
   </BrowserRouter>
  
    </div>
  )
}

export default App