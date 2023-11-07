import React from 'react';

const About = () => {
     const lists = [
          {
               id: 1,
               spec: "Switch between First, Third-Person & Tail View",
          },
          {
               id: 2,
               spec: "IVY Digital TPV System",
          },
          {
               id: 3,
               spec: "Bespoke Personalization",
          },
          {
               id: 4,
               spec: "Multi-Cam 4K/60 FPS Recording",
          },
          {
               id: 5,
               spec: "120 FPS HD Low-Latency Transmission",
          },
          {
               id: 6,
               spec: "12 km Transmission Range",
          },
          {
               id: 7,
               spec: "Top Speed @ 180 km/hr",
          },
          {
               id: 8,
               spec: "Super-Wide FOV",
          },
          {
               id: 9,
               spec: "Emergency System",
          },
          {
               id: 10,
               spec: "Night Mode",
          },
          {
               id: 11,
               spec: "New Pilot Mode",
          }, {
               id: 12,
               spec: "Flow-State Mode",
          },
     ];
     return (
          <div className="h-fit pb-12 bg-gradient-to-b from-black to-gray-800 border-t">
               <button className="w-fit bg-[#fff] mt-10 flex justify-center mx-auto p-4 text-sm font-light uppercase">View in your space</button>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2 md:gap-y-8 w-[70%] mx-auto mt-16">
                    {lists.map(({ id, spec }) => (
                         <p key={id} className="text-white text-center text-[18px] font-light mb-[40px]" style={{ border: "1px solidred" }}>{spec}</p>
                    ))}
               </div>
               <button className="w-fit bg-[#fff] mt-8 flex justify-center mx-auto p-4 text-sm font-light uppercase">Order now</button>
          </div>
     );
}

export default About;