'use client';
import Link from 'next/link';
import { ComponentPropsWithoutRef, useCallback } from 'react';

type ScrollLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  sectionId: string;
};

export const ScrollLink = ({
  children,
  sectionId,
  ...props
}: ScrollLinkProps) => {
  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault(); // Prevent default link behavior (no URL change)

      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    },
    []
  );

  return (
    <Link onClick={(e) => scrollToSection(e, sectionId)} {...props}>
      {children}
    </Link>
  );
};
