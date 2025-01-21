import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Program = () => {
  const numberOfCircles = 7;
  const circles = Array.from({ length: numberOfCircles }, (_, index) => index);
  return (
    <>
      <div className='w-full h-full mt-4 pb-3 flex justify-between gap-2'>
        <Link to='/lvlx3' className='w-1/2'>
          <div className='bg-Background px-2 py-2 rounded-lg'>
            <div className='flex justify-between text-textColor3'>
              <h1 className='text-2xl'>x3</h1>
              <p className='flex items-center gap-1'>
                0 BUSD
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
                    index === 0 ? 'bg-[#503ef3]' : 'bg-[#5c5c5c]'
                  }`}
                ></div>
              ))}
            </div>
            <div className='bg-gradient-to-r from-[#5b4fc6] to-[#170e61] rounded-md flex justify-center items-center px-3 py-2 mt-6 font-medium'>
              <button className='text-xs text-white '>
                Upgrade for 10 BUSD
              </button>
            </div>
          </div>
        </Link>
        <Link to='/lvlx4' className='w-1/2'>
          <div className='bg-Background px-2 py-2 rounded-lg'>
            <div className='flex justify-between text-textColor3'>
              <h1 className='text-2xl'>x4</h1>
              <p className='flex items-center gap-1'>
                0 BUSD{' '}
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
                    index === 0 ? 'bg-[#503ef3]' : 'bg-[#5c5c5c]'
                  }`}
                ></div>
              ))}
            </div>
            <div className='bg-gradient-to-r from-[#5b4fc6] to-[#170e61] rounded-md flex justify-center items-center px-3 py-2 mt-6 font-medium'>
              <button className='text-xs text-white '>
                Upgrade for 10 BUSD
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Program;
