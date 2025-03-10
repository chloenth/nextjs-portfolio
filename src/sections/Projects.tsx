import Image from 'next/image';

import images from '@/assets/images';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';

const portfolioProjects = [
  {
    company: 'Acme Corp',
    year: '2022',
    title: 'Dark Saas Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/4k7IdSLxh6w',
    image: images.darkSaasLandingPage,
  },
  {
    company: 'Innovative Co',
    year: '2021',
    title: 'Light Saas Landing Page',
    results: [
      { title: 'Boosted sales by 20%' },
      { title: 'Expanded customer reach by 35%' },
      { title: 'Increased brand awareness by 15%' },
    ],
    link: 'https://youtu.be/7hi5zwO75yc',
    image: images.lightSaasLandingPage,
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
  },
];

export const ProjectsSection = () => {
  return (
    <div>
      <div className='container'>
        <div className='flex justify-center'>
          <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text'>
            Real-world Results
          </p>
        </div>

        <h2 className='font-serif text-3xl text-center mt-6'>
          Featured Projects
        </h2>
        <p className='text-center text-white/60 mt-4'>
          See how I transformed concepts into engaging digital experiences.
        </p>

        {/* Projects */}
        <div className='flex flex-col mt-10'>
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className='bg-gray-800 rounded-3xl outline outline-offset-1 outline-white/20 p-8'
            >
              <div className='flex'>
                <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex gap-2 font-bold uppercase tracking-widest text-sm'>
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              </div>

              <h3 className='font-serif text-2xl mt-2'>{project.title}</h3>

              <hr className='border-t-2 border-white/5 mt-4' />

              <ul className='flex flex-col gap-4 mt-4'>
                {project.results.map((result) => (
                  <li
                    key={result.title}
                    className='flex gap-2 text-sm text-white/50'
                  >
                    <CheckCircleIcon className='size-5' />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>

              <a href={project.link}>
                <button className='bg-white text-gray-950 h-12 w-full rounded-xl font-semibold'>
                  View Live Site
                </button>
              </a>

              <Image
                src={project.image}
                alt={project.title}
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
