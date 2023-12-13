import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Artist from './Components/artist/Artist';
import Footer from './Components/NavBar/Footer';
const App = () => {
  return (

    <Router>
        <NavBar/>   
      <Routes>
        <Route path='/'/>
        <Route path='/home'/>
        <Route path='/PeronalCollection'/>
        <Route path='/Drops'/>
        <Route path='Profile'/>
        <Route path='SignIn'/>
        <Route path='SignUp'/>
        <Route path='Aboutus'/>
        <Route path='/stats'/>
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App
