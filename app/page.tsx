'use client'
import React, { useState, useEffect } from 'react';
import SlidingWords from './scripts';
import SkillLevel from './SkillLevel';
import NextImage from 'next/image'
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faHtml5, faSquareJs, faPhp, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/react";
import PortfolioPic from "./img/maniek3.jpg";
import './animations.css';
import {NextUIProvider} from "@nextui-org/react";
import importedImages from './importer'
import Images from './importer';
import Cards from './Cards';
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
    
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        
        <p className="font-bold text-inherit">Kamil Pawłowski</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Introduction
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#AboutMe" color='foreground'>
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#Skills">
            My Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#Technologies">
            Technologies
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#Courses">
            My Courses
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/contact" variant="light">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
      {/* Introductory Content*/}
      <div className="pt-[18rem] md:pt-[13rem]" id='#'>
        <h1 className="text-center text-2xl sm:text-3xl w-[20rem] typewriter">Hi my name is..</h1>
        <h1 className="flex justify-center pt-5 font-bold md:text-7xl sm:text-5xl text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Kamil Pawłowski</h1>
        <h1 className="pt-5 justify-center font-mono text-2xl sm:3xl flex-nowrap flex">
          I&apos;m a <span className="justify-center font-mono text-2xl  sm:3xl flex-nowrap flex px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:89%_2px] sm:bg-[length:89%_3px] bg-no-repeat bg-bottom">Front-End</span> developer
        </h1>
      </div>
      {/* Animation */}
      <div className="pt-[2rem]">
        <h1 className="text-center ">
          <div className="text-center text-xl md:text-2xl" >
            {animationStarted && <SlidingWords words={words} />}
          </div>
        </h1>
      </div >

      {/* About Me */}
      <div className='pb-[7rem] mt-[13rem] sm:mt-[22rem]' id='AboutMe'></div>
      <div className=" p-4 h-[33rem] sm:h-[40rem] font-mono text-2xl justify-center text-center" >
        <div className="flex items-center justify-center ">
        <span className="pb-2 justify-center font-mono text-2xl sm:text-3xl flex-nowrap flex px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:100%_3px] bg-no-repeat bg-bottom">About me</span>
        </div>
        <div className='sm:flex-nowrap sm:flex'>
          <h1 className='pt-10 sm:pl-[1rem] md:pl-[5rem] lg:pl-[20%] pl-1 sm:pr-[3rem] sm:w-[72rem] pd-[3rem] sm:leading-10  text-center sm:text-left text-lg sm:text-2xl antialiased tracking-wide not-italic  '>I&apos;m Kamil Pawłowski, a junior <span className='underline'>Front-end</span> developer with a flair for creative coding. My journey into web development began with a fascination for turning ideas into reality through code. Proficient in design and UI optimization, I&apos;m committed to becoming a Full-Stack Engineer, blending design with functionality. Join me in shaping the dynamic web landscape.</h1>
          <Image 
            as={NextImage}
            className=' mt-[2rem] sm:mt-0 sm:ml-0 sm:h-[25rem]  sm:w-[24rem] hidden lg:block'
            src="/img/maniek3.jpg"
            width={500}
            height={500}
            alt='My photo'
          />
        </div>
      </div>
      {/* Skills */}
      <div id='Skills' className='pt-[7rem]'>
        <div className="flex items-center justify-center w-auto">
        <span className="pb-2 justify-center font-mono text-2xl sm:text-4xl flex px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:100%_3px] bg-no-repeat bg-bottom">My Skills</span>
        </div>
        
        
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

      <div id='Technologies' className='pt-[7rem]'>
        <div className="flex flex-nowrap justify-center text-center mt-[5rem] h-[2rem] sm:h-[3rem] mb-[2rem]">
        <span className='font-mono text-lg sm:text-4xl px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:100%_2px] sm:bg-[length:100%_3px] bg-no-repeat bg-bottom'>
        Technologies used for this project
        </span>
        </div>
      </div>
      {/*Cards New*/}
      <div className='flex justify-center items-center'>
        <div className='h-auto grid items-center justify-center grid-cols-1 md:grid-cols-4'>
          <Cards CardNumber={0}/>
          <Cards CardNumber={1}/>
          <Cards CardNumber={2}/>
          <Cards CardNumber={3}/>

        </div>
      </div>
      {/* Courses */}
      <div className=' bg-grey pt-[7rem] sm:mt-[10rem] text-center  ' id='Courses'>
        <span className="pb-2  font-mono text-xl sm:text-4xl  px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:100%_2px] sm:bg-[length:100%_3px] bg-no-repeat bg-bottom">My courses on CodeCademy</span>
      </div>
        <div className='flex justify-center pt-[3rem]'>
          <div className='  w-[5rem]  h-[5rem]   hidden sm:flex'>
            <FontAwesomeIcon 
            icon={faCode} 
            size="3x"
            />       
            </div>
            <div className=' font-mono w-[25rem] h-[15rem] flex text-center flex-col'>
              <h1 className='text-2xl flex flex-col'>Currently im working on completing a react course</h1>
              <Link
              className='pt-4 pl-8   text-xl text-center flex flex-nowrap text-blue-500' 
              href="https://www.codecademy.com/profiles/maniolos3" 
              showAnchorIcon
              >
              
              Visit my Codecademy profile 
              
            </Link>

            </div>
          
        </div>
      


      {/* Contact */}
      <div className="h-[30rem] items-center justify-center font-mono text-center text-1xl sm:text-2xl bg-stone-850">
        <div className=''/>
        <h1 className='p-2 sm:p-7'>If you&apos;d like to get in touch with me, please don&apos;t hesitate to reach out via email at </h1>
        <div className="flex items-center justify-center ">
        <span className="pt-7 pb-2 justify-center font-mono text-2xl sm:text-3xl flex px-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-[length:100%_2px] sm:bg-[length:100%_3px] bg-no-repeat bg-bottom w-max">
          PawlowskiDev@gmail.com
        </span>
        </div>
      </div>

      {/* Footer */}
      
      <div className="flex flex-wrap h-100 justify-center">
        
      </div>
      
    </>
  );
}
