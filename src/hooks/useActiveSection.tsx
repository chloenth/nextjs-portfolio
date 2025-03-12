// hooks/useActiveSection.js
import { useEffect, useState } from 'react';

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');
  let scrollTimeout: NodeJS.Timeout | null = null;

  useEffect(() => {
    const handleScroll = () => {
      // Clear the previous timeout to reset the delay
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Wait 50ms after scrolling stops to update the active section
      scrollTimeout = setTimeout(() => {
        const sections = document.querySelectorAll('section');

        let newActiveSection = activeSection; // Keep track of the latest active section

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();

          // Define a threshold: at least 50% of the section must be visible
          const isInView =
            rect.top <= window.innerHeight * 0.8 &&
            rect.bottom >= window.innerHeight * 0.8;

          if (isInView) {
            newActiveSection = section.id;
          }
        });

        // Only update state if the active section actually changes
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      }, 50); // Wait 50ms after scroll stops before updating
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [activeSection]);

  return activeSection; // State updated with active section
};

export default useActiveSection;
