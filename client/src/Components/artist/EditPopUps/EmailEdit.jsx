import React from 'react'

const EmailEdit = ({editPopUp , closePopUp}) => {
  const handlelosePopUp = (e) => {
    if (e.target.id === 'UsernameContainer') {
      closePopUp();
    }
  }

  if (editPopUp !== true) return null

  return (
    <div
      id='UsernameContainer'
      onClick={handlelosePopUp}
      className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm'>
      <div 
        className='p-2 bg-[#494649] w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5'>
        <div
          className='w-full p-3 justify-center items-center'>
          <h2
            className='font-semibold py-3 text-center text-xl text-[#ebebeb]'>
              Define your Email
          </h2>
          <React.Fragment>
          <div className="px-4 mt-5 shadow w-auto self-center rounded-lg dark:bg-dark-second">
              <div className="p-2 border-b border-[#ffffff1a] dark:border-dark-third flex space-x-4">
                  <textarea className="flex-1 bg-[#ffffff1a] rounded-full flex items-center justify-start pl-4 dark:bg-dark-third text-gray-100 text-lg dark:text-dark-txt" placeholder='Type your Username here...'/>
              </div>
              <div className="p-2 flex justify-center">
                  <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-[#ffffff1a] dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-point">
                      <span className="text-xs sm:text-sm font-semibold text-gray-100 dark:text-dark-txt">Confirm</span>
                  </div>
                 
              </div>
          </div>
      </React.Fragment>
    </div>
        </div>
      </div>
  )

}

export default EmailEdit