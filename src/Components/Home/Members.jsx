import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { GoArrowUp } from 'react-icons/go';

const Members = () => {
  return (
    <>
      <div className='w-full h-full mt-4 pb-3 flex justify-between gap-2'>
        <div className='bg-Background shadow-xl  shadow-[#00000079]  px-2 py-3 w-1/2 rounded-lg h-1/2'>
          <h5 className='text-textColor2 flex items-center text-sm gap-1 '>
            Total Members
            <span className='relative group'>
              <BsFillQuestionCircleFill className='text-textColor3 text-xl cursor-pointer' />

              {/* Tooltip div */}
              <div className='absolute left-[-15px] -translate-x-1/2 mt-2 w-[175px] bg-gray-800 text-white text-xs rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
                <h1 className='font-semibold'>Total Members</h1>
                <p>
                  Total number of members in The Eagles.io BUSD and last 24
                  hours changes
                </p>
              </div>
            </span>
          </h5>
          <p className='text-[#a67912] text-lg mt-2'>00000</p>
          <p className='text-white flex'>
            <GoArrowUp className='text-xl' />
            <span className=''>000</span>
          </p>
        </div>
        <div className='bg-Background w-1/2 rounded-lg shadow-xl shadow-[#00000079]'>
          <div className='px-2 py-3'>
            <h5 className='text-textColor2 flex items-center text-sm gap-1'>
              Members Recieved USDT
              <span className='relative group'>
                <BsFillQuestionCircleFill className='text-textColor3 text-xl cursor-pointer' />
                {/* Tooltip div */}
                <div className='absolute -left-10 -translate-x-1/2 mt-2 w-[175px] bg-gray-800 text-white text-xs rounded-lg p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
                  <h1 className='font-semibold'>Members Recieved</h1>
                  <p>
                    Total amout recived by all memebers of eagle and last five
                    hours change
                  </p>
                </div>
              </span>
            </h5>
            <p className='text-[#a67912] text-lg mt-2'>0000000 USDT</p>
            <p className='text-white flex'>
              <span>+00000 USDT</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Members;
