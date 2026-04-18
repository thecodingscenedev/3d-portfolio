import React from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './Layout/navbar'
import Hero from './sections/Hero'
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import WorkExperience from './sections/WorkExperience';
const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="dark"
      />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
