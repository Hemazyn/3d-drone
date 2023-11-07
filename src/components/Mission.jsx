import React from 'react';
import { Link } from 'react-router-dom';

const Mission = () => {
     return (
          <div className="w-full bg-gradient-to-b from-black to-gray-800 text-white font-poppins border-t">
               <div className="w-[90%] lg:w-4/5 mx-auto flex flex-col md:flex-row py-10 gap-y-5">
                    <div className="flex flex-col w-full md:w-1/2">
                         <h3 className="text-lg mb-5">Our mission</h3>
                         <p className="text-sm text-gray-400">Unique drone experiences through innovative creations.</p>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                         <h3 className="text-lg mb-5">TPV community</h3>
                         <Link to="https://www.instagram.com/iveyspace/" target="_blank"><p className="text-sm text-gray-300 underline">https://www.instagram.com/iveyspace/</p></Link>
                    </div>
               </div>
          </div>
     );
}

export default Mission;