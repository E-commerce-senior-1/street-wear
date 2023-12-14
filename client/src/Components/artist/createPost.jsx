import React from 'react'

function CreatePost() {
  return (
      <React.Fragment>
          <div className="px-4 mt-5 shadow w-[800px] self-center ml-[420px] rounded-lg border border-[rgba(255,255,255,0.1)] dark:bg-dark-second hover:animate-pulse">
              <div className="p-2 border-b border-[#ffffff1a] dark:border-dark-third flex space-x-4">
                  <img src="https://images.genius.com/b7856ba4b9670f426d8b347b3fc20a52.403x363x1.png" alt="Profile picture" className="w-10 h-10 rounded-full cursor-pointer" />
                  <textarea className="flex-1 bg-[#ffffff1a] rounded-md flex items-center justify-start w-full h-[130px]  whitespace-normal overflow-hidden pl-4 dark:bg-dark-third text-gray-100 text-lg dark:text-dark-txt" placeholder='whats in your mind'/>
              </div>
              <div className="p-2 flex justify-center">
                 
                  <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-[#ffffff1a] dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
                      <span className="text-xs sm:text-sm font-semibold text-gray-100 dark:text-dark-txt">Photo/Video</span>
                  </div>
                  <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-[#ffffff1a] dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
                      <span className="text-xs sm:text-sm font-semibold text-gray-100 dark:text-dark-txt">Post</span>
                  </div>
                 
              </div>
          </div>
      </React.Fragment>
  )
}

export default CreatePost