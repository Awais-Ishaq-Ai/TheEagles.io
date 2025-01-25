import { BsShare } from 'react-icons/bs';
import { GoArrowUp } from 'react-icons/go';

const Cards = () => {
  return (
    <>
      <div className='bg-Background w-full h-full bg-image rounded-lg px-2 mt-4 pb-3'>
        <div className='h-full w-full py-3'>
          <p className='text-textColor2 font-sans text-base flex gap-2 items-center'>
            Profits{' '}
            <span className='bg-[#5c5c5c] rounded-full p-1'>
              <BsShare className='text-textColor3' />
            </span>
          </p>
        </div>
        <div className='flex justify-between'>
          <div className='text-textColor3'>
            <p>0 USDT</p>
          </div>
          <div className='text-textColor3'>
            <p className='flex items-center gap-1'>
              <GoArrowUp className='text-green-700' />0
            </p>
          </div>
        </div>
      </div>

      <div className='w-full h-full mt-4 pb-3 flex justify-between gap-2'>
        <div className='bg-Background px-2 py-3 w-1/2 rounded-lg bg-person2'>
          <p className='text-textColor2 font-sans text-base flex gap-2 items-center'>
            Partners
            <span className='bg-[#5c5c5c] rounded-full p-1 mt-1'>
              <BsShare className='text-textColor3' />
            </span>
          </p>
          <p className='text-3xl text-textColor3'>0</p>
          <div className='w-[90%] mx-auto mt-4 flex justify-between p-1 rounded-full bg-[#5b4fc6]'>
            <div className='flex items-center text-textColor3 text-xl'>
              <GoArrowUp /> 0
            </div>
            <div className='gradient-circle'></div>
          </div>
        </div>
        <div className='bg-Background px-2 py-3 w-1/2 rounded-lg bg-person3'>
          <p className='text-textColor2 font-sans text-base flex gap-2 items-center'>
            Team
            <span className='bg-[#5c5c5c] rounded-full p-1 mt-1'>
              <BsShare className='text-textColor3' />
            </span>
          </p>
          <p className='text-3xl text-textColor3'>0</p>
          <div className='w-[90%] mx-auto mt-4 flex justify-between p-1 rounded-full bg-[#5b4fc6]'>
            <div className='flex items-center text-textColor3 text-xl'>
              <GoArrowUp /> 0
            </div>
            <div className='gradient-circle'></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
