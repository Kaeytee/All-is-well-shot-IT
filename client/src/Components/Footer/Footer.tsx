import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import instagram from '../../Assets/ig.svg';
import mail from '../../Assets/mail.svg';
import youtube from '../../Assets/youtube.svg';
import whatsapp from '../../Assets/whatsapp.svg';
import phone from '../../Assets/call.svg';

const Footer = () => {
  return (
    <div className=' bottom-0 left-0 right-0 flex justify-center items-center w-full flex-col bg-gray-200'>
      <div className="footer-texts text-center">
        <h1 className='uppercase leading-tight text-9xl'>
          Alliswell <br/> shotit
        </h1>
        <p className='footer-about'>
          Invest with us, your passionate storytellers, as we capture the essence<br/> and emotions of your occasion.
        </p>
      </div>
      <div className="py-8">
        <NavLink to='/book-us' className='bg-black text-white hover:bg-gray-500 px-12 py-3 rounded-lg active:bg-gray-700'>
          Book Us
        </NavLink>
      </div>
      <div className="py-3 flex justify-center items-center">
        <a href='https://www.instagram.com/alliswell_shotit/' target='_blank' rel='noreferrer' className='mx-2.5'>
          <img src={instagram} alt="instagram" className='w-8 h-8' />
        </a>
        <a href='mailto:K9A8o@example.com' target='_blank' rel='noreferrer' className='mx-2.5'>
          <img src={mail} alt="mail" className='w-8 h-8' />
        </a>
        <a href='https://www.youtube.com/channel/UC8K9A8o' target='_blank' rel='noreferrer' className='mx-2.5'>
          <img src={youtube} alt="youtube" className='w-8 h-8' />
        </a>
        <a href='https://wa.me/1234567890' target='_blank' rel='noreferrer' className='mx-2.5'>
          <img src={whatsapp} alt="whatsapp" className='w-8 h-8' />
        </a>
        <a href='tel:1234567890' target='_blank' rel='noreferrer' className='mx-2.5'>
          <img src={phone} alt="phone" className='w-8 h-8' />
        </a>
      </div>
      <div className="py-1">
        <p className='text-center text-gray-600'>© 2024 AllisWell Shot It. All rights reserved.
        </p>
        {/* the designer and the coders name  */}
        <p className='text-center py-4 ' style={{ color: '#421B9F'}}>Designed by Nana , developed by <a href='https://example.com' target='_blank' rel='noreferrer' className='hover:bg-gray-500 hover:text-white'>BlockStract</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;