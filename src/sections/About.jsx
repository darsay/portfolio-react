import { useState, useEffect, useRef, Suspense } from "react";
import Button from "../components/Button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Float } from "@react-three/drei";
import Globe from "react-globe.gl";
import CanvasLoader from "../components/CanvasLoader";
import CvView from "../components/CvView";

function About() {

    const [hasCopied, setHasCopied] = useState(false);
    const globeRef = useRef();

    const handleCopy = (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('molinanacho33@gmail.com');
      setHasCopied(true);
  
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    };

    useEffect(() => {
      if (globeRef.current) {
        globeRef.current.pointOfView(
          {
            lat: 40.4168,
            lng: -3.7038,
            altitude: 2,
          },
          1000
        );
      }
    }, []);

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
              Over the years, I’ve consistently been driven by
              a passion for crafting interactive experiences that
              feel truly alive and engaging.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Block */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
          <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                labelsData={[
                  {
                    lat: 40.4168,
                    lng: -3.7038,
                    text: "Madrid",
                    
                  },
                ]}
                ringsData={[
                    {
                        lat: 40.4168,
                        lng: -3.7038,
                }]}
                ringMaxRadius={3}
                ringPropagationSpeed={0.3}
                ringRepeatPeriod={4000}
              />
            <div>
              <p className="grid-headtext">Based in Madrid</p>
              <p className="grid-subtext">
                I'm based in Madrid, Spain, but I'm open to remote opportunities.
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
                      <Float speed={3} rotationIntensity={1} floatIntensity={4}>
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
    {/* Iconos muy grandes y distribuidos a lo largo del ancho */}
    <div className="w-full h-[266px] flex justify-around items-center gap-12">
      <a
        href="https://github.com/darsay"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <img src="/assets/github.svg" alt="GitHub" className="w-24 h-24 sm:w-32 sm:h-32" />
      </a>

      <a
        href="https://www.linkedin.com/in/ignacio-molina-gamedev/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-24 h-24 sm:w-32 sm:h-32" />
      </a>

      <a
        href="https://darsay.itch.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <img src="/assets/itchio.svg" alt="Itch.io" className="scale-110 w-24 h-24 sm:w-32 sm:h-32" />
      </a>
    </div>

    <div>
      <p className="grid-headtext">Find Me Online</p>
      <p className="grid-subtext">
        You can find me on GitHub, LinkedIn, and Itch.io.
        <br/><br/>
        I love sharing my work and connecting with other developers.
        So go ahead and try some of my games or check out my code! I would love to hear your feedback.
      </p>
    </div>
  </div>
</div>


        {/* Contact Block */}
        <div className="xl:col-span-1 xl:row-span-2">
  <div className="grid-container">
    <div className="w-full h-[200px] flex justify-center items-center">
      <img
        src="assets/mail-send.gif"
        alt="grid-4"
        className="max-h-full max-w-full object-contain"
      />
    </div>

    <div className="space-y-2">
      <p className="grid-subtext text-center">Contact me</p>
      <div className="copy-container" onClick={handleCopy} onTouchStart={handleCopy}>
        <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
        <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
          molinanacho33@gmail.com
        </p>
      </div>
    </div>
  </div>
</div>


      </div>
    </section>
  );
}

export default About;
