import Image from 'next/image';

import images from '@/assets/images';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';

const portfolioProjects = [
  {
    company: 'Personal project',
    year: '2024',
    title: 'Smart Brain',
    results: [
      { title: 'A platform for effortless face detection!' },
      {
        title:
          'With a secure login and signup system, your data remains protected.',
      },
      {
        title:
          'PostgreSQL database integration and Node.js backend ensure efficient storage and retrieval of user information, including tracking the number of image submissions for face detection',
      },
    ],
    link: 'https://smart-brain-zfvm.onrender.com',
    sourceCode: 'https://github.com/chloenth/smart-brain',
    image: images.smartBrainProject,
    techs: ['React', 'Tachyons'],
  },
  {
    company: 'Personal project',
    year: '2024',
    title: 'Smart Brain Server',
    results: [
      {
        title:
          'The Smart Brain Server acts as the backbone of the Smart Brain application, providing the necessary API endpoints to handle requests and responses of the application.',
      },
      { title: 'Face Detection with Clarifai Model' },
      { title: 'Connect to PostgreSQL Database' },
      {
        title:
          'Manage User Authentication and Registration with the database integration',
      },
    ],
    link: 'https://smart-brain-server-fgrv.onrender.com',
    sourceCode: 'https://github.com/chloenth/smart-brain-server',
    image: images.smartBrainServer,
    techs: ['NodeJS', 'Restful API', 'AI-Clarifai Model', 'Postgresql'],
  },
  {
    company: 'Quantum Dynamics',
    year: '2023',
    title: 'AI Startup Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/Z7I5uSRHMHg',
    image: images.aiStartupLandingPage,
    techs: ['react', 'tachyons'],
  },
];

export const ProjectsSection = () => {
  return (
    <section id='projects' className='pb-16 lg:py-24'>
      <div className='container'>
        {/* Section Header */}
        <SectionHeader
          eyebrow='Real-world Results'
          title='Featured Projects'
          description='See how I transformed concepts into engaging digital experiences.'
        />

        {/* Projects */}
        <div className='flex flex-col mt-10 md:mt-20 gap-20'>
          {/* Project Card */}
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className='px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20'
            >
              {/* Grid layout on lg screen - Project Card */}
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                {/* First column of Grid layout on lg screen - Project Card */}
                <div className='lg:pb-16'>
                  {/* Project Info - Project Card */}
                  <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex gap-2 font-bold uppercase tracking-widest text-sm'>
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-4xl'>
                    {project.title}
                  </h3>

                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />

                  {/* Project Description */}
                  <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className='flex gap-2 text-sm md:text-base text-white/50'
                      >
                        <CheckCircleIcon className='size-5 md:text-size-6' />
                        <span className='flex-1'>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Project tech */}
                  <ul className='flex flex-wrap gap-4 mt-6'>
                    {project.techs.map((tech) => (
                      <li
                        key={tech}
                        className='bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 px-6 text-emerald-900 font-semibold text-sm md:text-base'
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className='flex flex-col md:flex-row md:gap-8 lg:gap-0 lg:flex-col'>
                    <a href={project.link} target='_blank'>
                      <button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className='size-4' />
                      </button>
                    </a>

                    <a href={project.sourceCode} target='_blank'>
                      <button className='border border-white/20 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
                        <span>View Source Code</span>
                        <ArrowUpRightIcon className='size-4' />
                      </button>
                    </a>
                  </div>
                </div>

                {/* Second column of Grid layout on lg screen - Project Card */}
                <div className='relative'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute w-full h-auto lg:w-[800px] lg:h-full lg:object-cover lg:object-center rounded-xl lg:max-w-none'
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
