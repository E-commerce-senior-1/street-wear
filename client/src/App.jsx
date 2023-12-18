import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/NavBar/Footer';
import LandingPage from './Components/Home/LandingPage';

import Products from './Components/products/Products.jsx';
import FavList from './Components/favList/FavList.jsx';
import Profile from './Components/artist/Profile';
import SignUp from './Components/user/SignUp';
import SignIn from './Components/user/SignIn';
import Statis from './Components/statis/Statis.jsx';

// import Products from './Components/products/Products';
// import FavList from './Components/favList/FavList'





import axios from 'axios';
import { About } from './Components/about/About.jsx';




 export  const userContext = createContext()


const App = () => {
  const [view , setView] = useState(false)
const [currentUser ,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")))

const [likedProducts, setLikedProducts] = useState([]);

const addToFavorites = (product) => {
  setLikedProducts([...likedProducts, product]);
};

const fetchArtistData =()=>{
  axios.get(`http://localhost:3000/api/artist/Profile/${currentUser.user.email}`).then((res) => setCurrentUser(res.data[0])).catch((err) => console.log(err))
}


useEffect(()=> {
  
  if (window.location.pathname === '/SignIn' || window.location.pathname === '/SignUp') setView(true)
  if(localStorage.length) {
    fetchArtistData()
  }
  
},[])

  return (
    
    <Router>
      <userContext.Provider value={currentUser} >
       { !view  ? (
         <NavBar />
         ) : null}   
        {/* <NavBar/> */}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>

        <Route
            path="/PeronalCollection"
            element={<FavList likedProducts={likedProducts} />}
          />
        <Route
            path="/Drops"
            element={<Products addToFavorites={addToFavorites} />}
          />

        <Route path='/Profile' element={<Profile/>}/>
        <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp/>} />
        <Route path='/Aboutus' element={<About/>}/>
 
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
