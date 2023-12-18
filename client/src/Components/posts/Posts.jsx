import React, { useContext } from 'react'
import { userContext } from '../../App'

const Posts = ({post}) => {
    const currentUser = useContext(userContext)
  return (
    <>
        <div className="shadow  mt-10 rounded-lg h-max ml-3 w-[800px] bg-[#ffffff1a]">
                {/* POST AUTHOR */}
                <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex space-x-2 items-center">
                        <div className="relative">
                            <img src={currentUser.profilePic} alt="Profile picture" className="w-10 h-10 rounded-full cursor-pointer" />
                        </div>
                        <div>
                            <div className="text-white font-sans font-[12px]" style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }}>
                                {currentUser.name}
                            <span className="text-sm text-gray-500 ml-1 font-bold">10h</span>
                            </div>
                            <span className="text-sm text-gray-500 font-bold">@{currentUser.name}</span>
                        </div>
                    </div>
                    <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 rounded-full cursor-pointer">
                        <i className='bx bx-dots-horizontal-rounded'></i>
                    </div>
                </div>
                {/* END POST AUTHOR */}
                  {/* POST CONTENT */}
                  <div className="text-justify px-4 py-2 ">
                    <p className='text-white font-sans text-[16px]' style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }}>
                        {post.description}
                    </p>
                    <img src={post.picture} className='mt-4 mb-4 rounded-md cursor-pointer w-full' alt="" />
                </div>
    </div>
    </>

  )
}

export default Posts