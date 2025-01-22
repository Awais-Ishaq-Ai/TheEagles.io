import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { HiOutlineArrowPath } from 'react-icons/hi2';

const DocumentationSlider = () => {
  const slides = [
    {
      title: 'Documentation',
      subtitle:
        'No one,not even the creation of the code, can make changes to the work of The Eagles.io smart contracts',
    },
    {
      title: 'Documentation',
      subtitle: 'Slide 2 Subtitle',
    },
    {
      title: 'Documentation',
      subtitle: 'Slide 3 Subtitle',
    },
  ];
  return (
    <>
      <div className='mt-8'>
        <h1 className='text-textColor3 text-xl font-semibold w-4/5 mx-auto'>
          Technology of smart contracts and non-fungible token
        </h1>
        <p className='text-textColor2 text-xs mt-4 w-4/5 mx-auto'>
          Decentralized marketing is proved by the revolutionary technology of
          smart contract amd NFT. The Eagles.io smart contract code is
          completely open. You can be sure of its safely and long-term
          performance.
        </p>

        <div className='h-auto w-4/5 mx-auto mt-7 bg-Background rounded-lg'>
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className='mySwiper h-full'
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className='px-5 py-3 text-center'>
                <div className='text-textColor3 text-4xl bg-gradient-to-b mt-3 from-[#990091] via-[#7a00aa] to-[#3600e5] inline-block p-3 rounded-full'>
                  <HiOutlineArrowPath />
                </div>
                <p className='text-lg font-medium mt-8 text-textColor3'>
                  {slide.title}
                </p>
                <p className='text-xs mt-4 mb-10 text-textColor2'>
                  {slide.subtitle}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default DocumentationSlider;
