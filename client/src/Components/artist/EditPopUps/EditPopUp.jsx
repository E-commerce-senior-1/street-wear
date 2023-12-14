import React, { useState } from 'react'
import NameEdit from './NameEdit'
import UsernameEdit from './UsernameEdit'
import BioEdit from './BioEdit'

const PopUp = ({ openPopUp, closePopUp }) => {

  const [editPopUp , setEditPopUp] = useState(false)
  const [popUp, setPopUp] = useState("")
  
  const HandleRemovePopUp = () => setEditPopUp(false);
  const handlelosePopUp = (e) => {
    if (e.target.id === 'ModelContainer') {
      closePopUp();
    }
  }

  if (openPopUp !== true) return null

  return (
    <div
      id='ModelContainer'
      onClick={handlelosePopUp}
      className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm'>
      <div 
        className='p-2 bg-[#494649] w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5'>
        <div
          className='w-full p-3 justify-center items-center'>
          <h2
            onClick={() => {setPopUp("Name")
              setEditPopUp(true)}}
            className='font-semibold py-3 text-center text-[#ebebeb] text-xl cursor-pointer hover:bg-[#ffffff1a]' style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }}
            >
              Name
          </h2>
          {popUp === "Name" && <NameEdit editPopUp={editPopUp} closePopUp={HandleRemovePopUp} />}
          <hr />
          <h2
             onClick={() => {setPopUp("Username")
              setEditPopUp(true)}}
            className='font-semibold py-3 text-center text-[#ebebeb] text-xl cursor-pointer hover:bg-[#ffffff1a]' style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }}
            >
              Username
          </h2>
          {popUp === "Username" && <UsernameEdit editPopUp={editPopUp} closePopUp={HandleRemovePopUp}/>}
          <hr />
          <h2
            onClick={() => { setPopUp("Bio")
              setEditPopUp(true)}}
            className='font-semibold py-3 text-center text-[#ebebeb] text-xl cursor-pointer hover:bg-[#ffffff1a]' style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }}
            >
              Bio
          </h2>
          {popUp === "Bio" && <BioEdit editPopUp={editPopUp} closePopUp={HandleRemovePopUp}/>}
        </div>
      </div>
    </div>
  )
}

export default PopUp