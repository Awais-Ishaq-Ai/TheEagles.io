<<<<<<< HEAD
const Footer = () => {
  return <div>Footer</div>;
=======
import {
  FaFacebookF,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex justify-between mt-6 px-3 py-4 bg-Background'>
      <div>
        <p className='text-textColor2 text-sm font-semibold'>
          &copy; 2024 All Rights Reserved
        </p>
        <p className='text-textColor3 text-base font-medium'>Documents</p>
      </div>
      <div className='text-textColor3 text-xl flex items-center gap-3'>
        <FaFacebookF />
        <FaTwitter />
        <FaYoutube />
        <FaTelegramPlane />
      </div>
    </div>
  );
>>>>>>> 9f682a0730b8fcaac9723c7293e0bd785a0d62c4
};
export default Footer;
