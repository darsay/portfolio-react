import { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

function About() {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText('molinanacho33@gmail.com');
      setHasCopied(true);
  
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    };

  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        
        {/* Introduction Block */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/public/assets/pixel-art-me.gif"
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
              src="/public/assets/pixel-art-me.gif"
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

        {/* Globe Block */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
            <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40.4168,
                    lng: -3.7038,
                    text: "I'm here!",
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
            </div>
            <div>
              <p className="grid-headtext">Where am I?</p>
              <p className="grid-subtext">
                I am currently based in Madrid, Spain. I am open to remote work opportunities.
              </p>
              <Button name="Conctact me!" isBeam containerClass="w-full mt-10" />
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
              <div className="copy-container" onClick={handleCopy}>
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
