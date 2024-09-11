import React from "react";
import { portfolio } from "./DataMap";
const Portfolio = () => {
  
  return (
    <div className="bg-slate-800 pt-20 pb-4" id="Portfolio">
      <h2 className="text-center text-4xl font-bold  text-white">
        Latest <span className="text-customTurquoise">Projects</span>
       
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 m-4 mt-8 md:m-16">
      {portfolio.map((item, index) => (
   <li key={index} className="relative group overflow-hidden">
   <img
     src={item.image}
     alt={item.alt}
     className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-80"
   />
   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 ease-in-out flex flex-col items-center justify-center">
     <span className="text-gray-300 text-[12px] lg:text-lg opacity-0 transform -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-center">
       {item.text}
     </span>
     <a
       href={item.link}
       target="_blank"
       rel="noopener noreferrer"
       className="opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-4"
     >
       <button className="bg-white text-gray-600 px-2 lg:px-4 lg:py-1  hover:opacity-60">
         {item.buttonText}
       </button>
     </a>
   </div>
 </li>
 
    
     
      ))}
      </ul>
    </div>
  );
};

export default Portfolio;
