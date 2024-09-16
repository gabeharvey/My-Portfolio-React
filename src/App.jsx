import './App.css';
import { useRef } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyExperience from './components/MyExperience';
import MyEducation from './components/MyEducation';
import About from './components/About';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null); 
  const myExperienceRef = useRef(null); 
  const myEducationRef = useRef(null); 
  const resumeRef = useRef(null); 
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar 
        scrollToSection={scrollToSection} 
        refs={{ aboutRef, projectsRef, myExperienceRef, myEducationRef, resumeRef }} 
      />
      <div ref={aboutRef}>
        <About scrollToSection={scrollToSection} refs={{ projectsRef }} />
      </div>
      <div ref={projectsRef}>
        <Home />
      </div>
      <div ref={myExperienceRef}>
        <MyExperience />
      </div>
      <div ref={myEducationRef}>
        <MyEducation />
      </div>
      <Footer />
    </div>
  );
}

export default App;