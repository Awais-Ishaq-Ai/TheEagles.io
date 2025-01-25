import { useState } from 'react';
import { GiGreekTemple } from 'react-icons/gi';
import { GoPeople } from 'react-icons/go';
import { HiOutlineArrowPath } from 'react-icons/hi2';
import Notify from '../Components/Lvl1/Notify';
import UserTable from '../Components/Lvl1/UserTable';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Levelx2 = () => {
  const levels = [
    { level: 1, cost: 2.5, peopleCount: 28, timer: '00' },
    { level: 2, cost: 5, peopleCount: 2, timer: '00' },
    { level: 3, cost: 10, peopleCount: 36, timer: '00' },
    { level: 4, cost: 20, peopleCount: 66, timer: '00' },
    { level: 5, cost: 40, peopleCount: 0, timer: '00' },
    { level: 6, cost: 80, peopleCount: 65, timer: '00' },
    { level: 7, cost: 160, peopleCount: 23, timer: '00' },
    { level: 8, cost: 320, peopleCount: 1, timer: '00' },
    { level: 9, cost: 640, peopleCount: 765, timer: '00' },
    { level: 10, cost: 1250, peopleCount: 53, timer: '00' },
    { level: 11, cost: 2500, peopleCount: 5, timer: '00' },
    { level: 12, cost: 5000, peopleCount: 86, timer: '00' },
  ];

  const [activeLevels, setActiveLevels] = useState([1]);

  const handleActivate = (level) => {
    if (!activeLevels.includes(level)) {
      setActiveLevels((prev) => [...prev, level]);
    }
  };

  const totalCost = levels
    .filter((item) => activeLevels.includes(item.level))
    .reduce((sum, item) => sum + item.cost, 0);

  return (
    <>
      <div className='px-3 mt-3'>
        <h4 className='text-[#7b7b7b] text-sm'>
          ID 1848323 /{' '}
          <span className='text-textColor2 text-base font-medium'>
            The Eagles.io x2 (1/12)
          </span>
        </h4>
        <div className='text-textColor3 text-lg mt-4 flex justify-between'>
          <h1>The Eagles.io x2</h1>
          <h1>{totalCost} USDT</h1>
        </div>
      </div>
      <div className='bg-gradient-to-r from-[#170e61] to-[#5b4fc6] w-full h-auto px-2 py-6 mt-3'>
        <div className='grid grid-cols-2 gap-3'>
          {levels.map((item) => (
            <div
              key={item.level}
              className={`px-2 py-3 rounded-md h-[150px] ${
                activeLevels.includes(item.level)
                  ? 'bg-textColor'
                  : 'bg-Background'
              }`}
            >
              <div className='flex justify-between'>
                <h3 className='text-base text-textColor2'>Lvl {item.level}</h3>
                <p className='flex gap-1 items-center text-textColor3'>
                  <div className='bg-[#ffac33] h-3 w-3 rounded-full flex justify-center items-center text-[8px] text-[#ffd983]'>
                    <GiGreekTemple />
                  </div>
                  {item.cost}
                </p>
              </div>

              {activeLevels.includes(item.level - 1) &&
                !activeLevels.includes(item.level) && (
                  <div className='flex flex-col items-center'>
                    <h1 className='text-textColor3 text-lg w-3/4 leading-5 text-center mt-2'>
                      Upgrade your result x{item.level}
                    </h1>
                    <button
                      className='px-4 py-1 mt-3 rounded-md text-lg font-medium text-textColor3 bg-textColor'
                      onClick={() => handleActivate(item.level)}
                    >
                      Active
                    </button>
                  </div>
                )}

              {activeLevels.includes(item.level) && (
                <div>
                  <div className='flex flex-col items-center my-2 gap-y-2 leading-4'>
                    <div className='flex gap-x-11'>
                      <div className='h-9 w-9 rounded-full bg-[#597aff]'></div>
                    </div>
                    <div className='flex gap-x-4'>
                      <div className='h-6 w-6 rounded-full bg-[#597aff]'></div>
                      <div className='h-6 w-6 rounded-full bg-[#597aff]'></div>
                      <div className='h-6 w-6 rounded-full bg-[#597aff]'></div>
                    </div>
                  </div>

                  <div className='flex justify-between'>
                    <p className='flex gap-1 items-center text-textColor3'>
                      <GoPeople className='text-textColor2' />
                      {item.peopleCount}
                    </p>
                    <p className='flex gap-1 items-center text-textColor3'>
                      <HiOutlineArrowPath className='text-textColor2' />
                      {item.timer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='mt-7'>
          <div className='flex items-center'>
            <div className='flex gap-2 items-center w-1/2'>
              <GoPeople className='text-textColor3 text-xl' />
              <p className='text-textColor2 text-sm'>Partners on level</p>
            </div>
            <div className='flex items-center gap-2 w-1/2'>
              <div className='h-5 w-5 rounded-full bg-[#d9d9d9]'></div>
              <p className='text-textColor2'>Direct partner</p>
            </div>
          </div>
          <div className='flex mt-5 items-center'>
            <div className='flex gap-2 items-center w-1/2'>
              <HiOutlineArrowPath className='text-textColor3 text-xl' />
              <p className='text-textColor2 text-sm'>Level Cycle</p>
            </div>
            <div className='flex items-center gap-2 w-1/2'>
              <div className='h-5 w-5 rounded-full bg-[#50c8ca]'></div>
              <p className='text-textColor2'>Gift</p>
            </div>
          </div>
          <button className='bg-[#172b7d] text-textColor3 px-8 mt-5 py-3 rounded-full font-medium flex gap-2'>
            <Link to='/Upgradex2' className='flex gap-2 items-center'>
              <BsFillQuestionCircleFill className=' text-textColor3' />
              Marketing legend
            </Link>
          </button>
        </div>
      </div>

      <Notify />
      <UserTable />
    </>
  );
};

export default Levelx2;
