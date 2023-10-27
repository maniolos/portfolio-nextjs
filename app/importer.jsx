import React from 'react';
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
    name: 'Typescript',
    href: Image4,
  },
];

function Images({ imageNumber }) {
  // Ensure imageNumber is within the valid range
  if (imageNumber >= 0 && imageNumber < importedImages.length) {
    const selectedImage = importedImages[imageNumber];
    return (
      
        <Image
          priority
          src={selectedImage.href}
          alt={selectedImage.name}
          width={48}
          height={42}
        />
      
    );
  } else {
    return <div>No image found for imageNumber {imageNumber}</div>;
  }
}

export default Images;