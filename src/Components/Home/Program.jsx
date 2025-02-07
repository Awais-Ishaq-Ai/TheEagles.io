import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Program = () => {
  const numberOfCircles = 12;
  const circles = Array.from({ length: numberOfCircles }, (_, index) => index);
  return (
    <>
      <div className='w-full h-full mt-6 pb-3 flex justify-between gap-2'>
        <Link to='/lvlx1' className='w-1/2'>
          <div className='bg-Background shadow-xl shadow-[#00000079]  px-2 py-2 rounded-lg'>
            <div className='flex justify-between text-textColor3'>
              <h1 className='text-2xl capitalize'>x1</h1>
              <p className='flex items-center gap-1'>
                0 USDT
                <span>
                  <GoArrowUpRight className='mb-4' />
                </span>
              </p>
            </div>
            <div className='flex flex-wrap gap-2 mt-5'>
              {circles.map((circle, index) => (
                <div
                  key={index}
                  className={`w-7 h-7 rounded-full ${
                    index === 0 ? 'bg-[#a67912]' : 'bg-[#5c5c5c]'
                  }`}
                ></div>
              ))}
            </div>
            <div className='bg-gradient-to-r from-[#a67912] to-[#1a1303] rounded-md flex justify-center items-center px-3 py-2 mt-6 font-medium'>
              <button className='text-xs text-white'>Upgrade for 5 USDT</button>
            </div>
          </div>
        </Link>
        <Link to='/lvlx2' className='w-1/2'>
          <div className='bg-Background shadow-lg shadow-[#00000079]  px-2 py-2 rounded-lg'>
            <div className='flex justify-between text-textColor3'>
              <h1 className='text-2xl capitalize'>x2</h1>
              <p className='flex items-center gap-1'>
                0 USDT{' '}
                <span>
                  <GoArrowUpRight className='mb-4' />
                </span>
              </p>
            </div>
            <div className='flex flex-wrap gap-2 mt-5'>
              {circles.map((circle, index) => (
                <div
                  key={index}
                  className={`w-7 h-7 rounded-full ${
                    index === 0 ? 'bg-[#a67912]' : 'bg-[#5c5c5c]'
                  }`}
                ></div>
              ))}
            </div>
            <div className='bg-gradient-to-r from-[#a67912] to-[#1a1303] rounded-md flex justify-center items-center px-3 py-2 mt-6 font-medium'>
              <button className='text-xs text-white '>
                Upgrade for 5 USDT
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Program;
