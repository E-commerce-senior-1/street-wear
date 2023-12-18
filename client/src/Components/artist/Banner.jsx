import React, { useContext, useState } from 'react'
import PopUp from './EditPopUps/EditPopUp';
import { MdModeEdit } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { userContext } from '../../App';
import Modal from 'react-modal'
import { storage } from '../user/firebase-config';
import { ref , uploadBytesResumable , getDownloadURL } from 'firebase/storage';
import axios from 'axios';


const Banner = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);  
  const [modalIsOpen2 , setModalIsOpen2] = useState(false)
  const [openPopup, setOpenPopup] = useState(false);
  const [pfpFile , setPfpFile] = useState("")
  const [coverFile , setCoverFile] = useState("")
  const [percent, setPercent] = useState(0);
  const [newPFP , setNewPFP] = useState(null)
  const [newCoverP , setNewCoverP] = useState(null)

  const currentUser = useContext(userContext)

  const updatePFP = () => {
    axios.put(`http://localhost:3000/api/artist/Profile/ProfilePic/${currentUser.id}` , {profilePic : newPFP}).then(() => console.log("updated!!")).then(() => window.location.reload()).catch((err) => console.log(err))
  }
  const updateCoverPic = () => {
    axios.put(`http://localhost:3000/api/artist/Profile/CoverPic/${currentUser.id}` , {coverPic : newCoverP}).then(() => console.log("updated!!")).then(() => window.location.reload()).catch((err) => console.log(err))
  }

  const HandleRemovePopUp = () => setOpenPopup(false);

  const handleChangePFP = (e) => {
    setPfpFile(e.target.files[0])
  }
  const handleChangeCoverP = (e) => {
    setCoverFile(e.target.files[0])
  }

  const handleUploadPFP = () => {
   if (!pfpFile) {
      alert("please upload an image first")
    }
    const storageRef = ref(storage, `PfP/${pfpFile.name}`)
    const uploadTask = uploadBytesResumable(storageRef , pfpFile)
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
        getDownloadURL(uploadTask.snapshot.ref).then(url => setNewPFP(url))
      }
    )
  }
  const handleUploadCoverP = () => {
   if (!coverFile) {
      alert("please upload an image first")
    }
    const storageRef = ref(storage, `CoverP/${coverFile.name}`)
    const uploadTask = uploadBytesResumable(storageRef , coverFile)
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
        getDownloadURL(uploadTask.snapshot.ref).then(url => setNewCoverP(url))
      }
    )
  }

  console.log(newCoverP)

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openModal2 = () => {
    setModalIsOpen2(true);
  };

  const closeModal2 = () => {
    setModalIsOpen2(false);
  };

  return (
    <>
    <div className='w-6/12'> 
    <div className='relative'>
        <div className="w-[39px] h-[39px] p-2.5 bg-indigo-500 rounded-[150px] justify-center items-center gap-2.5 inline-flex absolute top-1 cursor-pointer" onClick={openModal}>
        <MdModeEdit/>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel='Modal 1' className="bg-white">
      <div className='p-4 flex flex-col space-y-4'>
        <button onClick={closeModal}  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-1/12">Close Modal</button>
        <h2 className='text-2xl font-bold mb-5 text-center'>Update your Cover Picture</h2>
        <input type="file" onChange={handleChangeCoverP} accept='/image/' className='self-center mb-5' />
        <button onClick={handleUploadCoverP} className='mb-5 bg-indigo-500 rounded-[150px] self-center justify-center gap-2.5 inline-flex w-1/12'>Upload</button>
        <button onClick={() =>updateCoverPic()} className='mb-5 bg-indigo-500 rounded-[150px] self-center justify-center gap-2.5 inline-flex w-1/12'>Confirm Changes</button>
        <p className='text-center mb-5 hover:animate-bounce'>{percent} % done</p>
      </div>
        </Modal>
      <img className='flex items-center object-cover w-full h-[355px] rounded-md sm:wfull hover:opacity-70 cursor-pointer' alt="Cover image" src={currentUser.coverPic}/>
    </div>
      <div className='flex justify-center items-center '>
      <img className='w-[110px] rounded-full border-solid border-white border-2 absolute top-22 hover:opacity-90 cursor-pointer '  src={currentUser.profilePic} alt="404" />
      </div>
      <div className='flex w-[164px] h-[45px] items-center justify-center gap-[10px] p-[10px] bg-[#6c5dd3] rounded-[150px] cursor-pointer mt-1'>
        <div className="w-[34px] h-[34px] p-2.5 bg-indigo-500 rounded-[150px] justify-center items-center gap-2.5 inline-flex absolute top-[510px] right-[790px]" onClick={openModal2}>
        <FaCamera/>
        </div>
        <Modal isOpen={modalIsOpen2} onRequestClose={closeModal2} contentLabel='Modal 2' className="bg-white">
      <div className='p-10 flex flex-col m-10'>
      <button onClick={closeModal2}  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-1/12">Close Modal</button>
        <h2 className='text-2xl font-bold mb-5 text-center'>Update your Profile Picture</h2>
        <input type="file" onChange={handleChangePFP} accept='/image/' className='self-center mb-5' />
        <button onClick={handleUploadPFP} className='mb-5 bg-indigo-500 rounded-[150px] self-center justify-center gap-2.5 inline-flex w-1/12'>Upload</button>
        <button onClick={() => updatePFP()} className='mb-5 bg-indigo-500 rounded-[150px] self-center justify-center gap-2.5 inline-flex w-1/12'>Confirm Changes</button>
        <p className='text-center mb-5 hover:animate-bounce'>{percent} % done</p>
      </div>
        </Modal>
        <MdModeEdit/>
        <div onClick={()=> setOpenPopup(true)} className='relative w-fit [font-family : "SF_Pro_Display-Semibold" , Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal] whitespace-nowrap'>
          Edit Profile
        </div>
        <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp}/>
      </div>
      <br />
      <h1 className='flex justify-center font-bold text-white font-sans text-[22px] '  style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }} >{currentUser.name}</h1>
      <p className='flex justify-center text-[#ffffff66] font-sans'  style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }}>@{currentUser.name}</p>
      <br />
      <p className="flex justify-center text-center text-[14px] font-sans text-[#ffffffcc]"  style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }}>{currentUser.bio}.</p>
    </div>
    </>
  )
}

export default Banner