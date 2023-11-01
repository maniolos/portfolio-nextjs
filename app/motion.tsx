import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useInView } from "framer-motion";

interface Props{
  children: JSX.Element;
  width?: 'fit-content' | '100%';
}

export const Reveal = ({ children, width = 'fit-content'}: Props ) =>{
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

  // Trigger animation based on scroll position
  useEffect(() => {
    if (isInView) {
      // When the user scrolls to a certain position (e.g., 300 pixels), enlarge the text
      mainControls.start('visible');
    }
  }, [isInView]);
 
  return (
    <div ref={ref} style={{position : 'relative',  overflow:'hidden'}}>

      <motion.div
        variants={{
          hidden: {opacity: 0, y: 75},
          visible: {opacity:1, y:0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay:0.2}}
        >
          {children}
      </motion.div>
    </div>
  );
}

