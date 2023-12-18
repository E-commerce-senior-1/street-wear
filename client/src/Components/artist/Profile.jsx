import React, { useContext, useEffect, useState } from 'react'
import Banner from './Banner'
import Posts from '../posts/Posts'
import ProfilePictures from './ProfilePictures'
import CreatePost from './createPost'
import { userContext } from '../../App'
import axios from 'axios'

let arr = [1,2,2,3,5]
const Profile = () => {
  const [posts , setPosts] = useState([])
  const currentUser = useContext(userContext)
  
  const getPosts = () => {
    axios.get(`http://localhost:3000/api/posts/Profile/Posts/${currentUser.id}`).then((res) => setPosts(res.data)).catch((err) => console.log(err))
  }
  useEffect(()=> {
    if(currentUser){
      getPosts()
    }
  }, [currentUser.id] )
  return (
    <>
    <div className='flex justify-center flex-col'>
      <div id="banner" className='flex justify-center mt-8'  >
        <Banner/>    
      </div>
      <CreatePost/>
      <div>
      </div>
    </div>
    <div className='flex justify-center mt-12'>
      <ProfilePictures/>
    <div className='flex flex-col' >
      {posts.map((post) => {
        return <Posts post={post} key={post.id} />
      
      })}
    </div>
    </div>
    </>
  )
}

export default Profile