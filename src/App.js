import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import Portfolio from './Component/Portfolio';
import Prelaoder from './Component/Prelaoder';
import Skills from './Component/Skills';
import { useEffect,useState } from 'react';

function App() {
  const [loading,setLoading]=useState(true);
  useEffect(()=>
  {
    setTimeout(()=>{
      setLoading(false);
    },2500);
  },[]);
  return (
    <>
    {loading?(<Prelaoder/>):(
    <div className="p-4 md:p-8 lg:p-12 app-background ">
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>)}
    </>
  );
}

export default App;
