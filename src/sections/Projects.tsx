import Image from 'next/image';

import images from '@/assets/images';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

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
    <section className='pb-16'>
      <div className='container'>
        <div className='flex justify-center'>
          <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text'>
            Real-world Results
          </p>
        </div>

        <h2 className='font-serif text-3xl md:text-5xl text-center mt-6'>
          Featured Projects
        </h2>
        <p className='text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto'>
          See how I transformed concepts into engaging digital experiences.
        </p>

        {/* Projects */}
        <div className='flex flex-col mt-10 md:mt-20 gap-20'>
          {/* Project Card */}
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className='bg-gray-800 rounded-3xl outline outline-offset-1 outline-white/20 px-8 pt-8 md:pt-12 md:px-10 overflow-hidden relative'
            >
              <div
                className='absolute inset-0 -z-10 opacity-5'
                style={{ backgroundImage: `url(${images.grainImage})` }}
              ></div>
              <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex gap-2 font-bold uppercase tracking-widest text-sm'>
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>

              <h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-4xl'>
                {project.title}
              </h3>

              <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />

              <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                {project.results.map((result) => (
                  <li
                    key={result.title}
                    className='flex gap-2 text-sm md:text-base text-white/50'
                  >
                    <CheckCircleIcon className='size-5 md:text-size-6' />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>

              <a href={project.link}>
                <button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
                  <span>Visit Live Site</span>
                  <ArrowUpRightIcon className='size-4' />
                </button>
              </a>

              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className='mt-8 -mb-4 md:mb-0 w-full'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
