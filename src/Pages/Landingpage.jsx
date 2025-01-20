import React from 'react';
import back from '../assets/LandingImages/back.jpg';
import { GrLinkNext } from 'react-icons/gr';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import book from '../assets/LandingImages/book.png';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

function Landingpage() {
  const slides = [
    {
      title: 'Documentation',
      subtitle: 'Practical Learning Platform',
      buttonText: 'Start Learning',
      img: book,
    },
    {
      title: 'Slide 2 Title',
      subtitle: 'Slide 2 Subtitle',
      buttonText: 'Explore More',
      img: book,
    },
    {
      title: 'Slide 3 Title',
      subtitle: 'Slide 3 Subtitle',
      buttonText: 'Learn More',
      img: book,
    },
  ];

  return (
    <>
      <div
        className='bg-cover bg-center'
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className='h-[39vh] w-full bg-[#8080806c] relative flex flex-col justify-center items-center'>
          <p className='text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500'>
            The Eagles.io
          </p>
          <Link to='/login' className='w-[50%]'>
            <button className='bg-gradient-to-r from-[#5b4fc6] to-[#170e61] text-white w-full py-2 rounded-full mt-8'>
              Sign in
            </button>
          </Link>
          <button className='bg-gradient-to-r from-[#5b4fc6] to-[#170e61] text-white w-[50%] py-2 rounded-full mt-3'>
            <div className='flex items-center justify-center gap-2'>
              Register
              <GrLinkNext />
            </div>
          </button>
        </div>
      </div>

      <div className='w-[80%] mx-auto'>
        <p className='text-white font-medium text-center my-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsa
          molestias deserunt, nam qui pariatur?{' '}
          <span className='text-landingtext'>
            Aspernatur repellat reprehenderit
          </span>{' '}
          assumenda minus aperiam!
        </p>
      </div>
      <div className='backgroundimg flex justify-center items-end'>
        <div className='h-[27vh] w-[85%] bg-Background rounded-lg px-3 py-2'>
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className='mySwiper'
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <p className='text-lg font-medium text-gray-200'>
                  {slide.title}
                </p>
                <p className='text-xl text-gray-400'>{slide.subtitle}</p>
                <div className='flex items-center my-3 justify-between'>
                  <p className='flex items-end gap-2 text-gray-200 text-lg mt-7'>
                    {slide.buttonText} <GrLinkNext />
                  </p>
                  <img src={slide.img} alt='Slide Image' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landingpage;
