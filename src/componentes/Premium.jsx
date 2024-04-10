import React, { useState, useEffect } from 'react';
import 'animate.css/animate.css';

export default function Premium() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth' // Esto hace que el desplazamiento sea suave
    });
  };

  return (
    <div className='text-white flex flex-col md:flex-row'>
      <div className="md:w-1/2 order-1">
        <div className={`transition-opacity duration-500 `}>
          <video autoPlay loop muted className="animate__animated animate__zoomIn object-cover ml-6 rounded-full w-full h-full">
            <source src="/pr.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="md:w-1/2 order-2 flex justify-center items-center">
        <div className="text-center mt-10 animate__animated animate__zoomIn ">
          <h1 className='text-4xl'>¿Quieres poder armar tus listas y <br /> escuchar desde cualquier lado? </h1>
          <button className='bg-green-500 mt-10 rounded-full p-3' onClick={scrollToBottom}>Contrata Premium</button>
        </div>
      </div>
    </div>
  );
}