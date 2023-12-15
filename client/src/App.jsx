import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/NavBar/Footer';
import LandingPage from './Components/Home/LandingPage';
import Products from './Components/products/Products.jsx';
import {FavList} from './Components/favList/FavList.jsx';
const App = () => {
  return (

    <Router>
        <NavBar/>      
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/PeronalCollection' element={<FavList/>}/>
        <Route path='/Drops' element={<Products/>}/>
        <Route path='Profile'/>
        <Route path='SignIn'element={<LandingPage/>}/>
        <Route path='SignUp'/>
        <Route path='Aboutus '/>
        <Route path='/stats'/>
      </Routes>
      <Footer/>
    </Router>

  )


}

export default App
