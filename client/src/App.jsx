import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/NavBar/Footer';
import LandingPage from './Components/Home/LandingPage';
import Profile from './Components/artist/Profile';
const App = () => {
  return (

    <Router>
        <NavBar/>   
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/PeronalCollection'/>
        <Route path='/Drops'/>
        <Route path='/Profile' element={<Profile/>}/>
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
