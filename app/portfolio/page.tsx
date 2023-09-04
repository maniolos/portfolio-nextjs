'use client';
import './animations.css';
import SlidingWords from './scripts';
import { useSelectedLayoutSegment } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';
import useScrollPosition from "./UseScrollHook";


export default function Portfolio() {
  const [animationStarted, setAnimationStarted] = useState(true);
  const words = ['I', 'strive', 'to', 'create', 'the', 'best', 'UI/UX', 'imaginable'];
  const useScroll = useScrollPosition();
  console.log(useScroll)

  }, []);
  return (
    <>
      <div className="pt-[10rem]">
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
        <div>
        </div>
        <div className="h-[64rem]"></div>
        <div>

        </div>
      </div>
      
      
      <div className="flex flex-wrap h-100 justify-center">
        <a href="/" className="rounded-lg px-3 py-2 text-slate-200 font-medium hover:bg-slate-100 hover:text-slate-900">Back</a>
      </div>
    </>
  );
}
