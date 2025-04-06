import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';

function App() {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar classname="fixed top-0 left-0 right-0 z-50 bg-black/90"/>
      <Hero className="min-h-screen w-full flex flex-col relative"/>
      <About />
      <Projects />
    </main>
  );
}

export default App;