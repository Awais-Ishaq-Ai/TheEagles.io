import { useState, useEffect } from 'react';
import { FaGripLines, FaRegBell } from 'react-icons/fa6';
import Menu from '../DashboardMenu/Menu';
import { Link } from 'react-router-dom';
import { HiMiniXMark } from 'react-icons/hi2';

const Navbar = ({ home }) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
    home(false);
  };

  const handleRendering = () => {
    setMenu(false);
    home(true);
  };

  useEffect(() => {
    if (menu) {
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowX = 'auto';
    }

    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, [menu]);

  return (
    <div className='relative bg-[#ae28a1]'>
      <div className='text-white flex items-center justify-between border-b'>
        <Link to='/home'>
          <img
            src='/assets/HomeImages/logo.png'
            alt='logo'
            className='h-14 w-14 ms-2 rounded-full'
          />
        </Link>
        <div className='flex gap-2 p-4'>
          <p className='text-textColor3 text-xs px-3 py-2 rounded-full bg-textColor3 bg-opacity-30'>
            Connect Wallet
          </p>
          <div className='bg-[#f032dd] text-base p-2 rounded-full'>
            <FaRegBell />
          </div>
          <div className='bg-Background flex items-center text-sm p-2 rounded-full'>
            <FaGripLines onClick={handleMenu} />
          </div>
        </div>
      </div>

      {menu && (
        <div className='absolute top-0 h-[135vh] w-full text-textColor3 bg-black transition-all duration-500'>
          <div className='px-3 flex items-center justify-between border-b border-textColor2'>
            <img
              src='/assets/HomeImages/logo.png'
              alt='logo'
              className='h-14 w-14 ms-2 rounded-full'
            />
            <div className='flex justify-end py-4'>
              <div className='inline-block bg-gray-800 p-2 rounded-full shadow-2xl'>
                <HiMiniXMark
                  className='text-white text-3xl cursor-pointer'
                  onClick={handleRendering}
                />
              </div>
            </div>
          </div>
          <Menu menu={setMenu} home={home} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
