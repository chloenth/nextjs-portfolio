import Image from 'next/image';

import images from '@/assets/images';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';

const testimonials = [
  {
    name: 'Alex Turner',
    position: 'Marketing Manager @ TechStartups',
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: images.memojiAvatar1,
  },
  {
    name: 'Olivia Green',
    position: 'Head of Design @ GreenLeaf',
    text: 'Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.',
    avatar: images.memojiAvatar2,
  },
  {
    name: 'Daniel White',
    position: 'CEO @ InnovateCo',
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: images.memojiAvatar3,
  },
  {
    name: 'Emily Carter',
    position: 'Product Manager @ GlobalTech',
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: images.memojiAvatar4,
  },
  {
    name: 'Michael Brown',
    position: 'Director of IT @ MegaCorp',
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: images.memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className='py-16 lg:py-24'>
      <div className='container'>
        {/* Section Header */}
        <SectionHeader
          eyebrow='Happy Clients'
          title='What Clients Say About Me'
          description="Don't just take my word for it. See what my clients have to say about my work"
        />

        {/* Testimonials */}
        <div className='mt-16 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex gap-8 flex-none'>
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className='max-w-xs md:max-w-md md:p-8 p-6'
              >
                <div className='flex gap-4 items-center'>
                  <div className='size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0'>
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={300}
                      height={300}
                      className='max-h-full'
                    />
                  </div>

                  <div>
                    <div className='font-semibold'>{testimonial.name}</div>
                    <div className='text-sm text-white/40'>
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className='mt-4 md:mt-6 text-sm md:text-base'>
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
