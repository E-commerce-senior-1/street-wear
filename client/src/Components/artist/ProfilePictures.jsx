import React from 'react'

const ProfilePictures = () => {
  let arrPics = ["https://source.boomplaymusic.com/group10/M00/11/06/ae13ecd56e5542be8b59bc4a90026315_464_464.jpg","https://source.boomplaymusic.com/group10/M00/11/06/ae13ecd56e5542be8b59bc4a90026315_464_464.jpg","https://source.boomplaymusic.com/group10/M00/11/06/ae13ecd56e5542be8b59bc4a90026315_464_464.jpg","https://source.boomplaymusic.com/group10/M00/11/06/ae13ecd56e5542be8b59bc4a90026315_464_464.jpg","https://source.boomplaymusic.com/group10/M00/11/06/ae13ecd56e5542be8b59bc4a90026315_464_464.jpg","https://source.boomplaymusic.com/group10/M00/11/06/ae13ecd56e5542be8b59bc4a90026315_464_464.jpg","https://source.boomplaymusic.com/group10/M00/11/06/ae13ecd56e5542be8b59bc4a90026315_464_464.jpg","https://source.boomplaymusic.com/group10/M00/11/06/ae13ecd56e5542be8b59bc4a90026315_464_464.jpg","https://source.boomplaymusic.com/group10/M00/11/06/ae13ecd56e5542be8b59bc4a90026315_464_464.jpg"]
  return (
    <div className="shadow  mt-4 mr-4 rounded-lg h-max w-[400px] bg-[#ffffff1a] p-2.5 " >
      <div className='flex justify-between'>
      <span className='text-white font-sans text-[16px]' style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }}> Photos</span>
      <span style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }} className='font-sans text-[16px] text-[#6c5dd3] whitespace-nowrap font-normal cursor-pointer'>See All Photos</span>
      </div>
      <div className='flex flex-wrap w-full h-full m-5 p-3'>
      {arrPics.map(pic => {
        return <img src={pic} className='flex w-[100px] h-[95px] m-1 rounded-md p-1 cursor-pointer' />
      })}
      </div>
      </div>
  )
}

export default ProfilePictures