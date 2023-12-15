import React from 'react'
import Banner from './Banner'
import Posts from '../posts/Posts'
import ProfilePictures from './ProfilePictures'
import CreatePost from './createPost'

let arr = [1,2,2,3,5]
const Profile = () => {
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
      {arr.map(() => {
        return <Posts />
      
      })}
    </div>
    </div>
    </>
  )
}

export default Profile