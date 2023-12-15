import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/NavBar/Footer';
import LandingPage from './Components/Home/LandingPage';
// import FavList from './Components/favList/FavList'
import Products from './Components/products/Products'
import Profile from './Components/artist/Profile'
import SignIn from './Components/user/SignIn'
import SignUp from './Components/user/SignUp'
import Statis from './Components/statis/Statis';
const userContext = createContext()
const App = () => {
  const [view , setView] = useState(false)

useEffect(()=> {
  
  if (window.location.pathname === '/SignIn' || window.location.pathname === '/SignUp') setView(true)

},[])

  return (
    
    <Router>
      <userContext.Provider >
       { !view  ? (
         <NavBar />
         ) : null}   
        {/* <NavBar/> */}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        {/* <Route path='/PeronalCollection'element={<FavList/>}/> */}
        <Route path='/Drops' element={<Products/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp/>} />
        <Route path='/Aboutus'/>
        <Route path='/Statis' element={<Statis/>}/>
      </Routes>
      {!view ? (
        <Footer />
        ) : null}  
      {/* <Footer/> */}
        </userContext.Provider>
    </Router>

  )


}

export default App
