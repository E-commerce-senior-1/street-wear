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
import axios from 'axios';
const userContext = createContext()
const App = () => {
  const [view , setView] = useState(false)
const [currentUser ,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")))


const fetchUserData =()=>{
  axios.get(`http://localhost:3000/api/artist/Profile/${currentUser.email}`).then((res) => console.log(res.data)).catch((err) => console.log(err))
}

useEffect(()=> {
  
  if (window.location.pathname === '/SignIn' || window.location.pathname === '/SignUp') setView(true)
  fetchUserData()
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
        <Route path='/stats'/>
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
