import React from "react";
import { contact } from "./DataMap";

const Footer = () => {
  return (
    <div className="bg-slate-800 animate-gradient border-b-2 border-slate-900 p-2 flex justify-between items-center w-full ">
      <ul className="text-gray-400 md:flex justify-between w-full ">
        {contact.map((item, index) => (
          <li key={index} className="flex items-center mx-2 md:mx-10 hover:text-customTurquoise">
            <a href={item.href} className="flex items-center">
              {item.icon}
              {item.text}
            </a>
          </li>
        ))}
      </ul>
  
  </div>
  
  
  
  
  );
};

export default Footer;
