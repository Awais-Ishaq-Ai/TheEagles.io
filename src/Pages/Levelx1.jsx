import { useEffect, useState } from 'react';
import { GoPeople } from 'react-icons/go';
import { HiOutlineArrowPath } from 'react-icons/hi2';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import Notify from '../Components/Lvl1/Notify';
import UserTable from '../Components/Lvl1/UserTable';
import { Link } from 'react-router-dom';
import { RiLock2Fill } from 'react-icons/ri';
import { activateLevel } from '../Config/Contract-Methods';

const Levelx1 = () => {
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

  const users = [{ user: '1' }, { user: '1' }, { user: '1' }];

  const maxDivs = 4;
  const defaultColor = 'bg-white';
  const filledColor = 'bg-[#a67912]';

  const [resetCount, setResetCount] = useState(0);
  const [divColors, setDivColors] = useState(
    new Array(maxDivs).fill(defaultColor)
  );

  useEffect(() => {
    if (users.length === 0) {
      setResetCount(0);
      setDivColors(new Array(maxDivs).fill(defaultColor));
    } else if (users.length % maxDivs === 0) {
      setResetCount((prev) =>
        users.length > prev * maxDivs ? prev + 1 : prev - 1
      );
      setDivColors(new Array(maxDivs).fill(defaultColor));
    } else {
      setDivColors((prevColors) =>
        prevColors.map((color, index) =>
          index < users.length % maxDivs ? filledColor : defaultColor
        )
      );
    }
  }, [users.length]);

  const [activeLevels, setActiveLevels] = useState([1]);

  const handleLevelActivation = async (level) => {
    try {
      const approvetx = await activateLevel('1', level);
      const receipt = await getTxn(approvetx);

      if (!receipt) {
        console.log('Level activation failed');
        return;
      }

      if (!activeLevels.includes(level)) {
        setActiveLevels((prev) => [...prev, level]);
      }
    } catch (err) {
      console.log('Error activating level:', err);
    }
  };

  const totalCost = levels
    .filter((item) => activeLevels.includes(item.level))
    .reduce((sum, item) => sum + item.cost, 0);

  return (
    <>
      <div className='px-3 py-4 shadow-lg shadow-[#21202079]'>
        <h4 className='text-[#7b7b7b] text-sm'>
          ID 1848323 /{' '}
          <span className='text-textColor2 text-base font-medium'>
            The Eagles.io x1 (1/12)
          </span>
        </h4>
        <div className='text-textColor3 text-lg mt-4 flex justify-between'>
          <h1>The Eagles.io x1</h1>
          <h1>{totalCost} USDT</h1>
        </div>
      </div>
      <div className='bg-gradient-to-r from-[#a67912] to-[#1a1303] w-full h-auto px-2 py-6 mt-3'>
        <div className='grid grid-cols-2 gap-3'>
          {levels.map((item, index) => {
            const isNextToActivate =
              activeLevels.includes(item.level - 1) &&
              !activeLevels.includes(item.level);
            const isLocked =
              !activeLevels.includes(item.level) && !isNextToActivate;

            return (
              <div
                key={item.level}
                className={`px-2 py-3 relative rounded-md shadow-xl shadow-[#00000079] my-2 h-[150px] ${
                  activeLevels.includes(item.level)
                    ? 'bg-textColor bg-opacity-50'
                    : 'bg-Background bg-opacity-50'
                }`}
              >
                <div className='flex justify-between'>
                  <h3 className='text-base text-textColor2'>
                    Lvl {item.level}
                  </h3>
                  <p className='flex gap-1 items-center text-textColor3'>
                    <div className='h-3 w-3 rounded-full flex justify-center items-center'>
                      <img
                        src='/assets/LoginImages/tether.png'
                        alt=''
                        className='h-[12px] w-auto'
                      />
                    </div>
                    {item.cost}
                  </p>
                </div>

                {resetCount === 0 && isNextToActivate && (
                  <RiLock2Fill className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 text-xl' />
                )}

                {resetCount > 0 && isNextToActivate && (
                  <div className='flex flex-col items-center'>
                    <h1 className='text-textColor3 text-lg w-3/4 leading-5 text-center mt-2'>
                      Upgrade your result x{item.level}
                    </h1>
                    <button
                      className='px-4 shadow-xl shadow-[#00000079] py-1 mt-3 rounded-md text-lg font-medium text-textColor3 bg-[#a67912]'
                      onClick={() => handleLevelActivation(item.level)}
                    >
                      Active
                    </button>
                  </div>
                )}

                {activeLevels.includes(item.level) && (
                  <div>
                    <div className='flex flex-col gap-2'>
                      <div className='flex justify-center gap-x-4'>
                        <div
                          className={`h-8 w-8 rounded-full ${divColors[0]}`}
                        ></div>
                        <div
                          className={`h-8 w-8 rounded-full ${divColors[1]}`}
                        ></div>
                      </div>
                      <div className='flex justify-center gap-x-4'>
                        <div
                          className={`h-8 w-8 rounded-full ${divColors[2]}`}
                        ></div>
                        <div
                          className={`h-8 w-8 rounded-full ${divColors[3]}`}
                        ></div>
                      </div>
                      <div className='flex justify-between'>
                        <p className='flex gap-1 items-center text-textColor3'>
                          <GoPeople className='text-textColor2' />
                          {users.length}
                        </p>
                        <p className='flex gap-1 items-center text-textColor3'>
                          <HiOutlineArrowPath className='text-textColor2' />
                          {resetCount}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {isLocked && (
                  <RiLock2Fill className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 text-xl' />
                )}
              </div>
            );
          })}
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
          <button className='bg-[#26a17b] shadow-xl shadow-[#00000079] text-textColor3 px-8 mt-5 py-3 rounded-full font-medium flex gap-2'>
            <Link to='/Upgradextwo' className='flex gap-2 items-center'>
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

export default Levelx1;
