import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import images from '@/assets/images';
import Link from 'next/link';

export const ContactSection = () => {
  return (
    <section id='contact' className='py-16 pt-12 lg:py-24 lg:pt-20'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0 overflow-hidden'>
          {/* Grain Image background */}
          <div
            className='absolute inset-0 -z-10 opacity-5'
            style={{
              backgroundImage: `url(${images.grainImage})`,
            }}
          ></div>

          <div className='flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>
                Let&apos;s create something amazing together
              </h2>
              <p className='text-sm md:text-base mt-2'>
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>

            <div>
              <Link
                href='mailto:chloe.huongnth@gmail.com?subject=Contact%20Regarding%20Your%20Work&body=Hello,%20I%20would%20like%20to%20reach%20out...'
                className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900'
              >
                <span className='font-semibold'>Contact Me</span>
                <ArrowUpRightIcon className='size-4' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
