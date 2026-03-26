import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/Faq'
import FeedBack from './pages/FeedBack'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App