import React, { useRef, useEffect, useState } from 'react';
import styles from './styles.module.css';

const ShrinkOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when the target element is in view
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.unobserve(entry.target); // Stop observing once item is visible
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.shrinkOnScroll} ${isVisible ? styles.shrink : ''}`}
    >
      {children}
    </div>
  );
};

export default ShrinkOnScroll;