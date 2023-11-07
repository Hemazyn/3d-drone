import React from 'react';
import Drone from "./Drone";

const Hero = () => {
     return (
          <div className="bg-gradient-to-b from-black to-gray-800 text-white font-poppins">
               <div className="flex flex-col items-center">
                    <h4 className="mt-[40px] text-4xl">Peristéria TPV</h4>
                    <p className="text-sm font-[400] text-gray-500 mt-8">Bringing spatial awareness to FPV drones</p>
               </div>
               <div className="relative w-full h-[50vh] md:h-screen mx-auto flex justify-center items-center z-40">
                    <Drone />
               </div>
          </div>
     );
}

export default Hero;