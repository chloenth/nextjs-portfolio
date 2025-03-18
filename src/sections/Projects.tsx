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
      { title: 'Effortless face detection platform.' },
      {
        title: 'Secure login and signup system.',
      },
      {
        title: 'Connects to backend via API calls using Axios.',
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
          'Acts as the backbone of the Smart Brain application, providing the necessary API endpoints to handle requests and responses of the application.',
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
    company: 'Personal project',
    year: '2025',
    title: 'Hospital Management System',
    results: [
      {
        title: 'Admin dashboard with user management.',
      },
      {
        title: 'Supports search, sorting, and pagination.',
      },
      {
        title:
          'Secure API token handling in cookies with automatic refresh on expiration.',
      },
    ],
    link: 'https://drive.google.com/file/d/1KOmIC2X9tUOs_0OwH_57AYTrvr4K2cW_/view',
    sourceCode: 'https://github.com/chloenth/hospital-management-system',
    image: images.hospitalManagementSystem,
    techs: ['React', 'React Router', 'Tailwind CSS', 'Shadcn/UI'],
  },
  {
    company: 'Personal project',
    year: '2025',
    title: 'Mycare Portal',
    results: [
      {
        title:
          'Backend for a Hospital Management System using microservice architecture.',
      },
      {
        title:
          'API Gateway handles client requests, while identity, profile, and search microservices manage authentication, user data, and fast search.',
      },
      {
        title:
          'The identity microservice handles authentication using access and refresh tokens, storing them in httpOnly cookies for security and sending them back to the client.',
      },
      {
        title:
          'PostgreSQL and Elasticsearch ensure secure storage and high-performance search.',
      },
      {
        title:
          'Kafka listens for user creation and updates from the identity microservice and profile microservice, synchronizing data with the search service.',
      },
      {
        title:
          'Redis caches logged-in user information in the search microservice for faster access.',
      },
      {
        title:
          'This setup ensures real-time updates, efficiency, and scalability.',
      },
    ],
    sourceCode: 'https://github.com/chloenth/mycare-portal',
    techs: [
      'Spring Boot',
      'Spring Security',
      'Elastic Search',
      'Redis',
      'Kafka',
      'Postgresql',
      'Microservice Architecture',
    ],
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
              <div
                className={`lg:grid ${
                  project.image && 'lg:grid-cols-2'
                } lg:gap-16`}
              >
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

                  <div
                    className={`flex flex-col md:flex-row md:gap-8 ${
                      project.image && 'lg:gap-0 lg:flex-col'
                    }`}
                  >
                    {project.link && (
                      <a href={project.link} target='_blank'>
                        <button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
                          <span>View Demo</span>
                          <ArrowUpRightIcon className='size-4' />
                        </button>
                      </a>
                    )}

                    <a href={project.sourceCode} target='_blank'>
                      <button className='border border-white/20 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
                        <span>View Source Code</span>
                        <ArrowUpRightIcon className='size-4' />
                      </button>
                    </a>
                  </div>
                </div>

                {/* Second column of Grid layout on lg screen - Project Card */}
                {project.image && (
                  <div className='relative'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={820}
                      height={820}
                      className='mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 w-full h-auto lg:w-[800px] lg:object-cover lg:object-center rounded-xl lg:max-w-none'
                    />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
