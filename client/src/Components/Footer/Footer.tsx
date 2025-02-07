import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import instagram from '../../Assets/ig.svg';
import mail from '../../Assets/mail.svg';
import youtube from '../../Assets/youtube.svg';
import whatsapp from '../../Assets/whatsapp.svg';
import phone from '../../Assets/call.svg';
import Logo from "../../Assets/logo.PNG";


const Footer = () => {
  return (
    <div className=' bottom-0 left-0 right-0 flex justify-center items-center w-full flex-col bg-gray-200'>
      <div className="footer-texts text-center">
      <img src={Logo} alt="Alliswell Logo" className="mx-auto w-4/5 h-4/ object-contain" />
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
        <a href='https://www.instagram.com/alliswellshotit/?locale=Online%2Bentertainment%2C%2Breal%2Bperson%2C%2Belectronic%2Bchess%2Band%2Bcards%2C%2Blottery%2C%2Bsports%2C%2Bcomprehensive%2Breputation%2B(Telegram%3A%2B%40UUjd888888).aqpg&hl=nl' target='_blank' rel='noreferrer' className='mx-2.5'>
          <img src={instagram} alt="instagram" className='w-8 h-8' />
        </a>
        <a href='mailto:productions.alliswell@gmail.com' target='_blank' rel='noreferrer' className='mx-2.5'>
          <img src={mail} alt="mail" className='w-8 h-8' />
        </a>
        <a href='https://www.youtube.com/@alliswellcreativestudios' target='_blank' rel='noreferrer' className='mx-2.5'>
          <img src={youtube} alt="youtube" className='w-8 h-8' />
        </a>
        <a href='http://wa.me/233552727570' target='_blank' rel='noreferrer' className='mx-2.5'>
          <img src={whatsapp} alt="whatsapp" className='w-8 h-8' />
        </a>
        <a href='tel:+233552727570' target='_blank' rel='noreferrer' className='mx-2.5'>
          <img src={phone} alt="phone" className='w-8 h-8' />
        </a>
      </div>
      <div className="py-1">
        <p className='text-center text-gray-600'>© 2025 Alliswell Shot It. All rights reserved.
        </p>
        {/* the designer and the coders name  */}
        <p className='text-center py-4 ' style={{ color: '#421B9F'}}>Designed by Nana
        </p>
      </div>
    </div>
  );
}

export default Footer;
