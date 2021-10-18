import React, { useState, useRef, useEffect, FC, ReactNode } from "react";

interface FadeInContainerProps {
  children: ReactNode;
}

const FadeInContainer: FC<FadeInContainerProps> = (props) => {
  const { children } = props;
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    const current = domRef.current;
    console.log("current", current);
    if (current) {
      observer.observe(current);

      return () => {
        observer.unobserve(current);
      };
    }
  }, []); //eslint-disable-line

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInContainer;
