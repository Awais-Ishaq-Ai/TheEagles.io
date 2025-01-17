import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import back from '../assets/LandingImages/back.jpg';
import { GrLinkNext } from 'react-icons/gr';
import world from '../assets/LandingImages/world.png';
import { Pagination } from 'swiper/modules';

function Landingpage() {
  return (
    <>
      <img src={back} alt='' className='absolute' />
      <div className='h-[39vh] w-full bg-[#80808046] relative flex flex-col justify-center items-center'>
        <p className='text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500'>
          The Eagles.io
        </p>
        <button className='bg-gradient-to-r from-[#5b4fc6] to-[#170e61] text-white w-[50%] py-2 rounded-full mt-8'>
          Sign in
        </button>
        <button className='bg-gradient-to-r from-[#5b4fc6] to-[#170e61] text-white w-[50%] py-2 rounded-full mt-3'>
          {' '}
          <div className='flex items-center justify-center gap-2'>
            Register
            <GrLinkNext />
          </div>
        </button>
      </div>
      <div className='w-[80%] mx-auto'>
        <p className='text-white font-medium text-center my-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsa
          molestias deserunt, nam qui pariatur?{' '}
          <span className='text-landingtext'>
            {' '}
            Aspernatur repellat reprehenderit{' '}
          </span>{' '}
          assumenda minus aperiam!
        </p>
      </div>
      <img src={world} alt='' className='mx-auto block' />
      <div className='h-[27vh] w-[80%] bg-Background absolute top-[530px] ms-[38px] rounded-lg'>
        <Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
          <SwiperSlide>
            <p className='text-white text-lg font-medium'>Documentation</p>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Landingpage;
