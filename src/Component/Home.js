import React, { useState, useEffect,useRef } from "react";
import {socialMediaLinks} from "./DataMap";

const Home = () => {
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

  const roles = [
    "Co-Founder of Ampflick",
    "Full Stack Developer",
    "WordPress Developer",
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const role = roles[currentRole];
    if (currentCharIndex < role.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(role.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, 100); // Adjust typing speed here
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentRole((currentRole + 1) % roles.length);
        setCurrentCharIndex(0);
        setDisplayedText("");
      }, 1000); // Adjust time before switching to next role
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentRole, roles]);

  return (
    <div className="bg-slate-900 py-12 relative" id="Home">
            <div className="absolute -bottom-4 left-12 bg-blue-400 w-20 h-20 blur-[80px]"></div>
            <div className="absolute top-4 left-12 bg-blue-400 w-12 h-12 blur-[80px]"></div>

      <div className="absolute top-4 right-6 bg-blue-700 w-24 h-24 blur-[60px]"></div>
      <div className="block md:flex">
      
      <div
      ref={sectionRef}
      className={`m-12 lg:m-20 md:w-1/2 ${isVisible ? 'animate-slideIn' : 'opacity-0'}`}
    >
      <div className="text-white">
        <h2 className="text-3sm">Hello it's me</h2>
        <h2 className="text-3xl">
          <b>Umer Haroon</b>
        </h2>
        <h2 className="text-3sm typing-text ">
          I'm a <span className="text-customTurquoise">{displayedText}</span>
        </h2>
        <p className="text-sm mt-4">
          An Expert Developer specializing in creating responsive,
          user-friendly websites for your business with modern technologies
          and best practices.
        </p>
      </div>
      <div className="mt-8 text-sm flex space-x-4">
        {socialMediaLinks.map(({ href, icon, key }) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border-2 border-customTurquoise rounded-full p-2 text-customTurquoise hover:opacity-50 custom-turquoise-shadow">
              {icon}
            </div>
          </a>
        ))}
      </div>
      <a href="/UmerCV.pdf" download>
        <button className="bg-customTurquoise mt-6 py-1 px-4 rounded-xl custom-turquoise-shadow hover:opacity-50">
          Download CV
        </button>
      </a>
    </div>
        <div className="w-full md:w-1/2 px-4">
        <div className="hexagon"> <img src="/Pictures/umer1.png" alt="umer1"  width={350}/></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
