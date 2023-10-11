'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SlidingWords from './scripts';
import SkillLevel from './SkillLevel';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faHtml5, faSquareJs, faPhp, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Analytics } from '@vercel/analytics/react';
import PortfolioPic from "./img/maniek3.jpg";
import './animations.css';


config.autoAddCss = false;


const words = ['I', 'strive', 'to', 'create', 'the', 'best', 'UI/UX', 'imaginable'];
const maxSkillLevel = 5;

export default function Portfolio() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setAnimationStarted(true);
    document.title = 'Kamil Pawłowski Portfolio';
  }, []);



  return (
    <>
      {/* Introductory Content */}
      <div className="pt-[18rem] md:pt-[13rem]">
        <h1 className="text-center text-2xl sm:text-3xl w-[20rem] typewriter">Hi my name is..</h1>
        <h1 className="flex justify-center pt-5 font-bold md:text-7xl sm:text-5xl text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Kamil Pawłowski</h1>
        <h1 className="pt-5 justify-center font-mono text-2xl sm:3xl flex-nowrap flex">
          I&apos;m a <span className="justify-center font-mono text-2xl  sm:3xl flex-nowrap flex px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:89%_2px] sm:bg-[length:89%_3px] bg-no-repeat bg-bottom">Front-End</span> developer
        </h1>
      </div>
      <Analytics />
      {/* Animation */}
      <div className="pt-[2rem]">
        <h1 className="text-center ">
          <div className="text-center text-xl md:text-2xl">
            {animationStarted && <SlidingWords words={words} />}
          </div>
        </h1>
      </div>

      {/* About Me */}
      <div className="mt-[19rem] sm:mt-[35rem] p-4 h-[33rem] sm:h-[40rem] font-mono text-2xl justify-center text-center">
        <span className="pb-2 justify-center font-mono text-2xl sm:text-3xl flex-nowrap flex px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:30%_2px] sm:bg-[length:19%_3px] md:bg-[length:15%_3px] lg:bg-[length:12%_3px] bg-no-repeat bg-bottom">About me</span>
        <div className='sm:flex-nowrap sm:flex'>
          <h1 className='pt-10 sm:pl-[1rem] md:pl-[5rem] lg:pl-[20%] pl-1 sm:pr-[3rem] sm:w-[72rem] pd-[3rem] sm:leading-10  text-center sm:text-left text-lg sm:text-2xl antialiased tracking-wide not-italic  '>I&apos;m Kamil Pawłowski, a junior <span className='underline'>Front-end</span> developer with a flair for creative coding. My journey into web development began with a fascination for turning ideas into reality through code. Proficient in design and UI optimization, I&apos;m committed to becoming a Full-Stack Engineer, blending design with functionality. Join me in shaping the dynamic web landscape.</h1>
          <Image 
            className=' mt-[2rem] sm:mt-0 sm:ml-0 sm:h-[25rem]  sm:w-[24rem] hidden lg:block'
            src={PortfolioPic}
            width={500}
            height={500}
            alt='test'
          />
        </div>
      </div>

      {/* Skills */}
      <div>
        <span className="pb-2 justify-center font-mono text-2xl sm:text-4xl flex px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:38%_2px] sm:bg-[length:14%_3px] bg-no-repeat bg-bottom">My Skills</span>
        <div className="h-[30rem] flex">
          <div className='sm:ml-[21%] ml-[3rem] mr-5 w-[5rem] h-[100%] py-[1rem]  flex flex-col items-end justify-evenly '>
            <FontAwesomeIcon className=''
              icon={faHtml5} 
              size="6x"
            />
            <FontAwesomeIcon className=''
              icon={faCss3Alt} 
              size="6x"
            />
            <FontAwesomeIcon className=''
              icon={faSquareJs} 
              size="6x"
            />
            <FontAwesomeIcon className=''
              icon={faPhp} 
              size="6x"
            />
          </div>
          <div className=' container w-[52%]  mt-8 flex flex-col space-y-4'>
            <SkillLevel category="Html" level={3}/>
            <SkillLevel category="Css" level={3}/>
            <SkillLevel category="Java script" level={2}/>
            <SkillLevel category="PHP" level={1}/>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-nowrap justify-center text-center mt-[5rem] h-[3rem] mb-[3rem]">
        <span className='pb-1 sm:pb-2 justify-center font-mono text-md sm:text-4xl flex px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:100%_2px] sm:bg-[length:100%_3px] bg-no-repeat bg-bottom'>
        Technologies used for this project
        </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
      {/* Left Cards */}
      <div className="col-span-1 grid grid-cols-1 gap-4 justify-items-end ">
        {/* Card 1: Next.js */}
        <div className=' rounded-lg block border border-violet-500 bg-violet-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ml-1'>
          <div className="bg-stone-900  p-4 rounded-lg h-[13rem] w-[100%] sm:h-[10rem] sm:w-64 flex flex-col justify-start items-start border-b-2 border-[#0000002d] px-3 py-3 text-sm">
           <h2 className="text-2xl sm:text-2xl font-semibold">Next.js</h2>
            <p>Next.js is a popular React framework for building server-rendered React applications.</p>
            <Link href="https://nextjs.org/" className='pt-2 flex'>
              <h1 className='underline decoration-violet-500 underline-offset-[3px] decoration-dashed text-gray-400'>Next.js</h1>
            </Link>
          </div>
        </div>

        {/* Card 2: React */}
        <div className=' rounded-lg block border border-violet-500 bg-violet-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ml-1 '>
          <div className="bg-stone-900  p-4 rounded-lg h-[13rem] w-[100%] sm:h-[10rem] sm:w-64 flex flex-col justify-start items-start border-b-2 border-[#0000002d] px-3 py-3 text-sm">
            <h2 className="text-2xl sm:text-2xl font-semibold">React</h2>
            <p>React is a JavaScript library for building user interfaces.</p>
            <Link href="https://react.dev/" className=' h- flex '>
              <h1 className='underline decoration-violet-500 underline-offset-[3px] decoration-dashed text-gray-400'>React</h1>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Cards */}
      <div className="col-span-1 grid grid-cols-1 gap-4 justify-items-start">
        {/* Card 3: Tailwind CSS */}
        <div className=' rounded-lg block border border-violet-500 bg-violet-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mr-1'>
          <div className="bg-stone-900  p-4 rounded-lg h-[13rem] w-[100%] sm:h-[10rem] sm:w-64 flex flex-col justify-start items-start border-b-2 border-[#0000002d] px-3 py-3 text-sm">
            <h2 className="text-2xl sm:text-2xl font-semibold">Tailwind CSS</h2>
            <p>Tailwind CSS is a utility-first CSS framework that makes styling web applications easy.</p>
            <Link href="https://tailwindcss.com/" className='pt-2 flex '>
              <h1 className='underline decoration-violet-500 underline-offset-[3px] decoration-dashed text-gray-400'>Tailwind</h1>
            </Link>
          </div>
        </div>

        {/* Card 4: TypeScript */}
        <div className=' rounded-lg block border border-violet-500 bg-violet-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mr-1'>
          <div className="bg-stone-900  p-4 rounded-lg h-[13rem] w-[100%] sm:h-[10rem] sm:w-64 flex flex-col justify-start items-start border-b-2 border-[#0000002d] px-3 py-3 text-sm">
            <h2 className="text-2xl sm:text-2xl  font-semibold">TypeScript</h2>
            <p>TypeScript is a statically typed superset of JavaScript that enhances code quality.</p>
            <Link href="https://www.typescriptlang.org/" className='pt-2 flex'>
              <h1 className='underline decoration-violet-500 underline-offset-[3px] decoration-dashed text-gray-400'>Typescript</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
      
    

      {/* Courses */}
      <div className=' bg-grey mt-[5rem] sm:mt-[10rem] text-center  '>
        <span className="pb-2  font-mono text-xl sm:text-4xl  px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:100%_2px] sm:bg-[length:100%_3px] bg-no-repeat bg-bottom">My courses on CodeCademy</span>
      </div>
        <div className='flex justify-center pt-[3rem]'>
          <div className='  w-[5rem]  h-[5rem]   hidden sm:flex'>
            <FontAwesomeIcon 
            icon={faCode} 
            size="3x"
            />       
            </div>
            <div className=' font-mono  w-[25rem] h-[15rem] flex text-center flex-col'>
              <h1 className='text-2xl flex flex-col'>Currently im working on completing a react course</h1>
              <Link href="https://www.codecademy.com/profiles/maniolos3" className='pt-5'>
              
              <h1 className="pb-1 text-xl px-2 underline decoration-violet-500 underline-offset-4 decoration-dashed text-gray-400">Visit my Codecademy profile</h1>
              
            </Link>

            </div>
          
        </div>
      








      {/* Contact */}
      <div className="h-[30rem] items-center justify-center font-mono text-center text-1xl sm:text-2xl bg-stone-850">
        <div className='h-[1rem] bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:90%_2px] sm:bg-[length:70%_3px] bg-no-repeat bg-bottom'/>
        <h1 className='p-2 sm:p-7'>If you&apos;d like to get in touch with me, please don&apos;t hesitate to reach out via email at </h1>
        <span className="pt-7 pb-2 justify-center font-mono text-2xl sm:text-3xl flex-nowrap flex px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:77%_2px] sm:bg-[length:24%_3px] bg-no-repeat bg-bottom">PawlowskiDev@gmail.com</span>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap h-100 justify-center">
        
      </div>
    </>
  );
}
