import Image from 'next/image';
import images from '@/assets/images';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      {/* Grain Image background */}
      <div
        className='absolute inset-0 -z-10 opacity-5'
        style={{
          backgroundImage: `url(${images.grainImage})`,
        }}
      ></div>

      {/* Rings background */}
      <div className='size-[620px] hero-ring'></div>
      <div className='size-[820px] hero-ring'></div>
      <div className='size-[1020px] hero-ring'></div>
      <div className='size-[1220px] hero-ring'></div>

      {/* Hero orbit with Star icon */}
      <HeroOrbit size={800} rotation={-72}>
        <StarIcon className='size-28 text-emerald-300' />
      </HeroOrbit>

      <HeroOrbit size={550} rotation={20}>
        <StarIcon className='size-12 text-emerald-300' />
      </HeroOrbit>

      <HeroOrbit size={590} rotation={98}>
        <StarIcon className='size-8 text-emerald-300' />
      </HeroOrbit>

      <HeroOrbit size={430} rotation={-14}>
        <StarIcon className='size-8 text-emerald-300/20' />
      </HeroOrbit>

      <HeroOrbit size={440} rotation={79}>
        <StarIcon className='size-5 text-emerald-300/20' />
      </HeroOrbit>

      <HeroOrbit size={530} rotation={178}>
        <StarIcon className='size-10 text-emerald-300/20' />
      </HeroOrbit>

      <HeroOrbit size={710} rotation={144}>
        <StarIcon className='size-14 text-emerald-300/20' />
      </HeroOrbit>

      {/* Hero container */}
      <div className='container'>
        {/* Banner */}
        <div className='flex flex-col items-center'>
          <Image
            src={images.memojiComputer}
            alt='Person peeking from behind laptop'
            width={100}
            height={100}
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full'></div>
            <div className='text-sm font-medium'>
              Available for new projects
            </div>
          </div>
        </div>

        <div className='max-w-lg mx-auto'>
          {/* Heading */}
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
            Building Exceptional User Experiences
          </h1>

          {/* Description */}
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            project.
          </p>
        </div>

        {/* Action buttons */}
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Explore My Work</span>
            <div>
              <ArrowDown className='size-4' />
            </div>
          </button>

          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>👋</span>
            <span className='font-semibold'>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
