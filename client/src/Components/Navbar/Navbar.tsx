import React from 'react'
import './Navbar.css'
import Logo from '../../Assests/Logo.png';
export default function Navbar() {
  return (
	<div>
		<img src={Logo} alt=' All is wellLogo' className='w-1/5'/>
		<li>Home</li>
		<li>About</li>
		<li>Portfolio</li>
		<li>Team</li>
		<li>Contact</li>
		<li>Ratecard</li>
	</div>
  )
}
