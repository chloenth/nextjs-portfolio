'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';

import images from '@/assets/images';

import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github.svg';
import TypeScriptIcon from '@/assets/icons/typescript.svg';
import NextJsIcon from '@/assets/icons/nextjs.svg';
import JavaIcon from '@/assets/icons/java.svg';
import SpringBootIcon from '@/assets/icons/spring-boot.svg';
import NodeJsIcon from '@/assets/icons/nodejs.svg';

import { CardHeader } from '@/components/CardHeader';
import { ToolBoxItems } from '@/components/ToolboxItems';

const toolBoxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'NextJS',
    iconType: NextJsIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    title: 'TypeScript',
    iconType: TypeScriptIcon,
  },
  {
    title: 'Java',
    iconType: JavaIcon,
  },
  {
    title: 'Spring Boot',
    iconType: SpringBootIcon,
  },
  {
    title: 'NodeJS',
    iconType: NodeJsIcon,
  },
  {
    title: 'NodeJS',
    iconType: NodeJsIcon,
  },
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    left: '42%',
    top: '42%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '8%',
    top: '32%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♀️',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%',
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section id='about' className='pb-20 lg:py-28'>
      <div className='container'>
        {/* Section Header */}
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse Into My World'
          description='Learn more about who I am, what I do, and what inspires me.'
        />

        {/* About Info */}
        <div className='mt-20 flex flex-col gap-8'>
          <div className='grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3'>
            {/* My Reads card */}
            <Card className='h-[320px] md:col-span-2 lg:col-span-1'>
              <CardHeader
                title='My Reads'
                description='Explore the books shaping my perspectives.'
              />

              <div className='w-40 mx-auto mt-2 md:mt-0'>
                <Image
                  src={images.bookImage}
                  alt='Book cover'
                  width={300}
                  height={300}
                  className='w-full'
                />
              </div>
            </Card>

            {/* Toolbox card */}
            <Card className='h-[320px] md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='My Toolbox'
                description='Explore the technologies and tools I use to craft exceptional
                digital experiences.'
              />

              {/* Toolbox Info */}
              <ToolBoxItems
                items={toolBoxItems}
                itemsWrapperClassName='animate-move-left [animation-duration:30s]'
              />
              <ToolBoxItems
                items={toolBoxItems}
                className='mt-6'
                itemsWrapperClassName='-translate-x-1/2 animate-move-right [animation-duration:15s]'
              />
            </Card>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3'>
            {/* Beyond the Code - Hobbies Card */}
            <Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='Beyond the Code'
                description='Explore my interests and hobbies beyond the digital realm.'
                className='px-6 py-6'
              />

              <div className='relative flex-1' ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className='font-medium text-gray-950'>
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Map */}
            <Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
              <Image
                src={images.mapImage}
                alt='map'
                width={300}
                height={300}
                className='h-full w-full object-cover object-bottom'
              />

              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 outline outline-2 -outline-offset-2 outline-gray-950/30'>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>
                <Image
                  src={images.smileMemoji}
                  alt='smiling memoji'
                  width={300}
                  height={300}
                  className='size-20'
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
