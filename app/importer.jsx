// importer.tsx
// import Image1 from './img/next.png';
import React, { useState } from 'react';
import Image1 from './img/nextjs2.svg';
import Image2 from './img/react2.svg';
import Image3 from './img/tailwind2.svg';
import Image4 from './img/typescript.svg';
import Image from 'next/image';
const importedImages = [

  {
    name: 'NextJs',
    href: Image1,
  },
  {
    name: 'React',
    href: Image2,
  },
  {
    name: 'Tailwind',
    href: Image3,
  },
  {
    name: 'Typescirpt',
    href: Image4,
  },
];
function YourComponent() {
    const [hoveredImage, setHoveredImage] = useState(null);
  
    const handleMouseEnter = (imageName) => {
      setHoveredImage(imageName);
    };
  
    const handleMouseLeave = () => {
      setHoveredImage(null);
    };
    }
export default importedImages;

// {
//     name: 'nextpng',
//     href: Image1,
// },