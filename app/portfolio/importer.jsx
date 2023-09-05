// importer.tsx
// import Image1 from './img/next.png';
import React, { useState } from 'react';
import Image1 from './img/nextjs2.svg';
import Image2 from './img/react2.svg';
import Image3 from './img/tailwind2.svg';
import Image4 from './img/typescript.svg';
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
  
    return (
        <div className="flex flex-wrap justify-center">
          {importedImages.map((image) => (
            <div
              key={image.name}
              className={`w-2/5 p-1 m-3 sm:w-32 md:w-64 bg-gradient-to-r from-pink-500 to-violet-500 ${
                hoveredImage === image.name ? 'hovered' : ''
              }`}
            >
              <div className="h-full w-full bg-stone-950 p-2">
                <Image
                  className="border-1"
                  src={image.href}
                  width={250}
                  height={250}
                  alt={image.name}
                  onMouseEnter={() => handleMouseEnter(image.name)}
                  onMouseLeave={handleMouseLeave}
                />
                {hoveredImage === image.name && (
                  <div className="hovered-content">
                    <p>{image.name}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }
export default importedImages;

// {
//     name: 'nextpng',
//     href: Image1,
// },