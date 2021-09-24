import React from "react";
import mars from "../assets/mars.png"

const About = () => {
  return (
    <div id="about" className="flex">
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-8/12 xl:w-8/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-4xl text-blueGray-600">
              Mars Curiosity Api
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
            Mars curiosity is a robotic rover that is exploring the red planet.Api was used from
              <a
                href="https://api.nasa.gov/"
                className="text-blue-700"
                target="_blank"
              >{" "}
          api.nasa.gov
              </a>
              . It provides information about the weather on Mars and provides photos from the rovers 
            </p>
           
          </div>
        </div>
      </div>
      <div>
          <img src={mars} style={{width: '60%'}}/>
      </div>
    </div>
  );
};

export default About;
