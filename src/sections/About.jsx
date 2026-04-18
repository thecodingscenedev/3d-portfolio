
import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Generic/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@codingscene.dev");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Intro */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm CodingScene.dev</p>
              <p className="grid-subtext">
                With a year of experience in frontend and backend, I've
                developed strong full-stack skills and expertise in building
                end-to-end solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript with React.js and Next.js
                (frontend), and Nest.js, Express.js, MongoDB (backend). Skilled
                in DevOps (AWS, Docker, CI/CD, Kubernetes), C++ for DSA, and
                system design.
              </p>
            </div>
          </div>
        </div>

        {/* Globe + Remote Work */}
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
                    lat: 28.4595,
                    lng: 77.0266,
                    text: "Gurgaon, India",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div className="mt-4">
              <p className="grid-headtext">
                Available to work remotely across most time zones
              </p>
              <p className="grid-subtext">
                Based in Gurgaon, India. Open to opportunities within India and
                remote roles globally.
              </p>
              <a href="#contact">
                <Button className="w-full mt-10" isBeam>
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Passion for Coding */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Exploring new technologies and constantly sharpening my skills
                keeps me excited. Whether it's crafting clean UI with
                React/Next.js or designing scalable backend systems with Nest.js
                and MongoDB, I enjoy every step of the journey.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2 mt-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">
                  hello@codingscene.dev
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
