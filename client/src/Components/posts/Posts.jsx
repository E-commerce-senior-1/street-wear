import React from 'react'

const Posts = () => {
  return (
    <>
        <div className="shadow  mt-10 rounded-lg h-max ml-3 w-[800px] bg-[#ffffff1a]">
                {/* POST AUTHOR */}
                <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex space-x-2 items-center">
                        <div className="relative">
                            <img src="https://images.genius.com/b7856ba4b9670f426d8b347b3fc20a52.403x363x1.png" alt="Profile picture" className="w-10 h-10 rounded-full cursor-pointer" />
                        </div>
                        <div>
                            <div className="text-white font-sans font-[12px]" style={{ fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif" }}>
                                Profile Name
                            <span className="text-sm text-gray-500 ml-1 font-bold">10h</span>
                            </div>
                            <span className="text-sm text-gray-500 font-bold">@Username</span>
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
                    </p>
                    <img src="https://i.imgur.com/1Gp27IJ.jpg" className='mt-4 mb-4 rounded-md cursor-pointer' alt="" />
                </div>
    </div>
    </>

  )
}

export default Posts