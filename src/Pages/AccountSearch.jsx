import { HiMiniXMark } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import Menu from '../Components/DashboardMenu/Menu';

const AccountSearch = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='w-full min-h-screen text-textColor3 bg-textColor'>
        <div className='px-3 flex items-center justify-between'>
          <img
            src='/assets/HomeImages/logo.png'
            alt='logo'
            className='h-14 w-14 ms-2 rounded-full'
          />
          <div className='flex justify-end py-4'>
            <div className='inline-block bg-Background bg-opacity-20 p-2 rounded-full shadow-2xl'>
              <HiMiniXMark
                className='text-white text-3xl cursor-pointer'
                onClick={() => navigate('/home')}
              />
            </div>
          </div>
        </div>
        <div className='px-4 border-b border-textColor2 pb-4'>
          <h1 className='text-textColor3 text-xl font-medium'>Preview ID</h1>
          <div className='flex gap-3 my-3'>
            <input
              type='text'
              className='w-3/4 bg-Background bg-opacity-20 px-4 py-2 rounded-lg'
            />
            <button className='font-medium w-1/4 bg-Background bg-opacity-20 px-4 py-2 rounded-lg'>
              Go
            </button>
          </div>
          <div className='bg-gradient-to-r from-[#000000] to-[#747474] w-full mx-auto flex items-center justify-center px-8 py-3 mt-4 text-textColor3 font-medium rounded-lg'>
            <button>Exit preview mode</button>
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
};
export default AccountSearch;
