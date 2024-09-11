import React, { useEffect, useRef, useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import {infoItems} from "./DataMap";

const About = () => {
  const [isOpen,setIsOpen]=useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-slate-800 pt-20 pb-4 " id="About">
      <div className="md:flex">
        <div className="hidden md:block"> <img src="/Pictures/umer2.png" alt="Umer" width={400} className=" lg:ml-16 "/></div>
        <div
      ref={sectionRef}
      className={`py-4 lg:py-16 px-12  w-full lg:w-1/2 ${isVisible ? 'animate-slideIn' : 'opacity-0'}`}
    >
          <div className="text-white w-full lg:w-4/6 ">
            <h2 className="text-4xl font-bold">
              {" "}
              About <span className="text-customTurquoise">me</span>
            </h2>
            <h3 className="text-xl py-1 lg:py-0">Full Stack Developer!</h3>
            <p className="text-sm text-gray-300">
              {" "}
             

I’m a web developer skilled in Full Stack, WordPress, and SEO. I create responsive, user-friendly websites, delivering high-quality, tailored solutions with seamless project management and clear communication to ensure client satisfaction.
            </p>
          </div>

          <ul className={`${isOpen ? 'block animate-slideFromTop' : 'hidden'} grid grid-cols-1 md:grid-cols-2 gap-8 my-8 text-customTurquoise`}>
  {infoItems.map((item, index) => (
    <li key={index} className="text-sm lg:text-4sm flex">
      <FaAngleRight className=" lg:mr-2 mt-1" />
      <b>{item.label}</b>
      <span className="text-sm lg:text-2sm pl-2 text-white">{item.value}</span>
    </li>
  ))}
</ul>
          <button className="bg-customTurquoise text-black mt-6 py-1 px-4 rounded-xl custom-turquoise-shadow hover:opacity-50" onClick={()=>setIsOpen(!isOpen)}>
          {isOpen? "Read less":"Read more"}
          </button>
        </div>
        <div className="md:hidden"> <img src="/pictures/umer2.png" alt="Umer" width={400} /></div>
      </div>
    </div>
  );
};

export default About;
