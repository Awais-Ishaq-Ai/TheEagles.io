import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';

const Message = () => {
  return (
    <div className='h-screen'>
      <div className='bg-Background h-96'>
        <div className='text-textColor3 bg-black p-4 flex justify-between items-center'>
          <h3 className='text-lg'>
            Message <span className='text-[#4531FB]'>ID</span>
          </h3>
          <div className='bg-[#4531FB] p-1 rounded-full'>
            <AiOutlineMessage className='text-xl' />
          </div>
        </div>
        <div className='p-5'>
          <h3 className='text-textColor2 text-2xl'>This is Message Box</h3>
        </div>
      </div>
    </div>
  );
};
export default Message;
