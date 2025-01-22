import { GoArrowUpRight } from 'react-icons/go';
import bgImage from '../../../public/assets/lvl3Images/Group 2.png';

const Notify = () => {
  return (
    <>
      <div className='w-full flex justify-center'>
        <div
          className='h-[240px] w-full bg-auto bg-no-repeat bg-top'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <GoArrowUpRight className='text-textColor3 mt-5 text-lg ms-auto me-10' />
          <h1 className='text-lg font-semibold text-textColor3 w-1/2 mx-auto'>
            Official <span className='text-landingtext'>Notify Bot</span> for
            busd.The Eagles.io Users
          </h1>
          <p className='text-textColor3 w-1/2 mt-3 text-xs mx-auto text-center'>
            Here you can get notifications all the event in your account
          </p>
        </div>
      </div>
    </>
  );
};
export default Notify;
