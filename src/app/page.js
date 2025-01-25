'use client'

import { IoTabletLandscapeOutline } from "react-icons/io5";
import { LuSmartphone } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'



export default function Home (){

  const [activeTab, setActiveTab] =  useState('smartphone')
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    // funcrtion to check screen size
    const handleResize = () => {
      setIsMedium(window.innerWidth <= 850); // example for mobile screens (<= 850px)
    };

    handleResize(); // check initially
    window.addEventListener("resize", handleResize); // add listener

    return () => window.removeEventListener("resize", handleResize); // cleanup listener
  }, []);

  // conditionally render based on screen size
  if (isMedium) {
    return (
      <iframe
              src="https://easymenu-online.vercel.app/m/300" 
              className="w-full h-screen"
              frameBorder="0"
            ></iframe>
    ); // don't render the component
  }


  return (
  <div className="">
    
    <div className="section w-full h-screen">
    
        <header className=" text-white bg-zinc-600 p-5 flex justify-between items-center">
          <label className="text-2xl font-bold">Menumal</label>
          <div className="flex gap-8">
            <div className="bg-zinc-400 p-2 w-full rounded-lg flex gap-8">
              <button onClick={()=>setActiveTab('tablet')} className={`flex gap-2 p-2 rounded-lg ${activeTab==='tablet'&& 'bg-zinc-500'} justify-center items-center`} ><IoTabletLandscapeOutline className="text-2xl"/> Tablet</button>
              <button onClick={()=> setActiveTab('smartphone')} className={`flex gap-2 p-2 rounded-lg ${activeTab==='smartphone'&& 'bg-zinc-500'} justify-center items-center`} > <LuSmartphone className="text-2xl"/> Smartphone</button>

            </div>
            <button className="flex justify-between items-center gap-3  ">Accedi <FaArrowRight />
            </button>
          </div>
        </header>

        <div className=" flex justify-center items-center h-5/6 bg-gradient-to-t from-blue-300 to-white">
        {
          activeTab==='smartphone'?(
            <DeviceFrameset zoom={.5} device="iPhone X" width={'400px'} landscape={false} color="black" >
                  <iframe
              src="https://easymenu-online.vercel.app/m/300" 
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
              </DeviceFrameset>


          ):(
            <DeviceFrameset  device="iPad Mini" width={'660px'} zoom={.5} landscape={false} color="black" >
                <iframe
              src="https://easymenu-online.vercel.app/m/300" 
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
            </DeviceFrameset>
          )  
        }  
        



        </div>
      </div>
  </div>
  )









}