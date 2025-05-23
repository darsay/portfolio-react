import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import Tech from './sections/Tech.jsx';
import Experience from './sections/Experience.jsx';

function App() {
  return (
    <main className='max-w-7xl mx-auto relative'>
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;