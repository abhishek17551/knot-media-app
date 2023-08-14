import React from 'react'
import { useNavigate } from 'react-router-dom'
import { errorImage } from '../../utils/constants';
import { FaAngleDoubleLeft } from '../../utils/icons'

function PageNotFound() {
  const navigate = useNavigate();

  document.title = "Page Not Found"
  return (
    <div className='flex flex-col justify-center items-center gap-10 h-[110vh] -mt-10 dark:text-primaryLight'>
      <img
        src={errorImage}
        alt='404ErrorImage'
        className="w-full max-w-[30rem] px-2 "
      />

      <div onClick={() => navigate("/")} className='flex  items-center justify-center gap-2 -mt-6 py-2 px-4 cursor-pointer hover:scale-110 border rounded-md'>
        <FaAngleDoubleLeft/>
        <span>Back To Home</span>
      </div>
    </div>
  )
}

export {PageNotFound} 