import React, { useContext, useState } from 'react'
import { storage } from '../user/firebase-config';
import { ref , uploadBytesResumable , getDownloadURL } from 'firebase/storage';
import { userContext } from '../../App';
import Modal from 'react-modal'
import axios from 'axios';

function CreatePost() {
    const [description , setDescription] = useState("")
    const [modalIsOpen, setModalIsOpen] = useState(false);  
    const [percent , setPercent] = useState(0)
    const [file , setFile] = useState("")
    const [newPost , setNewPost] = useState(null)
    const currentUser = useContext(userContext)

    const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };

      const handleUpload = () => {
        if (!file) {
           alert("please upload an image first")
         }
         const storageRef = ref(storage, `Posts/${currentUser.id}/${file.name}`)
         const uploadTask = uploadBytesResumable(storageRef , file)
         uploadTask.on(
           "state_changed",
           (snapshot) => {
             const percent = Math.round(
               (snapshot.bytesTransferred / snapshot.totalBytes) * 100
             );
             setPercent(percent)
           },
           (err) => console.log(err),
           () => {
             getDownloadURL(uploadTask.snapshot.ref).then(url => setNewPost(url))
           }
         )
       }

       const addPost = () => {
        axios.post(`http://localhost:3000/api/artist/Profile/Post/${currentUser.id}` , {description , picture : newPost}).then((res) => console.log("post added")).then(() => window.location.reload()).catch((err) => console.log(err))
       }

  return (
      <React.Fragment>
          <div className="px-4 mt-5 shadow w-[800px] self-center ml-[420px] rounded-lg border border-[rgba(255,255,255,0.1)] dark:bg-dark-second hover:animate-pulse">
              <div className="p-2 border-b border-[#ffffff1a] dark:border-dark-third flex space-x-4">
                  <img src={currentUser.profilePic} alt="Profile picture" className="w-10 h-10 rounded-full cursor-pointer" />
                  <textarea className="flex-1 bg-[#ffffff1a] rounded-md flex items-center justify-start w-full h-[130px]  whitespace-normal overflow-hidden pl-4 dark:bg-dark-third text-gray-100 text-lg dark:text-dark-txt" placeholder='whats in your mind' onChange={(e) => setDescription(e.target.value)}/>
              </div>
              <div className="p-2 flex justify-center">
                 
                  <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-[#ffffff1a] dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
                      <span className="text-xs sm:text-sm font-semibold text-gray-100 dark:text-dark-txt" onClick={openModal}>Photo/Video</span>
                  </div>
                  <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-[#ffffff1a] dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
                      <span className="text-xs sm:text-sm font-semibold text-gray-100 dark:text-dark-txt" onClick={() => addPost()}>Post</span>
                  </div>
              </div>
          </div>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel='Modal 1' className="bg-white">
      <div className='p-4 flex flex-col space-y-4'>
        <button onClick={closeModal}  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-[50px]">x</button>
        <h2 className='text-2xl font-bold mb-5 text-center font-sans' style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }} >add the picture</h2>
        <input type="file" accept='/image/' className='self-center mb-5' onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={handleUpload} className='mb-5 bg-indigo-500 rounded-[150px] self-center justify-center gap-2.5 inline-flex w-1/12'>Upload</button>
        <p className='text-center mb-5 hover:animate-bounce'>{percent} % done</p>
      </div>
        </Modal>
      </React.Fragment>
  )
}

export default CreatePost