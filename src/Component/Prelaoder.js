import React from 'react'
import Lottie from 'react-lottie';
import Mypreloader from './Mypreloader.json';
const Prelaoder = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Mypreloader,
      
      };
  return (
   
       <div className="app-background">
        <div className='flex justify-between items-center h-screen'> <Lottie options={defaultOptions}  className="" /></div>
            

        </div>
   
  )
}

export default Prelaoder
