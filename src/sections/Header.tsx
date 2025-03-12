'use client';
import Link from 'next/link';

import useActiveSection from '@/hooks/useActiveSection';
import { ScrollLink } from '@/components/ScrollLink';

const navList = ['home', 'projects', 'about', 'contact'];

export const Header = () => {
  const activeSection = useActiveSection(); // Get the active section from the custom hook

  return (
    <div className='flex justify-center items-center fixed top-3 w-full z-10'>
      <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        {navList.map((item) => (
          <ScrollLink
            key={item}
            sectionId={item}
            href={`#${item}`}
            className={`nav-item ${activeSection === item ? 'active' : ''}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </ScrollLink>
        ))}
      </nav>
    </div>
  );
};
