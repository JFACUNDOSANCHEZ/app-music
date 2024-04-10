import React, { useState, useEffect } from 'react';
import 'animate.css/animate.css';
export default function Premium() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 200;
      if (scrollY > scrollThreshold) {
        setShowVideo(true);
      } else {
        setShowVideo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='text-white flex'>
      <div className="w-1/2">
        <div className={`transition-opacity duration-500 ${showVideo ? 'opacity-100' : 'opacity-0'}`}>
          <video autoPlay loop muted className=" animate__animated animate__zoomIn object-cover ml-6 rounded-full w-full h-full">
            <source src="/pr.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="w-1/2 flex flex-col  justify-center items-center">
        <h1 className='text-4xl text-center mt-10 animate__animated animate__zoomIn '>¿Quieres poder armar tus listas y <br /> escuchar desde cualquier lado? </h1>
        <button className='bg-green-500 mt-10 rounded-full p-3'>Pruebalo Gratis</button>
      </div>
    </div>
  )
}