import { HiMiniXMark } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import flag from '/assets/AuthImages/raceFlag.png';
import Members from '../Components/Home/Members';
import Contract from '../Components/Home/Contract';
import History from '../Components/Home/History';
import Footer from '../Components/Footer/Footer';
import { useState } from 'react';

const Authenticate = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleConnectClick = () => {
    setShowSidebar(true);
  };

  const raceplayers = [
    {
      id: '1',
      playerName: 'MianAsim',
      playerId: 'ID 1826817',
      prize: '$860',
    },
    {
      id: '2',
      playerName: 'MianAsim',
      playerId: 'ID 1826817',
      prize: '$860',
    },
    {
      id: '3',
      playerName: 'MianAsim',
      playerId: 'ID 1826817',
      prize: '$860',
    },
    {
      id: '4',
      playerName: 'MianAsim',
      playerId: 'ID 1826817',
      prize: '$860',
    },
    {
      id: '5',
      playerName: 'MianAsim',
      playerId: 'ID 1826817',
      prize: '$860',
    },
  ];

  return (
    <>
      <div className='relative overflow-hidden'>
        <div className='py-4'>
          <div className='flex justify-end px-3'>
            <div className='inline-block bg-Background p-2 rounded-full shadow-2xl'>
              <HiMiniXMark
                className='text-white text-3xl'
                onClick={() => navigate('/')}
              />
            </div>
          </div>

          <div className='bg-gradient-to-r from-[#a67912] to-[#2a261e] mx-3 px-3 py-6 mt-5 rounded-lg'>
            <h1 className='text-textColor3 text-xl font-medium'>
              Welcome to The Eagles.io
            </h1>
            <p className='text-textColor2 text-xs mt-3'>
              Connect your wallet to start working.First Time here? Watch
              atutorial to learn more
            </p>
            <div>
              <div
                onClick={handleConnectClick}
                className='bg-gradient-to-r from-[rgba(6,67,1,0.98)] to-[#747474] w-3/4 mx-auto flex items-center justify-center px-8 py-3 mt-12 text-white font-medium rounded-lg'
              >
                <button className='font-bold'>Connect wallet</button>
              </div>
              <div className='bg-gradient-to-r  from-[#13110e] to-[#747674] text-white w-3/4 mx-auto flex items-center justify-center px-8 py-3 mt-6  font-medium rounded-lg'>
                <button>Connect tutorial</button>
              </div>
            </div>
          </div>

          <div className='my-8 mx-3'>
            <h1 className='text-textColor3 text-xl font-medium'>
              Account Preview
            </h1>
            <p className='text-xs text-textColor2 w-[85%] mt-3'>
              Look up any The Eagles.io USDT member account in preview mode.
              Enter ID or USDT address to Preview pr click Demo to view a random
              account
            </p>
          </div>

          <div className='bg-gradient-to-r from-[#a67912] to-[#2a261e] px-3 mx-3 py-6 mt-5 rounded-lg'>
            <h1 className='text-textColor3 text-xl font-medium'>
              Ender ID or USDT wallet
            </h1>
            <div>
              <Link to='#'>
                <div className='bg-gradient-to-r from-[rgba(6,67,1,0.98)] to-[#747474] w-3/4 mx-auto flex items-center justify-center px-8 py-3 mt-9 text-white font-medium rounded-lg '>
                  <button className='font-bold'>Example: 87381</button>
                </div>
              </Link>
              <Link to='#'>
                <div className='bg-gradient-to-r  from-[#13110e] to-[#747674] text-white w-3/4 mx-auto flex items-center justify-center px-8 py-3 mt-6 text-balck font-medium rounded-lg'>
                  <button>Preview</button>
                </div>
              </Link>
            </div>
          </div>

          <div className='bg-Background px-3 py-3 mt-5 rounded-lg mx-3'>
            <h1 className='text-textColor3 text-xl font-medium'>
              Don’t Know any ID?
            </h1>
            <Link to='#'>
              <div className='bg-gradient-to-r from-[#a67912] to-[#1a1303] w-1/2 flex items-center justify-center px-8 py-3 mt-6 text-textColor3 font-medium rounded-lg'>
                <button>Check Demo</button>
              </div>
            </Link>
          </div>

          {/* <div className='px-3 mt-5 mx-3'>
            <h1 className='text-textColor3 text-xl font-medium'>
              Weekly Races
            </h1>
            <div className='bg-[#FFCE3A] w-full h-auto flex justify-center items-end mt-3 rounded-lg'>
              <img src={flag} alt='' />
            </div>

            <div className='mt-7'>
              {raceplayers.map((player, index) => {
                return (
                  <div
                    key={index}
                    className='text-textColor3 px-2 py-3 flex border-b items-center justify-between border-textColor2'
                  >
                    <h1 className='text-2xl'>{player.id}</h1>
                    <div className='flex gap-2 items-center'>
                      <div className='h-7 w-7 rounded-full bg-textColor2'></div>
                      <div>
                        <h4 className='text-sm'>{player.playerName}</h4>
                        <p className='text-xs text-textColor2'>
                          {player.playerId}
                        </p>
                      </div>
                    </div>
                    <p>{player.prize}</p>

                    <button className='bg-gradient-to-r from-[#5b4fc6] to-[#170e61] text-textColor3 text-xs rounded-md px-3 py-2'>
                      Join Team
                    </button>
                  </div>
                );
              })}
            </div>
          </div> */}

          <div className='px-3 mt-5'>
            <h1 className='text-textColor3 text-xl font-medium'>
              Platform recent activity
            </h1>

            <Members />
            <Contract />
          </div>
          <History />

          <div className='flex flex-col justify-center px-3 h-auto w-full'>
            <h1 className='text-textColor3 text-2xl w-3/4 font-medium mt-14'>
              Need help with using the platform
            </h1>
            <p className='text-textColor2 mt-6 text-sm w-3/4'>
              Get qualified support from The Eagles.io experts vuia online chat
            </p>

            <div className='bg-gradient-to-r from-[#a67912] to-[#1a1303] w-3/4 flex items-center justify-center px-8 py-3 mt-10 text-textColor3 font-medium rounded-lg mb-14'>
              <button>Connect support</button>
            </div>
          </div>
        </div>
        <Footer />

        {/* Sidebar */}
        <div
          className={`absolute top-0 h-screen w-full bg-black py-4 px-3 transition-all duration-500 ${
            showSidebar ? 'right-0' : '-right-full'
          }`}
        >
          <div className='flex justify-end'>
            <div className='inline-block bg-Background p-2 rounded-full shadow-2xl'>
              <HiMiniXMark
                className='text-white text-3xl'
                onClick={() => setShowSidebar(false)}
              />
            </div>
          </div>
          <Link to='/passId'>
            <div className='mt-5 bg-zinc-900 text-textColor2 rounded-lg flex items-center gap-6 py-5 px-3'>
              <div className='h-16 w-16 bg-textColor3 rounded-full flex justify-center items-center'>
                <img
                  src='/assets/AuthImages/trust.png'
                  alt=''
                  className='h-[48px] w-[48px]'
                />
              </div>
              <div>
                <h1 className='text-2xl font-medium text-textColor3'>
                  Trust wallet
                </h1>
                <p className='text-xs'>DApp in App</p>
              </div>
            </div>
          </Link>
          <Link to='#'>
            <div className='mt-3 bg-zinc-900 text-textColor2 rounded-lg flex items-center gap-6 py-5 px-3'>
              <div className='h-16 w-16 bg-textColor3 rounded-full flex justify-center items-center'>
                <img
                  src='/assets/AuthImages/pocket.png'
                  alt=''
                  className='h-[48px] w-[48px]'
                />
              </div>
              <div>
                <h1 className='text-2xl font-medium text-textColor3'>
                  TokenPocket
                </h1>
                <p className='text-xs'>DApp in App</p>
              </div>
            </div>
          </Link>
          <Link to='#'>
            <div className='mt-3 bg-zinc-900 text-textColor2 rounded-lg flex items-center gap-6 py-5 px-3'>
              <div className='h-16 w-16 bg-textColor3 rounded-full flex justify-center items-center'>
                <img
                  src='/assets/AuthImages/Mask.png'
                  alt=''
                  className='h-[48px] w-[48px]'
                />
              </div>
              <div>
                <h1 className='text-2xl font-medium text-textColor3'>
                  MetaMask
                </h1>
                <p className='text-xs'>DApp in App</p>
              </div>
            </div>
          </Link>

          <p className='text-textColor2 text-center mt-16 text-sm'>
            Got a Question?{' '}
            <span className='text-textColor3 font-medium'>Contact Support</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Authenticate;
