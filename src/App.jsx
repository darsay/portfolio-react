import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx';

function App() {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar classname="fixed top-0 left-0 right-0 z-50 bg-black/90"/>
      <Hero className="min-h-screen w-full flex flex-col relative"/>
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">It's a me, Nacho! <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Software Engineer and Game Developer</p>
            </div>
    </main>
  );
}

export default App;