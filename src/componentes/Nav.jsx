import React from 'react';
import 'animate.css/animate.css';

export default function Nav() {
  return (
    <div>
      <nav className='text-white w-[93%] flex h-20 animate__animated animate__slideInDown items-center justify-end'>
        <input type="checkbox" id="menu" className="peer hidden" />
        <label htmlFor="menu" className="bg-menuopen rounded-full w-8 h-8 bg-center bg-cover cursor-pointer peer-checked:bg-menuclose transition-all z-50 md:hidden"></label>

        <div className="fixed inset-0 bg-gradient-to-b translate-x-full md:translate-x-0 md:transition-none md:static md:bg-none peer-checked:translate-x-0">
          <ul className="absolute w-[100%] rounded-xl mx-auto inset-x-0 bg-black text-center top-24 grid gap-24 p justify-center items-center md:static md:translate-x-0 md:bg-transparent md:w-max md:grid-flow-col md:p-0">
            <li><a href="#" className="text-white hover:text-green-500 transition duration-300">About us</a></li>
            <li><a href="#" className="text-white hover:text-green-500 transition duration-300">Community</a></li>
            <li><a href="#" className="text-white hover:text-green-500 transition duration-300">More</a></li>
            <li><a href="#" className="p-2 bg-white rounded-full text-black hover:bg-black hover:text-white transition duration-300">Playlist</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}