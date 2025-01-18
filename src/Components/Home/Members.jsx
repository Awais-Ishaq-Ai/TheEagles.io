import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { GoArrowUp } from 'react-icons/go';

const Members = () => {
  return (
    <>
      <div className='w-full h-full mt-4 pb-3 flex justify-between gap-2'>
        <div className='bg-Background px-2 py-3 w-1/2 rounded-lg h-1/2'>
          <h5 className='text-textColor2 flex items-center text-sm gap-1'>
            Total Members{' '}
            <span>
              <BsFillQuestionCircleFill className='text-textColor3 text-xl' />
            </span>
          </h5>
          <p className='text-textColor3 text-lg mt-2'>00000</p>
          <p className='text-green-700 flex'>
            <GoArrowUp className='text-xl' />
            <span>000</span>
          </p>
        </div>
        <div className='bg-Background w-1/2 rounded-lg'>
          <div className='border-b border-textColor2 px-2 py-3'>
            <h5 className='text-textColor2 flex items-center text-sm gap-1'>
              Members Recieved
              <span>
                <BsFillQuestionCircleFill className='text-textColor3 text-xl' />
              </span>
            </h5>
            <p className='text-textColor3 text-lg mt-2'>0000000 BUSD</p>
            <p className='text-green-700 flex'>
              <span>+00000 BUSD</span>
            </p>
          </div>
          <div className='px-2 py-3'>
            <p className='text-textColor3 text-lg'>0000000 BNB</p>
            <p className='text-green-700 flex'>
              <span>+00000 BNB</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Members;
