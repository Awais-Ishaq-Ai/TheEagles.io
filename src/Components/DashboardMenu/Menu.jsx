import { HiMiniXMark } from 'react-icons/hi2';
import {
  HiOutlineUserGroup,
  HiOutlineLink,
  HiOutlineChartBar,
  HiOutlineChat,
  HiOutlineGlobe,
  HiOutlineInformationCircle,
  HiOutlineCalculator,
  HiOutlineSearch,
  HiOutlineLogout,
} from 'react-icons/hi';
import { CiGrid41 } from 'react-icons/ci';
import { GoPeople } from 'react-icons/go';
import { RiArrowDownSLine, RiHandCoinFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Menu = ({ menu, home }) => {
  const [isTeamVisible, setIsTeamVisible] = useState(true);
  const [isInfoVisible, setIsInfoVisible] = useState(true);
  const [activeSpan, setActiveSpan] = useState('Dashboard');

  const handleRendering = () => {
    menu(false);
    home(true);
  };

  const toggleTeamVisibility = () => {
    setIsTeamVisible(!isTeamVisible);
  };

  const toggleInfoVisibility = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  const handleActiveSpan = (spanName) => {
    setActiveSpan(spanName);
  };

  const getSpanClass = (spanName) =>
    activeSpan === spanName ? 'text-textColor3' : 'text-textColor2';

  return (
    <>
      <div className='h-auto text-white'>
        <div className='px-3 py-4 flex justify-between border-b border-textColor2'>
          <img
            src=''
            alt='logo'
            className='bg-gray-800 rounded-full w-10 h-10'
          />
          <div className='flex justify-end'>
            <div className='inline-block bg-gray-800 p-2 rounded-full shadow-2xl'>
              <HiMiniXMark
                className='text-white text-3xl cursor-pointer'
                onClick={handleRendering}
              />
            </div>
          </div>
        </div>

        <div
          className={`py-4 px-3 border-b border-textColor2 flex items-center gap-2 cursor-pointer ${getSpanClass(
            'Dashboard'
          )}`}
        >
          <CiGrid41 className='text-xl' />
          <span onClick={() => handleActiveSpan('Dashboard')}>Dashboard</span>
        </div>

        <div
          className='flex justify-between items-center py-4 px-3 border-b border-textColor2'
          onClick={() => handleActiveSpan('Team')}
        >
          <div
            className={`flex gap-2 items-center cursor-pointer ${getSpanClass(
              'Team'
            )}`}
          >
            <HiOutlineUserGroup className='text-xl' />
            <span>Team</span>
          </div>
          <div>
            <RiArrowDownSLine
              className='text-xl cursor-pointer'
              onClick={toggleTeamVisibility}
            />
          </div>
        </div>
        {isTeamVisible && (
          <div className='text-textColor2'>
            <div
              className={`pl-10 flex items-center gap-2 py-4 px-3 border-b border-textColor2 cursor-pointer ${getSpanClass(
                'Partners'
              )}`}
            >
              <GoPeople />
              <span onClick={() => handleActiveSpan('Partners')}>Partners</span>
            </div>
            <div
              className={`pl-10 flex items-center gap-2 py-4 px-3 border-b border-textColor2 cursor-pointer ${getSpanClass(
                'Links'
              )}`}
            >
              <HiOutlineLink />
              <span onClick={() => handleActiveSpan('Links')}>Links</span>
            </div>
            <div
              className={`pl-10 flex items-center gap-2 py-4 px-3 border-b border-textColor2 cursor-pointer ${getSpanClass(
                'Stats'
              )}`}
            >
              <HiOutlineChartBar />
              <span onClick={() => handleActiveSpan('Stats')}>Stats</span>
            </div>
            <div
              className={`pl-10 flex items-center gap-2 py-4 px-3 border-b border-textColor2 cursor-pointer ${getSpanClass(
                'Massage'
              )}`}
            >
              <HiOutlineChat />
              <span onClick={() => handleActiveSpan('Massage')}>Massage</span>
            </div>
          </div>
        )}

        <div
          className={`flex items-center gap-2 py-4 px-3 border-b border-textColor2 cursor-pointer ${getSpanClass(
            'Social'
          )}`}
        >
          <HiOutlineGlobe className='text-xl' />
          <span onClick={() => handleActiveSpan('Social')}>Social</span>
        </div>

        <div
          className='flex items-center justify-between py-4 px-3 border-b border-textColor2'
          onClick={() => handleActiveSpan('Information')}
        >
          <div
            className={`flex items-center gap-2 cursor-pointer ${getSpanClass(
              'Information'
            )}`}
          >
            <HiOutlineInformationCircle className='text-xl' />
            <span>Information</span>
          </div>
          <div>
            <RiArrowDownSLine
              className='text-xl cursor-pointer'
              onClick={toggleInfoVisibility}
            />
          </div>
        </div>
        {isInfoVisible && (
          <div className='text-textColor2'>
            <div
              className={`pl-10 flex items-center gap-2 py-4 px-3 border-b border-textColor2 cursor-pointer ${getSpanClass(
                'Calculator'
              )}`}
            >
              <HiOutlineCalculator />
              <span onClick={() => handleActiveSpan('Calculator')}>
                Calculator
              </span>
            </div>
          </div>
        )}

        <div
          className={`flex items-center gap-2 py-4 px-3 border-b border-textColor2 cursor-pointer ${getSpanClass(
            'Mystery Luck'
          )}`}
        >
          <RiHandCoinFill className='text-xl' />
          <span onClick={() => handleActiveSpan('Mystery Luck')}>
            Mystery Luck
          </span>
        </div>

        <div
          className={`flex items-center gap-2 py-4 px-3 border-b border-textColor2 cursor-pointer ${getSpanClass(
            'Account Search'
          )}`}
        >
          <HiOutlineSearch className='text-xl' />
          <span onClick={() => handleActiveSpan('Account Search')}>
            The Eagles.io Account Search
          </span>
        </div>

        <div
          className={`flex items-center gap-2 py-4 px-3 border-b border-textColor2 cursor-pointer ${getSpanClass(
            'Log out'
          )}`}
        >
          <HiOutlineLogout className='text-xl' />
          <span onClick={() => handleActiveSpan('Log out')}>
            <Link to='/auth' onClick={() => home(true)}>
              Log out
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Menu;
