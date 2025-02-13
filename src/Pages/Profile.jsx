import React, { useState, useEffect } from 'react';
import { GrGallery } from 'react-icons/gr';
import { IoClose } from 'react-icons/io5';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const [name, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [socialLinks, setSocialLinks] = useState([]);
  const [currentLink, setCurrentLink] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClickOutside = (event) => {
    if (event.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  const socialMedia = [
    {
      id: 1,
      icon: <FaFacebook className='text-white' />,
      bgColor: 'bg-Background',
    },
    {
      id: 2,
      icon: <FaTwitter className='text-white' />,
      bgColor: 'bg-Background',
    },
    {
      id: 3,
      icon: <FaInstagram className='text-white' />,
      bgColor: 'bg-Background',
    },
    {
      id: 4,
      icon: <FaYoutube className='text-white' />,
      bgColor: 'bg-Background',
    },
    {
      id: 5,
      icon: <FaWhatsapp className='text-white' />,
      bgColor: 'bg-Background',
    },
  ];

  const addSocialLink = () => {
    if (currentLink) {
      setSocialLinks([...socialLinks, currentLink]);
      setCurrentLink('');
      closeModal();
    }
  };

  const createUser = async () => {
    try {
      const formData = {
        id: new Date().getTime(),
        name,
        email,
        description,
        socialLinks,
      };

      console.log('Sending data:', formData); // Debugging

      const response = await axios.post(
        'http://localhost:2700/api/profile',
        formData
      );

      if (response.data) {
        navigate('/home');
      }
    } catch (err) {
      console.error('Error:', err?.response?.data);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className='w-[95%] mx-auto mb-5'>
        <p className='text-textColor2 my-2'>
          Dashboard / <span className='text-textColor3'>Profile</span>
        </p>
        <p className='text-textColor3 text-xl font-medium'>Profile</p>
        <div className='h-[70vh] w-full my-2 bg-Background rounded-lg py-5 flex flex-col justify-start items-center'>
          <div className='h-[70px] w-[70px] bg-[#5c5c5c] rounded-full flex justify-center items-center mx-auto'>
            <GrGallery className='text-xl text-textColor3' />
          </div>
          <p className='text-textColor2 font-medium text-center my-2'>
            Choose your Photo
          </p>
          <form>
            <label className='text-textColor2 font-medium block mt-3 mb-1'>
              Nickname
            </label>
            <input
              type='text'
              value={name}
              onChange={(e) => setNickname(e.target.value)}
              className='bg-[#5c5c5c] py-3 px-3 w-[320px] rounded text-textColor3 outline-none'
              placeholder='Your Nickname'
            />
            <label className='text-textColor2 font-medium block mt-3 mb-1'>
              Email
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-[#5c5c5c] py-3 px-3 w-[320px] rounded text-textColor3 outline-none'
              placeholder='Your Email'
            />
            <label className='text-textColor2 font-medium block mt-3 mb-1'>
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='h-[15vh] w-[320px] text-white rounded bg-[#5c5c5c] px-3 py-2 outline-none'
              placeholder='Your Description'
            ></textarea>
          </form>
        </div>

        <div className='w-full h-[20vh] px-5 py-3 bg-Background rounded-lg my-4'>
          <p className='text-gray-300'>Social media accounts</p>
          <div className='h-[11vh] w-full my-2 shadow-xl shadow-[#00000079] rounded-lg flex justify-center items-center bg-gradient-to-r from-[#695628d0] to-[#8f8673d0] '>
            <div className='h-[93%] w-[98%] rounded-lg bg-Background'>
              <button
                className='bg-white font-medium w-[90%] py-2 rounded-lg my-4 mx-auto block'
                onClick={openModal}
              >
                Add social page
              </button>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div
            id='modal-overlay'
            className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
          >
            <div className='bg-black w-[90%] max-w-[600px] p-6 rounded-lg relative'>
              <IoClose
                onClick={closeModal}
                className='absolute top-2 right-2 text-2xl text-gray-500 cursor-pointer'
              />
              <div className='flex flex-col justify-center items-center py-6'>
                <div>
                  <p className='text-white font-semibold text-xl'>
                    Add social links
                  </p>
                  <p className='text-textColor2 font-medium text-sm text-center'>
                    Select social network
                  </p>
                </div>
                <div className='flex space-x-6 my-8'>
                  {socialMedia.map((item) => (
                    <div
                      key={item.id}
                      className={`h-[30px] w-[30px] ${item.bgColor} rounded-full flex justify-center items-center`}
                    >
                      {item.icon}
                    </div>
                  ))}
                </div>

                <input
                  type='text'
                  value={currentLink}
                  onChange={(e) => setCurrentLink(e.target.value)}
                  className='bg-Background text-white py-2 w-full rounded px-2 outline-none'
                  placeholder='Add your link'
                />
                <button
                  className='w-full py-2 bg-Background text-white rounded mt-4'
                  onClick={addSocialLink}
                >
                  Add Link
                </button>
              </div>
            </div>
          </div>
        )}

        <button
          className='text-white bg-gradient-to-r from-[#a67912] to-[#453b23] shadow-md shadow-[#3b3b3b79] w-[80%] py-2 rounded-lg mx-auto block'
          onClick={createUser}
        >
          Save Changes
        </button>
      </div>
    </>
  );
}

export default Profile;
