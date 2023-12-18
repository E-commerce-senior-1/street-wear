import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/NavBar/Footer';
import LandingPage from './Components/Home/LandingPage';
import Product from './Components/products/Products';
import { About } from './Components/about/About.jsx';
const App = () => {
  return (

    <Router>
        <NavBar/>   
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/PeronalCollection'/>
        <Route path='/Drops' element={<Product/>}/>
        <Route path='Profile'/>
        <Route path='SignIn'/>
        <Route path='SignUp'/>
        <Route path='aboutus'  element={<About/>}/>
        <Route path='/stats'/>
      </Routes>
      <Footer/>
    </Router>

  )

}

export default App
