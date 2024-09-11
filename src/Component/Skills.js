import React from 'react'
import Animation from './Animation.json';
import { skills } from './DataMap';
import Lottie from 'react-lottie';

const Skills = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div className="bg-slate-900 pt-20 pb-4 relative" id="Skills">
       <div className="absolute -bottom-4 right-12 bg-blue-400 w-20 h-20 blur-[80px]"></div>
       <div className="absolute top-4 left-12 bg-blue-400 w-16 h-16 blur-[80px]"></div>
      <div className="absolute top-4 right-4 bg-blue-700 w-24 h-24 blur-[70px]"></div>
        <h2 className='text-center text-4xl font-bold pb-4 text-white'>My <span className='text-customTurquoise'>Skills</span></h2>
        <div className='lg:flex'>
      <ul className='text-white text-lg lg:text-2xl grid grid-cols-3 md:grid-cols-4 gap-4 m-4 md:m-16 w-70  lg:w-1/2'>
        {skills.map((item,index)=>
        (
          
<li 
  key={index} 
  className='bg-slate-800 p-4 hover:text-customTurquoise border rounded border-slate-400 custom-grey-shadow 
             transform transition-transform duration-300 ease-out hover:scale-110 hover:shadow-lg'
>
  {item.icon}
  <span className='text-[9px] lg:text-sm'>{item.title}</span>
</li>
        ))}
     
      </ul>
      <div className="lg:px-8 lg:w-1/2 ">
  <Lottie options={defaultOptions}  className="h-[380px] w-[450px]" />
</div>
      </div>
    </div>
  )
}

export default Skills
