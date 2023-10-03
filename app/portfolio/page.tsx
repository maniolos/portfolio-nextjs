'use client';
import './animations.css';
import SlidingWords from './scripts';
import { useSelectedLayoutSegment } from 'next/navigation';
import React, { useState, useEffect, FormEvent } from 'react';
import useScrollPosition from "./UseScrollHook";
import PortfolioPic from "./img/maniek3.jpg";
import SkillLevel from './SkillLevel';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faSquareJs, faPhp, faCss3Alt} from '@fortawesome/free-brands-svg-icons';

import importedImages from './importer';
import Image from 'next/image';

export default function Portfolio() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null); // Track the currently hovered image
  const words = ['I', 'strive', 'to', 'create', 'the', 'best', 'UI/UX', 'imaginable'];
  
  config.autoAddCss = false;
  library.add(fas);
  
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
          I&apos;m a <span className="justify-center font-mono text-2xl  sm:3xl flex-nowrap flex px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:89%_2px] sm:bg-[length:89%_3px] bg-no-repeat bg-bottom">Front-End</span> developer
        </h1>
      </div>
      <div className="pt-[2rem]">
        <h1 className="text-center AnimationOnScroll">
          <div className="text-center text-xl md:text-2xl AnimationOnScroll">
            {animationStarted && <SlidingWords words={words} />}
          </div>
          
        </h1>
        <div className="h-[35rem] sm:h-[40rem]">

          
        </div>

        </div>

        <div className='p-4 h-[60rem] sm:h-[40rem] font-mono text-2xl justify-center text-center'>
        
          <span className="pb-2 justify-center font-mono text-2xl sm:text-3xl flex-nowrap flex px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:30%_2px] sm:bg-[length:19%_3px] md:bg-[length:15%_3px] lg:bg-[length:12%_3px] bg-no-repeat bg-bottom">About me</span>
            <div className='sm:flex-nowrap sm:flex'>
              <h1 className='pt-10 sm:pl-[1rem] md:pl-[5rem] lg:pl-[20%] pl-1 sm:pr-[3rem] sm:w-[72rem] pd-[3rem] sm:leading-10  text-center sm:text-left text-xl sm:text-2xl antialiased tracking-wide not-italic  '>I&apos;m Kamil Pawłowski, a junior <span className='underline'>Front-end</span> developer with a flair for creative coding. My journey into web development began with a fascination for turning ideas into reality through code. Proficient in design and UI optimization, I&apos;m committed to becoming a Full-Stack Engineer, blending design with functionality. Join me in shaping the dynamic web landscape.</h1>
              <Image 
               className=' mt-[2rem] sm:mt-0 sm:ml-0 sm:h-[25rem] sm:w-[24rem] '
              //  className='sm:h-[28rem] sm:w-[23rem] '
              src={PortfolioPic}
              width={500}
              height={500}
              alt='test'/>
            </div>
        </div>
        <div>
        <span className=" pb-2 justify-center font-mono text-2xl sm:text-4xl flex px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:55%_2px] sm:bg-[length:14%_3px] bg-no-repeat bg-bottom">My Skills</span>
          <div className='h-[30rem] flex'>
          
          <div className='sm:ml-[21%] ml-[3rem] mr-5 w-[5rem] h-[100%]  container flex flex-col justify-items-end justify-evenly '>
          <FontAwesomeIcon 
          icon={faHtml5} 
          size="5x"
          />
          <FontAwesomeIcon 
          icon={faSquareJs} 
          size="5x"
          />
          <FontAwesomeIcon 
          icon={faCss3Alt} 
          size="5x"
          />
          <FontAwesomeIcon 
          icon={faPhp} 
          size="5x"
          />


          </div>
          <div className=' container w-[52%]  mt-8 flex flex-col space-y-4'>
            <SkillLevel category="Html" level={3} />
            <SkillLevel category="Java script" level={2} />
            <SkillLevel category="Css" level={3} />
            <SkillLevel category="PHP" level={1} />
            
            </div>
        </div>
        

        </div>
        <div>
          <div className='flex flex-nowrap justify-center text-center mt-[10rem] h-[3rem] md:h-[4rem] xl:h-[6rem] '>
            <h1 className='font-mono text-2xl md:text-4xl xl:text-5xl '  >Technologies used for this project</h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-center pt-5">
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

      <div className='h-[20rem] bg-grey'/>

      
      <div className="h-[30rem] items-center justify-center font-mono text-center text-1xl sm:text-2xl bg-stone-850 ">
        <div className='h-[1rem] bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:90%_2px] sm:bg-[length:70%_3px] bg-no-repeat bg-bottom'/>
          <h1 className='p-2 sm:p-7'>If you&apos;d like to get in touch with me, please don&apos;t hesitate to reach out via email at </h1>
              <span className="pt-7 pb-2 justify-center font-mono text-2xl sm:text-3xl flex-nowrap flex px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:77%_2px] sm:bg-[length:24%_3px] bg-no-repeat bg-bottom">PawlowskiDev@gmail.com</span>
              

      </div>

      
    
    
      
      
      <div className="flex flex-wrap h-100 justify-center">
        <a href="/" className="rounded-lg px-3 py-2 text-slate-200 font-medium hover:bg-slate-100 hover:text-slate-900">Back</a>
      </div>
    </>
  );
}
