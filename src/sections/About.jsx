import { useState, Suspense } from "react";
import Button from "../components/Button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Float } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import CvView from "../components/CvView";

function About() {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('molinanacho33@gmail.com');
      setHasCopied(true);
  
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        
        {/* Introduction Block */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={`/assets/pixel-art-me.gif`}
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Nacho!</p>
              <p className="grid-subtext">
                With my experience, I've honed my skills in Software and Videogame Development
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Block */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={`/assets/pixel-art-me.gif`}
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in videogame development, using tools like Unity and Unreal and languages
                like C++ and C#. Lately, I've been working with React and Express.js.
              </p>
            </div>
          </div>
        </div> 

        {/* CV Block */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="w-full h-full object-cover rounded-3xl">
              <Canvas>
                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 5]}/>
                  <directionalLight position={[10, 10, -5]}/>
                  <Center>
                      <Suspense fallback={<CanvasLoader />}>
                      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
                        <group scale={5.3} position={[0, 0, -1]} rotation={[0, 0, 0]}>
                            <CvView />                     
                        </group>
                      </Float>
                      </Suspense>
                  </Center>
              </Canvas>
            </div>
            <div>
              <p className="grid-headtext">My CV</p>
              <p className="grid-subtext">
               In case you prefer it, you can also learn about me in my CV!
              </p>
              <a href="/assets/IgnacioMolina_Resume.pdf" target="_blank" className="w-full">
                <Button name="Download CV" containerClass="w-full mt-10"  />
              </a>
            </div>
          </div>
        </div>

        {/* Passion Block */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Block */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy} onTouchStart={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">molinanacho33@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
