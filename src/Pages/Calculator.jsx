import React, { useState } from 'react';

const Calculator = () => {
  const [selected, setSelected] = useState(null);
  const [value, setValue] = useState(0.5);
  const [active, setActive] = useState('X3');
  const [activepara, setActivepara] = useState(
    'Basic matrix program,which is best for those who are self-reliant and prefer independent development'
  );
  const number = [
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: 4 },
    { num: 5 },
    { num: 6 },
    { num: 7 },
    { num: 8 },
    { num: 9 },
    { num: 10 },
    { num: 11 },
    { num: 12 },
  ];
  const handleLevel = (i) => {
    setSelected(i);
    if (active == 'X3') {
      setValue(0.5 * i + 1);
    } else {
      setValue(0.9 * i + 1);
    }
  };
  const handleValueX3 = () => {
    setActive('X3');
    setValue(0.5);
    setActivepara(
      'Basic matrix program,which is best for those who are self-reliant and prefer independent development'
    );
  };
  const handleValueX4 = () => {
    setActive('X4');
    setValue(0.9);
    setActivepara(
      'More advanced program, designed for team work. Results are achieved here through direct partners, as well as through spillovers from other participate.'
    );
  };
  return (
    <div className='bg-black text-textColor3 p-2 pt-5'>
      <div className='text-center'>
        <h1 className='text-md font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent'>
          The Eagles.io Participant
        </h1>
        <h3 className='text-md'>Calculator</h3>
        <p className='my-5 w-[70%] mx-auto text-[13px] text-textColor2'>
          Calculate your potential result from participating in The Eagles.io by
          selecting levels to activate below. The results are calculations for 1
          cycle of all selected levels.
        </p>

        <div
          className={`bg-gradient-to-r w-3/4 mx-auto flex items-center justify-center px-8 py-3 mt-4 text-textColor3 font-medium rounded-lg  ${
            active == 'X3'
              ? 'from-[#5b4fc6] to-[#170e61]'
              : 'from-[#000000] to-[#747474]'
          }`}
          onClick={handleValueX3}
        >
          <button>x3</button>
        </div>
        <div
          className={`bg-gradient-to-r w-3/4 mx-auto flex items-center justify-center px-8 py-3 mt-4 text-textColor3 font-medium rounded-lg  ${
            active == 'X4'
              ? 'from-[#5b4fc6] to-[#170e61]'
              : 'from-[#000000] to-[#747474]'
          }`}
          onClick={handleValueX4}
        >
          <button>x4</button>
        </div>
      </div>
      <div className='bg-Background text-white mt-5 py-3'>
        <div className='flex items-center px-3'>
          <h3 className='p-2 bg-[#4531FB] rounded-full px-3'>{active}</h3>
          <h3 className='ml-5'>The Eagles.io</h3>
        </div>
        <p className='text-[13px] text-textColor2 mt-3 px-3'>{activepara}</p>
        <div className='mt-4 w-[85%] flex gap-6 flex-wrap px-3'>
          {number.map((num, i) => {
            return (
              <div
                key={i}
                className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  selected === i ? 'bg-[#4531FB]' : 'bg-[#4E4E4E]'
                }`}
                onClick={() => handleLevel(i)}
              >
                {num.num}
              </div>
            );
          })}
        </div>
        <p className='text-[13px] text-textColor2 mt-3 mb-2 px-3'>
          Cost of all selected slots
        </p>
        <h2 className='text-textColor3 font-semibold px-3'>{value} USDT</h2>
        <hr />
        <p className='text-[13px] text-textColor2 mt-3 px-3'>
          Result of all selected
        </p>
        <h2 className='text-textColor3 text-2xl font-semibold px-3'>
          {value} USDT
        </h2>
      </div>
    </div>
  );
};
export default Calculator;
