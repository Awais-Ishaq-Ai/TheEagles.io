import { FaRegCheckCircle } from 'react-icons/fa';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { CiCircleQuestion } from 'react-icons/ci';
import { MdInfo } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';
import { MdOutlineErrorOutline } from 'react-icons/md';

const Register = () => {
  return (
    <>
      <div className='min-h-screen w-full bg-gradient-to-tr from-gray-900 via-gray-900 to-blue-600 text-white flex justify-center gap-10 items-center md:p-6 px-2 py-6'>
        <div className='md:max-w-5xl w-full flex flex-col md:flex-row justify-between gap-16 p-6 rounded-xl shadow-lg md:gap-x-44'>
          <div className='flex-1  p-2 md:p-4 lg:p-2'>
            <h1 className='text-2xl font-semibold mb-4'>
              Registration <br /> in The Eagle USDT
            </h1>
            <label className='block text-gray-400 mb-2'>Your upline</label>
            <input
              type='text'
              defaultValue={1}
              className='w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <div className='mt-4 space-y-2'>
              <div className='flex items-center gap-2 text-green-400'>
                <FaRegCheckCircle /> Wallet: connected
              </div>
              <div className='flex items-center gap-2 text-green-400'>
                <FaRegCheckCircle /> Network: Smart chain
              </div>
              <div className='flex items-center gap-2 text-green-400'>
                <FaRegCheckCircle /> Registration: available
              </div>
              <div className='flex items-center gap-2 text-red-400'>
                <MdOutlineErrorOutline />
                Balance: min 5 USDT or 0.021 BNB
              </div>
              <div className='flex items-center gap-2 text-white'>
                <RiCheckboxBlankCircleLine /> Aprove USDT
              </div>
            </div>
            <button className=' mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg'>
              Check again
            </button>
            <button className='  flex items-center justify-center p-2 mt-2 text-gray-500   rounded-lg'>
              Registration fee <CiCircleQuestion className='ml-2 text-white ' />
            </button>
          </div>

          {/* Right Section - Info */}
          <div className='flex-1 p-6 bg-gray-800   rounded-lg shadow-md'>
            <div className='flex items-center gap-2 text-white'>
              <MdInfo /> <h3 className='text-lg font-semibold'>Information</h3>
            </div>
            <p className='text-gray-400 mt-2'>
              <span className='text-white font-semibold'>
                Insufficient balance for registration.
              </span>
              Registration requires <span className='text-white'>5 USDT</span>{' '}
              and at least
              <span className='text-white'> 0.005 BNB</span>. Your wallet
              balance:
              <span className='text-red-400 font-medium'> 0.00 USDT </span> and
              <span className='text-red-400 font-medium'> 0.000 BNB</span>.
            </p>
            <button className=' mt-4 p-2 bg-red-600 hover:bg-red-700 rounded-lg'>
              Read guide
            </button>
            <div className='mt-4'>
              <video
                src='https://videos.pexels.com/video-files/854982/854982-sd_640_360_25fps.mp4'
                className='rounded-lg w-full'
                controls
              />
            </div>
            <div className='mt-4 flex items-center gap-2 text-gray-300'>
              <AiOutlineMessage />
              <p>
                Need help with registration? <br /> Talk to experts in
                <span className='text-blue-400 cursor-pointer'>
                  {' '}
                  support chat
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
};
export default Register;
