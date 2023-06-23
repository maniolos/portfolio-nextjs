import { useEffect, useState, useRef } from "react";
const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
      }
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }, []);
  
    return scrollPosition;
  };
const animationOnScroll = (array) => {
    const elements = document.getElementsByClassName('AnimationOnScroll');
    console.log(elements)
    return  <span className="tester">length is = { array }</span>
    
    }
    export default (useScrollPosition, animationOnScroll)

