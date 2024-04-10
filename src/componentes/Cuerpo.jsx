import React from 'react';
import 'animate.css/animate.css';


export default function Cuerpo() {
    const scrollToMiddle = () => {
        const windowHeight = window.innerHeight;
        window.scrollTo({
            top: windowHeight / 1,
            behavior: 'smooth'
        });
    };

    return (
        <div className='h-screen flex flex-col justify-center items-center align-center bg-gradient-to-b text-white'>
          <div className='text-center w-[70%]'>
          <p className='text-4xl animate__animated animate__zoomIn '>Descubre tu próxima canción favorita</p>
                <br /><br />
                <p className='text-2xl text-gray-200 animate__animated animate__zoomIn  font-medium '>¡Con más canciones para explorar!</p>
            </div>
            <div className='mt-6'>
                <button className='px-4 py-2 bg-white text-black rounded-full mt-20 hover:bg-green-500 hover:text-white animate__animated animate__zoomIn transition duration-300 text-2xl font-light' onClick={scrollToMiddle}> comenzar</button>
            </div>
        </div>
    );
}