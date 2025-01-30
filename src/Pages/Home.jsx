import { GoArrowUpRight } from 'react-icons/go';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { IoCopy, IoPersonCircleSharp, IoSettingsSharp } from 'react-icons/io5';
import Cards from '../Components/Home/Cards';
import Program from '../Components/Home/Program';
import Members from '../Components/Home/Members';
import Contract from '../Components/Home/Contract';
import History from '../Components/Home/History';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const Home = () => {
  const [showDetails, setShowDetails] = useState(true);
  const navigate = useNavigate();

  const handleCopy = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log(`Text copied to clipboard: ${textToCopy}`);
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
  };

  return (
    <>
      <div className='w-full px-4 pt-8 homebg bg-[#0000ff40]'>
        <div className='relative'>
          <div className='absolute inset-0 h-full opacity-10 left-12'>
            <img
              src='assets/HomeImages/eaglebg.jpg'
              alt='Background'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='bg-eagles relative inset-0 z-10'>
            <div className='h-auto flex justify-between'>
              <div className='flex gap-6'>
                <div className='gradient-border h-24 w-24 rounded-full'>
                  <div className='relative flex items-center justify-center text-white h-full w-full rounded-full bg-Background'>
                    <p className='text-[#bcbcbc]'>
                      <IoPersonCircleSharp className='text-8xl text-textColor3' />
                    </p>
                    <img
                      src='/assets/HomeImages/logo.png'
                      alt='logo'
                      className='h-7 w-7 ms-2 object-cover absolute bottom-2 -right-4 rounded-full'
                    />
                    <div className='w-28 rounded-full p-[2px] absolute -bottom-5  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
                      <div className='bg-Background rounded-full text-xs px-2 flex items-center justify-between py-1'>
                        <p className='text-slate-400'>Social</p>
                        <span className='flex gap-1 items-center'>
                          <FaHeart className='text-pink-700' />
                          526
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-textColor3'>
                  <h1 className='text-2xl font-semibold font-sans'>Username</h1>
                  <p className='text-lg text-yellow-300 italic font-medium'>
                    ID 5436547
                  </p>
                  <button
                    className='ms-4 mt-3 text-base flex gap-2 items-center justify-center bg-Background text-textColor2 w-44 py-1 rounded-full'
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    {showDetails ? 'Show less' : 'Show more'}
                    <span>
                      {showDetails ? (
                        <IoIosArrowUp className='text-base' />
                      ) : (
                        <IoIosArrowDown className='text-base' />
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <IoSettingsSharp
                  className='text-textColor3 text-3xl mt-1'
                  onClick={() => navigate('/profile')}
                />
              </div>
            </div>
            {showDetails && (
              <div className='mt-3'>
                <div className='flex gap-x-2 items-center text-sm text-textColor3'>
                  <p>0x783c...2sso</p>
                  <IoCopy />
                </div>
                <div className='flex gap-2 items-center text-textColor3 text-sm'>
                  <p>invited 24.11.2024 by</p>
                  <p className='px-3 flex justify-center text-yellow-300 font-medium text-lg bg-[#333333] bg-opacity-35  rounded-full italic'>
                    ID 4677755
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='bg-textColor bg-opacity-20 w-full px-2 py-3 rounded-lg mt-4'>
          <div className='flex items-center justify-between text-base mb-5'>
            <h5 className='text-textColor3'>Personal link</h5>
            <p className='text-textColor3 text-base font-sans font-medium flex gap-2 items-center'>
              theeagles.io/******
              <span>
                <GoArrowUpRight className='text-textColor3 text-lg' />
              </span>
            </p>
          </div>
          <div className='text-lg space-y-4'>
            <button
              className='bg-textColor w-full text-textColor3 font-medium px-6 py-1 rounded-full'
              onClick={() => handleCopy('Text from Button 1')}
            >
              Copy
            </button>
            <button className='w-full bg-textColor3 text-textColor font-medium px-6 py-1 rounded-full'>
              Share
            </button>
          </div>
        </div>

        <Cards />
        <Program />
        <Members />
        <Contract />
        <History />
      </div>
    </>
  );
};

export default Home;
