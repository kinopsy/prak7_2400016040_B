import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Schedule from './components/schedule'; 
import ProjectShowcase from './components/ProjectShowcase';
import CardGallery from './components/CardGallery'; 
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <Schedule /> 
        <ProjectShowcase />
        <CardGallery /> 
      </main>

      <Footer />
    </div>
  );
}

export default App;