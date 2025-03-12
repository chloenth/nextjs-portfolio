// hooks/useActiveSection.js
import { useEffect, useState } from 'react';

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // Define a threshold: at least 50% of the section must be visible
        const isInView =
          rect.top <= window.innerHeight * 0.8 &&
          rect.bottom >= window.innerHeight * 0.8;

        // Check if the section is in view
        if (isInView) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll); // Listen to scroll events

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return activeSection; // State updated with active section
};

export default useActiveSection;
