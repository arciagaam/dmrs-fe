import React, { useEffect, useRef } from 'react';

function Animate({ animationClass, children, animationDelay }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = sectionRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
          element.classList.add('animate__animated', animationClass, animationDelay);
        } else {
          element.classList.remove('animate__animated', animationClass, animationDelay);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationClass]);

  return (
    <div ref={sectionRef}>
      {children}
    </div>
  );
}

export default Animate;
