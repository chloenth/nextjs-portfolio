import Image from 'next/image';
import Link from 'next/link';

import images from '@/assets/images';

import ArrowDown from '@/assets/icons/arrow-down.svg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';

import { HeroOrbit } from '@/components/HeroOrbit';

import { ScrollLink } from '@/components/ScrollLink';

export const HeroSection = () => {
  return (
    <section
      id='home'
      className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'
    >
      {/* Mask layer*/}
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
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
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration='38s'
          shouldSpin
          spinDuration='6s'
        >
          <StarIcon className='size-12 text-emerald-300' />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration='40s'
          shouldSpin
          spinDuration='6s'
        >
          <StarIcon className='size-8 text-emerald-300' />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration='48s'
          shouldSpin
          spinDuration='6s'
        >
          <StarIcon className='size-28 text-emerald-300' />
        </HeroOrbit>

        {/* Hero orbit with Sparkle icon */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration='30s'
          shouldSpin
          spinDuration='3s'
        >
          <SparkleIcon className='size-8 text-emerald-300/20' />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration='32s'
          shouldSpin
          spinDuration='3s'
        >
          <SparkleIcon className='size-5 text-emerald-300/20' />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration='36s'
          shouldSpin
          spinDuration='3s'
        >
          <SparkleIcon className='size-10 text-emerald-300/20' />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration='44s'
          shouldSpin
          spinDuration='3s'
        >
          <SparkleIcon className='size-14 text-emerald-300/20' />
        </HeroOrbit>

        {/* Hero orbit with circle */}
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
          <div className='size-2 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
          <div className='size-2 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>

        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s'>
          <div className='size-3 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
      </div>

      {/* Hero container */}
      <div className='container relative z-20'>
        {/* Banner */}
        <div className='flex flex-col items-center'>
          <Image
            src={images.memojiComputer}
            alt='Person peeking from behind laptop'
            width={100}
            height={100}
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
            </div>
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
          <ScrollLink
            sectionId='projects'
            href='#projects'
            className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'
          >
            <span className='font-semibold'>Explore My Work</span>
            <div>
              <ArrowDown className='size-4' />
            </div>
          </ScrollLink>

          <ScrollLink
            sectionId='contact'
            href='#contact'
            className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'
          >
            <span>👋</span>
            <span className='font-semibold'>Let&apos;s Connect</span>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};
