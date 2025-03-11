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
    <div className='pb-96'>
      {/* Section Header */}
      <SectionHeader
        eyebrow='About Me'
        title='A Glimpse Into My World'
        description='Learn more about who I am, what I do, and what inspires me.'
      />

      {/* About Info */}
      <div>
        {/* Book card */}
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>

          <Image
            src={images.bookImage}
            alt='Book cover'
            width={300}
            height={300}
          />
        </Card>

        {/* Toolbox card */}
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>
              Explore the technologies and tools I use to craft exceptional
              digital experiences.
            </p>
          </div>

          {/* Toolbox */}
          <div>
            {toolBoxItems.map((item) => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Beyond the Code */}
        <Card>
          <div>
            <StarIcon />
            <h3>Beyond the Code</h3>
            <p>Explore my interests and hobbies beyond the digital realm.</p>
          </div>

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
  );
};
