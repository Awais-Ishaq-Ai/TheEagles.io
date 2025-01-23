import React from 'react';
import {
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaRegFileAlt,
} from 'react-icons/fa';
import { RiTelegram2Fill } from 'react-icons/ri';

const Social = () => {
  return (
    <div className='text-textColor3 pb-10'>
      <h2 className='text-2xl font-bold mb-8 ms-6'>Official Channels</h2>
      <div className='flex flex-wrap gap-x-28 gap-y-9 justify-center mb-12'>
        <div className='flex flex-col items-center'>
          <div className='p-[2px] bg-gradient-to-b from-[#990091] via-[#7a00aa] to-[#3600e5] rounded-full'>
            <div className='bg-black h-20 w-20 flex justify-center items-center rounded-full'>
              <RiTelegram2Fill className='text-textColor3 text-4xl' />
            </div>
          </div>
          <p className='text-sm mt-2'>Telegram Channel</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='p-[2px] bg-gradient-to-b from-[#990091] via-[#7a00aa] to-[#3600e5] rounded-full'>
            <div className='bg-black h-20 w-20 flex justify-center items-center rounded-full'>
              <RiTelegram2Fill className='text-textColor3 text-4xl' />
            </div>
          </div>
          <p className='text-sm mt-2'>Telegram Chat</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='p-[2px] bg-gradient-to-b from-[#990091] via-[#7a00aa] to-[#3600e5] rounded-full'>
            <div className='bg-black h-20 w-20 flex justify-center items-center rounded-full'>
              <FaTwitter className='text-textColor3 text-4xl' />
            </div>
          </div>
          <p className='text-sm mt-2'>Twitter</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='p-[2px] bg-gradient-to-b from-[#990091] via-[#7a00aa] to-[#3600e5] rounded-full'>
            <div className='bg-black h-20 w-20 flex justify-center items-center rounded-full'>
              <FaFacebookF className='text-textColor3 text-4xl' />
            </div>
          </div>
          <p className='text-sm mt-2'>Facebook</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='p-[2px] bg-gradient-to-b from-[#990091] via-[#7a00aa] to-[#3600e5] rounded-full'>
            <div className='bg-black h-20 w-20 flex justify-center items-center rounded-full'>
              <FaYoutube className='text-textColor3 text-4xl' />
            </div>
          </div>
          <p className='text-sm mt-2'>Youtube</p>
        </div>
      </div>
      <div className='flex flex-wrap items-center w-full px-2 text-textColor3 font-medium'>
        <div className='flex items-center gap-2 w-1/2 h-full'>
          <img
            src='/assets/LandingImages/tether.png'
            alt=''
            className='h-[18px] w-[18px]'
          />
          <p className='text-sm'>The Eagles.io USDT</p>
        </div>
        <div className='flex items-center gap-2 w-1/2 h-full'>
          <FaRegFileAlt className='text-lg' />
          <p className='text-sm'>The Eagles.io Support</p>
        </div>
      </div>
    </div>
  );
};

export default Social;
