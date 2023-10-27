import React from 'react';
// import Image1 from '/img/nextjs2.svg';
// import Image2 from '/img/react2.svg';
// import Image3 from '/img/tailwind2.svg';
// import Image4 from '/img/typescript.svg';
import NextImage from "next/image";
// import Image from 'next/image';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
const importedImages = [
  {
    name: 'NextJs',
    shortlink: 'nextjs.org',
    desc: 'Next.js is a flexible React framework that gives you building blocks to create fast web applications.',
    link: 'https://nextjs.org/',
    src: '/img/nextjs2.svg'
    // src: 'https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png',
  },
  {
    name: 'React',
    shortlink: 'react.dev',
    desc: 'React enables developers to construct user interfaces using modular components for efficient web development.',
    link: 'https://react.dev/',
    src: '/img/react2.svg'
  },
  {
    name: 'Tailwind',
    shortlink: 'tailwindcss.com',
    desc: 'A utility-first CSS framework that empowers developers to quickly create modern websites directly within their HTML structure.',
    link: 'https://tailwindcss.com/',
    src: '/img/tailwind2.svg'
  },
  {
    name: 'Typescript',
    shortlink: 'typescriptlang.org',
    desc: 'TypeScript extends JavaScript with static typing for enhanced code reliability and maintainability.',
    link: 'https://typescriptlang.org',
    src: '/img/typescript.svg'
  },
];

function Cards({ CardNumber }) {
  // Ensure imageNumber is within the valid range
  if (CardNumber >= 0 && CardNumber < importedImages.length) {
    const selectedImage = importedImages[CardNumber];
    return (
        <Card className="max-w-[300px] h-[250px] bg-stone-900 rounded-lg pb-2 p-1 m-2">
            <CardHeader className="flex gap-3 pl-4">
            <Image
            as={NextImage}
            alt={`${selectedImage.name} logo`}
            height={40}
            radius="sm"
            src={selectedImage.src}
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-base  ">{selectedImage.name}</p>
            <p className="text-sm text-slate-500">{selectedImage.shortlink}</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody className='py-3'>
          <p>{selectedImage.desc}</p>
        </CardBody>
        <Divider/>
        <CardFooter>
          <Link 
            className=' text-blue-500'
            isExternal
            showAnchorIcon
            href={selectedImage.link}
          >
            Visit {selectedImage.name}.   
          </Link>
        </CardFooter>
      </Card>
        
      
    );
  } else {
    return <div>No image found for CardNumber {CardNumber}</div>;
  }
}

export default Cards;