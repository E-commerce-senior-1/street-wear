import React, { useState } from "react";
import Modal from 'react-modal'
import { storage } from "../../user/firebase-config";
import { ref , uploadBytesResumable , getDownloadURL } from 'firebase/storage';


 const editCoverP = ({closeModal}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);  
  const [file , setFile] = useState("")
  const [percent, setPercent] = useState(0);

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = () => {
   if (!file) {
      alert("please upload an image first")
    }
    const storageRef = ref(storage, `PfP/${file.name}`)
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
        getDownloadURL(uploadTask.snapshot.ref).then(url => console.log(url))
      }
    )
  }
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel='Cover Edit'>
    <div className='p-4'>
      <button onClick={closeModal}  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Close Modal</button>
      <h2 className='text-2xl font-bold mb-4 text-center'>Update your Cover Picture</h2>
      <input type="file" onChange={handleChange} accept='/image/' />
      <button onClick={handleUpload}>Upload</button>
      <p>{percent} % done</p>
    </div>
      </Modal>
  );
}

export default editCoverP