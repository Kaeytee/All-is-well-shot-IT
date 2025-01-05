import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar.tsx';  
import Footer from './Components/Footer/Footer.tsx';

const App = () => {
  return (
    <div className='w-4/5 mx-auto'>
      <Navbar/>
      App
      <Footer/>
      </div>
  )
}

export default App