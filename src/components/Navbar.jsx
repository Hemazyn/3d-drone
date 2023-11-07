/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
     const [nav, setNav] = useState(false);
     const handleBodyScroll = () => {
          if (nav) { document.body.style.overflow = "hidden"; } else { document.body.style.overflow = "auto"; }
     };
     useEffect(() => {
          window.addEventListener("scroll", handleBodyScroll);
          return () => { window.removeEventListener("scroll", handleBodyScroll); };
     }, [nav]);

     return (
          <div className="w-full flex  items-center justify-between lg:justify-normal px-8 lg:px-40 py-4 h-[70px] bg-[#000] text-gray-300 font-poppins border-b">
               <div className="w-1/2 flex items-center justify-between lg:w-fit lg:flex-row-reverse">
                    <ul className="w-fit hidden lg:flex lg:ml-10 gap-x-3">
                         <li className="px-1 capitalize cursor-pointer text-xs hover:text-white line duration-200">
                              <Link onClick={() => setNav(!nav)} smooth duration={500}>Home</Link>
                         </li>
                         <li className="px-1 capitalize cursor-pointer text-xs hover:text-white duration-200 hover:underline">
                              <Link onClick={() => setNav(!nav)} smooth duration={500}>Contact</Link>
                         </li>
                    </ul>
                    <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-50 lg:hidden">
                         {nav ? <FaTimes size={25} className="font-thin " style={{ fontWeight: "lighter" }} /> : <FaBars size={25} style={{ fontWeight: "lighter" }} className="font-thin" />}
                    </div>
                    {/* navbar toggle phone view */}
                    {nav && (
                         <ul className="flex flex-col fixed pt-10 bottom-0 left-0 w-2/4 h-navH t-r text-gray-500 bg-gradient-to-b from-black to-gray-800 z-50">
                              <li className="pl-5 py-3 capitalize cursor-pointer text-lg text-white bg-gradient-to-r from-black to-gray-900 duration-200">
                                   <Link onClick={() => setNav(!nav)} smooth duration={500}>Home</Link>
                              </li>
                              <li className="pl-5 py-3 capitalize cursor-pointer text-lg text-gray-500 target:bg-gradient-to-r from-black to-gray-900  duration-200">
                                   <Link onClick={() => setNav(!nav)} smooth duration={500}>Contact</Link>
                              </li>
                         </ul>
                    )}
                    <div className="flex items-center gap-x-2">
                         <h4 className="font-normal hover:text-white duration-200 cursor-pointer text-[24px] leading-none">IVYINFINITY</h4>
                    </div>
               </div >
          </div>
     );
}

export default Navbar;