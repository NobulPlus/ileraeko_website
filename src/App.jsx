import React from 'react'
import './App.css'
import Header from './layouts/Header/Header'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Footer from './layouts/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Plan from './pages/Plan/Plan'
import NewsDetail from './News/NewsDetail'
import ScrollToTop from './components/Common/ScrollToTop'


const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop/>
          <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/plan" element={<Plan />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contactus" element={<Contact />} />
                  <Route path="/news/:newsId" element={<NewsDetail/>}/>
              </Routes>
          <Footer />
      </Router> 
    </>
  )
}

export default App
