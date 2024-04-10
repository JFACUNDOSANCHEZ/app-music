import React from 'react';
import { Instagram, Facebook, Twitter, Twitch } from 'react-feather';
import Cuerpo from './Cuerpo';
import Nav from './Nav';


export default function Video() {
  return (
    <div className="relative h-screen">
      <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full">
        <source src="/vd.mp4" type="video/mp4" />
  
      </video>
     
      <div className="absolute inset-0 bg-black opacity-60"></div>
    
      <div className="absolute bottom-0 animate__animated animate__slideUp left-0 p-4">
        <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer" className="text-white mr-4 ">
          <Instagram size={32} className='animate__animated animate__slideInLeft' />
        </a>
        <a href="https://www.facebook.com/tucuenta" target="_blank" rel="noopener noreferrer"  className="text-white mr-4">
          <Facebook size={32} className='animate__animated animate__slideInLeft' />
        </a>
        <a href="https://www.facebook.com/tucuenta" target="_blank" rel="noopener noreferrer"  className="text-white mr-4" >
          <Twitter size={32} className='animate__animated animate__slideInLeft' />
        </a>
        <a href="https://www.facebook.com/tucuenta" target="_blank" rel="noopener noreferrer"  className="text-white">
          <Twitch size={32} className='animate__animated animate__slideInLeft' />
        </a>
      </div>
    
      <div className="absolute inset-0 flex items-center justify-center text-white text-center">
        <Cuerpo></Cuerpo>
      </div>
      <Nav></Nav>
    </div>
  );
};