import React, { useContext, useEffect, useState } from 'react'
import { storage } from '../user/firebase-config';
import { ref , uploadBytesResumable , getDownloadURL, listAll } from 'firebase/storage';
import { userContext } from '../../App';
import ProfilePicturesPopUp from './ProfilePicturesPopUp';

const ProfilePictures = () => {
  const currentUser = useContext(userContext)
  const [imgsUrl , setImgsUrl] = useState([])
  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopUp = () => setOpenPopup(false);


  useEffect(() => {
    listAll(ref(storage , `Posts/${currentUser.id}`)).then(imgs => {
      console.log(imgs)
      imgs.items.forEach(val => {
        getDownloadURL(val).then(url => {
          setImgsUrl(data =>[...data , url])
        }) 
      })
    })
  }, [currentUser.id])


  return (
    <div className="shadow  mt-4 mr-4 rounded-lg h-max w-[400px] bg-[#ffffff1a] p-2.5 " >
      <div className='flex justify-between'>
      <span className='text-white font-sans text-[16px]' style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }}> Photos</span>
      <span style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }} className='font-sans text-[16px] text-[#6c5dd3] whitespace-nowrap font-normal cursor-pointer' onClick={() => setOpenPopup(true)}>See All Photos</span>
      <ProfilePicturesPopUp openPopup={openPopup} closePopUp={HandleRemovePopUp} imgsUrl={imgsUrl}/>
      </div>
      <div className='flex flex-wrap w-full h-full m-5 p-3 '>
      {imgsUrl.map(pic => {
        return <img src={pic} className='flex w-[100px] h-[95px] m-1 rounded-md p-1 cursor-pointer' />
      })}
      </div>
      </div>
  )
}

export default ProfilePictures