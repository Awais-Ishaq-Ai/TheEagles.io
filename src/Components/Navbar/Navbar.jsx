import { FaGripLines, FaRegBell } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <>
      <div className='p-4 text-white flex justify-between border-b'>
        <img src='' alt='logo' className='bg-Background rounded-full' />
        <div className='flex gap-2'>
          <p className='text-textColor2 text-xs px-3 py-2 rounded-full bg-Background'>
            Connect Wallet
          </p>
          <div className='bg-[#ae28a1] text-sm p-2 rounded-full'>
            <FaRegBell />
          </div>
          <div className='bg-Background flex items-center text-sm p-2 rounded-full'>
            <FaGripLines />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
