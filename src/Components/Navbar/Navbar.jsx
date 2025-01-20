import { useState, useEffect } from 'react';
import { FaGripLines, FaRegBell } from 'react-icons/fa6';
import Menu from '../DashboardMenu/Menu';
import { Link } from 'react-router-dom';

const Navbar = ({ home }) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
    home(false);
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
    <div className='relative'>
      <div className='p-4 text-white flex justify-between border-b'>
        <Link to='/home'>
          <img src='' alt='logo' className='bg-Background rounded-full' />
        </Link>
        <div className='flex gap-2'>
          <p className='text-textColor2 text-xs px-3 py-2 rounded-full bg-Background'>
            Connect Wallet
          </p>
          <div className='bg-[#ae28a1] text-sm p-2 rounded-full'>
            <FaRegBell />
          </div>
          <div className='bg-Background flex items-center text-sm p-2 rounded-full'>
            <FaGripLines onClick={handleMenu} />
          </div>
        </div>
      </div>

      {menu && (
        <div className='absolute top-0 h-[135vh] w-full text-textColor3 bg-black transition-all duration-500'>
          <Menu menu={setMenu} home={home} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
