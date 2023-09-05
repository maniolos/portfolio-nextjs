'use client';
import './animations.css';
import SlidingWords from './scripts';
import { useSelectedLayoutSegment } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import useScrollPosition from "./UseScrollHook";

import importedImages from './importer';
import Image from 'next/image';

export default function Portfolio() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null); // Track the currently hovered image
  const words = ['I', 'strive', 'to', 'create', 'the', 'best', 'UI/UX', 'imaginable'];

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  useEffect(() => {
    document.title = 'Kamil Pawłowski Portfolio';
  }, []);

  const handleMouseEnter = (imageName: string) => {
    setHoveredImage(imageName);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null); // Reset to null when mouse leaves
  };

  return (
    <>
      <div className="pt-[18rem] md:pt-[13rem]">
        <h1 className="text-center text-2xl sm:text-3xl w-[20rem] typewriter">Hi my name is..</h1>
        <h1 className="flex justify-center pt-5 font-bold md:text-7xl sm:text-5xl text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Kamil Pawłowski</h1>
        <h1 className="pt-5 justify-center font-mono text-2xl sm:3xl flex-nowrap flex">
          I&apos;m a <span className="justify-center font-mono text-2xl  sm:3xl flex-nowrap flex px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:89%_3px] bg-no-repeat bg-bottom">Front-End</span> developer
        </h1>
      </div>
      <div className="pt-[2rem]">
        <h1 className="text-center AnimationOnScroll">
          <div className="text-center text-xl md:text-2xl AnimationOnScroll">
            {animationStarted && <SlidingWords words={words} />}
          </div>
          
        </h1>
        <div className="h-[35rem] sm:h-[40rem]"></div>
        </div>
        <div>
          <div className='flex flex-nowrap justify-center text-center h-[3rem] md:h-[4rem] xl:h-[6rem] '>
            <h1 className='font-mono text-2xl md:text-4xl xl:text-5xl'  >Technologies used</h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
        {importedImages.map((image) => (
          <div
            key={image.name}
            className={`w-2/5 p-1 m-3 sm:w-32 md:w-64 bg-gradient-to-r from-pink-500 to-violet-500 relative`}
            onMouseEnter={() => handleMouseEnter(image.name)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredImage === image.name && (
              <div className="absolute inset-0 flex items-center justify-center font-mono left-2 top-3 md:top-4 lg:top-4 md:left-3 lg:left-3 h-5/6 w-11/12 bg-stone-950 opacity-css opacity-95">
                <p className="text-white text-2xl md:text-3xl lg:text-4xl ">{image.name}</p>
              </div>
            )}
            <div className='h-full w-full bg-stone-950 p-2 '>
              <Image 
                className='border-1'
                src={image.href}
                width={250}
                height={250}
                alt={image.name}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="h-[64rem]"/>

      
      
      
      <div className="flex flex-wrap h-100 justify-center">
        <a href="/" className="rounded-lg px-3 py-2 text-slate-200 font-medium hover:bg-slate-100 hover:text-slate-900">Back</a>
      </div>
    </>
  );
}
