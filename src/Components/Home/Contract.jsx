import { useState } from 'react';
import { BsTriangleFill } from 'react-icons/bs';
import { HiLink } from 'react-icons/hi';
import { IoCopy } from 'react-icons/io5';

const Contract = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className='bg-Background w-full h-full rounded-lg mt-1 pb-4'>
        <h1 className='text-textColor2 border-b border-textColor2 flex justify-between items-center px-3 py-4'>
          The Eagles USDT contract
          <span
            className='bg-[#a67912] h-8 w-8 flex justify-center items-center rounded-full cursor-pointer'
            onClick={toggleVisibility}
          >
            <BsTriangleFill
              className={`text-textColor3 transform transition-transform duration-300 ${
                isVisible ? 'rotate-180' : 'rotate-0'
              }`}
            />{' '}
          </span>
        </h1>

        {isVisible && (
          <div>
            <div className='flex justify-between py-4 px-3 border-b border-textColor2'>
              <p className='text-textColor2'>x1/x2</p>
              <p className='flex gap-2 text-textColor3 items-center'>
                0x55...a32{' '}
                <span>
                  <IoCopy />
                </span>
                <span>
                  <HiLink />
                </span>
              </p>
            </div>
            <div className='space-y-1 py-4 px-3 border-b border-textColor2'>
              <h1 className='text-textColor2'>Transaction made</h1>
              <p className='text-textColor3'>3 188 232</p>
              <p className='text-green-700 flex'>
                <span>+000</span>
              </p>
            </div>
            <div className='space-y-1 pt-4 px-3'>
              <h1 className='text-textColor2'>Turnover, USDT</h1>
              <p className='text-textColor3'>123 546 448.0</p>
              <p className='text-green-700 flex'>
                <span>+00000</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Contract;
