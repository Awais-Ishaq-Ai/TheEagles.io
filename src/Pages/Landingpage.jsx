import React, { useState } from 'react';
import back from '../../public/assets/LandingImages/back.jpg';
import { GrLinkNext } from 'react-icons/gr';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import book from '../../public/assets/LandingImages/book.png';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { IoCopy, IoEarth } from 'react-icons/io5';
import { GiBookmarklet } from 'react-icons/gi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { PiGraduationCapThin } from 'react-icons/pi';
import History from '../Components/Home/History';

function Landingpage() {
  const [activeTab, setActiveTab] = useState('Total');

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
      <div className='overflow-hidden'>
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

        <div className='relative mt-20 h-64'>
          <PiGraduationCapThin className='text-landingtext absolute text-6xl -z-10 -top-8 -rotate-45 left-2' />
          <p className='text-textColor3 text-xs w-4/5 text-center mx-auto font-medium'>
            <span className='text-landingtext font-bold'>Forsage School</span>{' '}
            is an exclusive training course designed specifically for the who
            want to unlock thier full potential with The Eagles.io!
          </p>
          <div className='w-4/5 mx-auto'>
            <button className='bg-Background bg-opacity-75 text-landingtext font-medium mt-3 py-2 rounded-full w-full'>
              Go to School
            </button>
          </div>
          <IoEarth className='text-landingtext absolute text-6xl right-9 top-3 -z-10' />

          <GiBookmarklet className='text-landingtext absolute text-6xl right-0 rotate-45   bottom-16' />
          <HiOutlineLightBulb className='text-landingtext absolute text-8xl -bottom-10 rotate-12' />
          <div className='bg-black h-[200px] rounded-lg w-4/5 z-10 left-1/2 -translate-x-1/2 absolute -bottom-24 shadow-[10px_0px_30px_8px_rgb(213,77,33)] flex items-center justify-center'>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/YOUR_VIDEO_ID'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='rounded-lg'
            ></iframe>
          </div>
        </div>
        <div className='h-56 bg-gradient-to-r from-[#b97757] via-[#d8160a] via-20% via-[#e05d1c] via-30% to-[#df370f] flex flex-col justify-end ps-6'>
          <h1 className='text-textColor3 text-2xl mb-4 font-medium'>
            Platform recent activity
          </h1>
          <p className='text-textColor2 text-xs mb-6'>
            Real-time globle event of the The Eagles.io Platform
          </p>
        </div>

        <History />
        <div className='bg-gradient-to-b from-[#990091] via-[#7a00aa] to-[#3600e5] h-auto px-2 py-5'>
          <h1 className='text-textColor3 font-semibold text-3xl'>
            Partner result
          </h1>
          <p className='text-textColor2 text-sm w-11/12 mt-3'>
            All data is stored in the blockchain in the public domain and can be
            verified?
          </p>
          <div className='mt-8 text-sm space-y-5'>
            <p className='text-textColor2'>
              Contract address <span className='text-textColor3'>eth:</span>
            </p>
            <h5 className='text-textColor3 text-sm flex gap-2'>
              ox5acc77e655....doo5f00FB87:
              <span className='text-xl'>
                <IoCopy />
              </span>
            </h5>
            <p className='text-textColor2'>
              Contract address <span className='text-textColor3'>tron:</span>
            </p>
            <h5 className='text-textColor3 text-sm flex gap-2'>
              TREbha3J6trpt...mMug:
              <span className='text-xl'>
                <IoCopy />
              </span>
            </h5>

            <p className='text-textColor2'>
              Contract address <span className='text-textColor3'>BUSD:</span>
            </p>
            <h5 className='text-textColor3 text-sm flex gap-2'>
              ox5acc77e655....doo5f00FB87:
              <span className='text-xl'>
                <IoCopy />
              </span>
            </h5>
          </div>

          <div className='mt-8 w-11/12 mx-auto'>
            <div className='flex justify-around bg-textColor2 bg-opacity-30 rounded-full px-2 py-2'>
              <div
                onClick={() => setActiveTab('Total')}
                className={`cursor-pointer px-4 py-2 font-bold ${
                  activeTab === 'Total'
                    ? 'bg-textColor3 rounded-full text-black'
                    : 'text-gray-300'
                }`}
              >
                Total
              </div>
              <div
                onClick={() => setActiveTab('ETH')}
                className={`cursor-pointer px-4 py-2 font-bold ${
                  activeTab === 'ETH'
                    ? 'bg-textColor3 rounded-full text-black'
                    : 'text-gray-300'
                }`}
              >
                ETH
              </div>
              <div
                onClick={() => setActiveTab('Tron')}
                className={`cursor-pointer px-4 py-2 font-bold ${
                  activeTab === 'Tron'
                    ? 'bg-textColor3 rounded-full text-black'
                    : 'text-gray-300'
                }`}
              >
                Tron
              </div>
              <div
                onClick={() => setActiveTab('BUSD')}
                className={`cursor-pointer px-4 py-2 font-bold ${
                  activeTab === 'BUSD'
                    ? 'bg-textColor3 rounded-full text-black'
                    : 'text-gray-300'
                }`}
              >
                BUSD
              </div>
            </div>

            <div className='mt-5 text-center'>
              {activeTab === 'Total' && (
                <>
                  <div className='text-4xl font-bold text-white'>
                    3 395 780{' '}
                    <sup className='text-green-700 text-base'>+422</sup>
                  </div>
                  <div className='text-2xl font-bold text-white mt-2'>
                    1 469 653 628{' '}
                    <sup className='text-green-700 text-base'>+8 284</sup>
                  </div>
                  <div className='mt-2 text-sm text-textColor2'>
                    Total result, USD
                  </div>
                </>
              )}
              {activeTab === 'ETH' && (
                <div className='text-white text-2xl'>ETH Data goes here...</div>
              )}
              {activeTab === 'Tron' && (
                <div className='text-white text-2xl'>
                  Tron Data goes here...
                </div>
              )}
              {activeTab === 'BUSD' && (
                <div className='text-white text-2xl'>
                  BUSD Data goes here...
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Landingpage;
