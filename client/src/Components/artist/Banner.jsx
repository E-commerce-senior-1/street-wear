import React, { useState } from 'react'
import PopUp from './EditPopUps/EditPopUp';
import { MdModeEdit } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import EditPFP from './EditPopUps/EditPFP';

const Banner = () => {
  
  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopUp = () => setOpenPopup(false);

  return (
    <>
    <div className='w-6/12'> 
        <div className="w-[39px] h-[39px] p-2.5 bg-indigo-500 rounded-[150px] justify-center items-center gap-2.5 inline-flex absolute top-[442px] right-[440px]">
        <MdModeEdit/>
        </div>
      <img className='flex items-center w-full h-[355px] rounded-md sm:wfull hover:opacity-70 cursor-pointer' alt="Cover image" src="https://us-tuna-sounds-images.voicemod.net/c22227f4-9e2f-40a4-98e5-684be2195e9c-1669996963917.png"/>
      <div className='flex justify-center items-center '>
      <img className='w-[110px] rounded-full border-solid border-white border-2 absolute top-22 hover:opacity-90 cursor-pointer '  src="https://images.genius.com/b7856ba4b9670f426d8b347b3fc20a52.403x363x1.png" alt="404" />
      </div>
      <div className='flex w-[164px] h-[45px] items-center justify-center gap-[10px] p-[10px] bg-[#6c5dd3] rounded-[150px] cursor-pointer mt-1'>
        <div className="w-[34px] h-[34px] p-2.5 bg-indigo-500 rounded-[150px] justify-center items-center gap-2.5 inline-flex absolute top-[510px] right-[790px]">
        <FaCamera/>
        </div>
        <MdModeEdit/>
        <div onClick={()=> setOpenPopup(true)} className='relative w-fit [font-family : "SF_Pro_Display-Semibold" , Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal] whitespace-nowrap'>
          Edit Profile
        </div>
        <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp}/>
      </div>
      <br />
      <h1 className='flex justify-center font-bold text-white font-sans text-[22px] '  style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }} >Profile name</h1>
      <p className='flex justify-center text-[#ffffff66] font-sans'  style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }}>@tagName</p>
      <br />
      <p className="flex justify-center text-center text-[14px] font-sans text-[#ffffffcc]"  style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor, consectetur purus amet, accumsan nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing. Tortor, consectetur purus amet, accumsan nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing.</p>
    </div>
    </>
  )
}

export default Banner