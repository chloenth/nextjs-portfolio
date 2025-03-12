'use client';
import Link from 'next/link';

import useActiveSection from '@/hooks/useActiveSection';

export const Header = () => {
  const activeSection = useActiveSection(); // Get the active section from the custom hook

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault(); // Prevent default link behavior (no URL change)

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className='flex justify-center items-center fixed top-3 w-full z-10'>
      <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        <Link
          href='#home'
          onClick={(e) => handleScroll(e, 'home')}
          className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link
          href='#projects'
          onClick={(e) => handleScroll(e, 'projects')}
          className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
        >
          Projects
        </Link>
        <Link
          href='#about'
          onClick={(e) => handleScroll(e, 'about')}
          className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
        >
          About
        </Link>
        <Link
          href='#contact'
          onClick={(e) => handleScroll(e, 'contact')}
          className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
