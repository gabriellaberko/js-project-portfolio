import React, { useRef, useEffect, useState } from "react";
import { StyledAnimatedSection } from "./AnimatedSection.styled";


export const AnimatedSection = ({ children, direction = "up" }) => {
  
  // create a reference to a DOM element. Becomes the actual DOM node so the IntersectionObserver can observe it.
  const ref = useRef();
  
  // the visibility control (defaulting to false), making the component dynamic. When we update the value of visible by calling setVisible, React will re-render the component
  const [visible, setVisible] = useState(false);


  // observes if the referenced element comes into view (becomes visible) - then call setVisible(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);


  return (
    <StyledAnimatedSection ref={ref} visible={visible} direction={direction}>
      {children}
    </StyledAnimatedSection>
  );
};
