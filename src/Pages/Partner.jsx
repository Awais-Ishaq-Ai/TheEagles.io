import React, { useState } from 'react';
import { IoCopy } from 'react-icons/io5';
import { RiShare2Line } from 'react-icons/ri';

const Partner = () => {
  const data = [
    {
      id: 1,
      date: '2025-01-01',
      address: 1234567,
      x3: '10 BUSD',
      x4: '100 BUSD',
    },
    {
      id: 2,
      date: '2025-01-02',
      address: 2234567,
      x3: '20 BUSD',
      x4: '200 BUSD',
    },
    {
      id: 3,
      date: '2025-01-03',
      address: 3234567,
      x3: '30 BUSD',
      x4: '300 BUSD',
    },
    {
      id: 4,
      date: '2025-01-04',
      address: 4234567,
      x3: '40 BUSD',
      x4: '400 BUSD',
    },
    {
      id: 5,
      date: '2025-01-05',
      address: 5234567,
      x3: '50 BUSD',
      x4: '500 BUSD',
    },
    {
      id: 6,
      date: '2025-01-06',
      address: 6234567,
      x3: '60 BUSD',
      x4: '600 BUSD',
    },
    {
      id: 7,
      date: '2025-01-07',
      address: 7234567,
      x3: '70 BUSD',
      x4: '700 BUSD',
    },
  ];

  const [visibleRows, setVisibleRows] = useState(2);

  const handleShowMore = () => {
    setVisibleRows(visibleRows + 3);
  };

  return (
    <div className='h-screen'>
      <div className='bg-Background pb-6 overflow-hidden'>
        <div className='overflow-auto h-48'>
          <table className='min-w-[500px] table-auto'>
            <thead className='text-textColor2 sticky top-0 z-10 bg-Background'>
              <tr className='border-b border-textColor2'>
                <th className='py-3 ps-2 w-auto text-left'>Date</th>
                <th className='py-3 text-left w-auto'>Address</th>
                <th className='py-3 text-left w-auto'>ID</th>
                <th className='py-3 text-left w-auto'>x3</th>
                <th className='py-3 text-left w-auto pe-2'>x4</th>
              </tr>
            </thead>
            <tbody className='overflow-x-auto'>
              {data.slice(0, visibleRows).map((user) => (
                <tr key={user.id} className='text-textColor2 h-12'>
                  <td className='ps-3 w-[30%]'>{user.date}</td>
                  <td className='w-1/5'>{user.address}</td>
                  <td className='w-[10%]'>{user.id}</td>
                  <td className='w-1/5'>{user.x3}</td>
                  <td className='w-2/5'>{user.x4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='flex justify-center mt-2'>
          <button
            onClick={handleShowMore}
            className='text-textColor3 w-3/4 rounded-lg py-3 font-medium border border-textColor2'
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Partner;
