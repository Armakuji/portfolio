import React, { useState, useRef, useEffect, FC, ReactNode } from "react";

interface FadeInContainerProps {
  children: ReactNode;
}

const FadeInContainer: FC<FadeInContainerProps> = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  const { children } = props;
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    const current = domRef.current;
    if (!current) return;

    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);

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
