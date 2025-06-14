
import { GoPeople } from 'react-icons/go';
import { HiOutlineArrowPath } from 'react-icons/hi2';

import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const UpgradeLvl3 = () => {
  return (
    <>
      <div className='pt-4 pb-8'>
        <div className='h-1/2 w-1/4 mx-auto  bg-[#150f4de6] rounded-full shadow-[0_0_200px_50px_rgba(21,15,77,1),0_0_300px_100px_rgba(21,15,77,1)]'></div>
        <div className='px-3 flex justify-between  mt-7'>
          <h1 className='w-1/4 text-2xl text-textColor3 font-semibold'>
            Upgrade x1
          </h1>
          <div className='px-2 py-3 rounded-lg h-[160px]  shadow-lg shadow-[#5a5775e6] w-1/2 me-4 bg-textColor bg-opacity-50'>
            <div className='flex  justify-between'>
              <h3 className='text-base text-textColor2'>Lvl 1</h3>
              <p className='flex gap-1 items-center text-textColor3'>
                <div className='h-3 w-3 rounded-full flex justify-center items-center'>
                  <img
                    src='/assets/LoginImages/tether.png'
                    alt=''
                    className='h-[12px] w-auto'
                  />
                </div>
                5
              </p>
            </div>
            <div className='flex flex-col  gap-2 my-3'>
              <div className='flex justify-center gap-x-4'>
                <div className='h-8 w-8 rounded-full bg-[#a67912]'></div>
                <div className='h-8 w-8 rounded-full bg-[#a67912]'></div>
              </div>
              <div className='flex justify-center gap-x-4'>
                <div className='h-8 w-8 rounded-full bg-[#a67912]'></div>
                <div className='h-8 w-8 rounded-full bg-[#26a17b]'></div>
              </div>
              <div className='flex justify-between'>
                <p className='flex gap-1 items-center text-textColor3'>
                  <GoPeople className='text-textColor2' />
                  28
                </p>
                <p className='flex gap-1 items-center text-textColor3'>
                  <HiOutlineArrowPath className='text-textColor2' />
                  00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='py-7 px-3 space-y-4 border-b border-textColor2'>
          <div className='flex justify-between text-xs'>
            <h3 className='text-textColor2'>Number of places for re-cycle</h3>
            <p className='text-textColor3 flex gap-1 items-center'>
              4
              <span>
                <GoPeople />
              </span>
            </p>
          </div>
          <div className='flex justify-between text-xs'>
            <h3 className='text-textColor2'>Net reward for every cycle</h3>
            <p className='text-textColor3'>10.00000 USDT</p>
          </div>
          <div className='flex justify-between text-xs'>
            <h3 className='text-textColor2'>Level cycle profit</h3>
            <p className='text-textColor3 flex gap-1 items-center'>
              300 %
              <span className='text-green-700'>
                <HiOutlineArrowPath />
              </span>
            </p>
          </div>
          <div className='flex justify-between text-xs'>
            <h3 className='text-textColor2'>Max automatic re-cycle</h3>
            <p className='text-textColor3'>∞</p>
          </div>
        </div>
        <div className='py-7 px-3 space-y-2 border-b border-textColor2'>
          <div className='text-textColor text-sm font-medium flex justify-between'>
            <h1>Upgrade Amount</h1>
            <p>
              5 USDT (<span className='text-landingtext'>0.001 BNB</span>)
            </p>
          </div>
        </div>
        <div className='py-7 px-3 space-y-4'>
          <div className='text-sm text-green-700 flex justify-between items-center'>
            <p>Network check (Smart chain)</p>
            <IoIosCheckmarkCircleOutline className='text-[16px]' />
          </div>
          <div className='text-sm text-textColor2 flex justify-between items-center'>
            <p>Balance check 5 USDT</p>
            <div className='h-[13px] w-[13px] me-[2px] rounded-full border border-textColor2'></div>
          </div>
          <div className='text-sm text-textColor2 flex justify-between items-center'>
            <p>Approved USDT</p>
            <div className='h-[13px] w-[13px] me-[2px] rounded-full border border-textColor2'></div>
          </div>
        </div>

        <div className='bg-gradient-to-r from-[#a67912] to-[#1a1303] shadow-lg shadow-[#53532479]  w-3/4 mx-auto flex items-center justify-center px-8 py-3 mt-12 text-textColor3 font-medium rounded-lg'>
          <button>Check Again</button>
        </div>
      </div>
    </>
  );
};
export default UpgradeLvl3;
