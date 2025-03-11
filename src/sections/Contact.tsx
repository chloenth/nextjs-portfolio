import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import images from '@/assets/images';

export const ContactSection = () => {
  return (
    <div className='py-16 pt-12'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative z-0 overflow-hidden'>
          {/* Grain Image background */}
          <div
            className='absolute inset-0 -z-10 opacity-5'
            style={{
              backgroundImage: `url(${images.grainImage})`,
            }}
          ></div>

          <h2 className='font-serif text-2xl'>
            Let&apos;s create something amazing together
          </h2>
          <p className='text-sm mt-2'>
            Ready to bring your next project to life? Let&apos;s connect and
            discuss how I can help you achieve your goals.
          </p>
          <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8'>
            <span className='font-semibold'>Contact Me</span>
            <ArrowUpRightIcon className='size-4' />
          </button>
        </div>
      </div>
    </div>
  );
};
