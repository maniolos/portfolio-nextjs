import React, { useEffect, useRef } from 'react';
import styles from './animations.css';

const SlidingWords = ({ words }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    
    const container = containerRef.current;
    const wordElements = container.getElementsByClassName('word');

    const animateWords = () => {
      let delay = 0;
      Array.from(wordElements).forEach((wordElement, index) => {
        setTimeout(() => {
          wordElement.classList.add('slideIn');
        }, delay);
        delay += 300; // Adjust the delay timing between words as desired
      });
    };

    const animationDelay = 3000; // Delay in milliseconds before starting the animation
    const animationTimer = setTimeout(() => {
      animateWords();
    }, animationDelay);

    return () => {
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span className="word">{word}</span>
          {index !== words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SlidingWords;

