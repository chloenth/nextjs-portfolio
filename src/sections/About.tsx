import Image from 'next/image';

import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';

import images from '@/assets/images';

import StarIcon from '@/assets/icons/star.svg';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import { TechIcon } from '@/components/TechIcon';
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
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
  },
  {
    title: 'Photography',
    emoji: '📸',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
  },
  {
    title: 'Photography',
    emoji: '📷',
  },
  {
    title: 'Music',
    emoji: '🎵',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♀️',
  },
  {
    title: 'Reading',
    emoji: '📚',
  },
];

export const AboutSection = () => {
  return (
    <div className='pb-20'>
      <div className='container'>
        {/* Section Header */}
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse Into My World'
          description='Learn more about who I am, what I do, and what inspires me.'
        />

        {/* About Info */}
        <div className='mt-20 flex flex-col gap-8'>
          {/* My Reads card */}
          <Card className='h-[320px]'>
            <CardHeader
              title='My Reads'
              description='Explore the books shaping my perspectives.'
            />

            <div className='w-40 mx-auto mt-8'>
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
          <Card className='h-[320px] p-0'>
            <CardHeader
              title='My Toolbox'
              description='Explore the technologies and tools I use to craft exceptional
                digital experiences.'
              className='px-6 pt-6'
            />

            {/* Toolbox Info */}
            <ToolBoxItems items={toolBoxItems} className='mt-6' />
            <ToolBoxItems
              items={toolBoxItems}
              className='mt-6'
              itemsWrapperClassName='-translate-x-1/2'
            />
          </Card>

          {/* Beyond the Code */}
          <Card>
            <CardHeader
              title='Beyond the Code'
              description='Explore my interests and hobbies beyond the digital realm.'
            />

            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <Image src={images.mapImage} alt='map' width={300} height={300} />
            <Image
              src={images.smileMemoji}
              alt='smiling memoji'
              width={300}
              height={300}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};
