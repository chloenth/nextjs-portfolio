import images from '@/assets/images';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={twMerge(
        'bg-gray-800 rounded-3xl outline outline-offset-1 outline-white/20 overflow-hidden relative z-0',
        className
      )}
      {...other}
    >
      {/* Grain background - Card */}
      <div
        className='absolute inset-0 -z-10 opacity-5'
        style={{ backgroundImage: `url(${images.grainImage})` }}
      ></div>
      {children}
    </div>
  );
};
