import React from 'react';
import 'animate.css/animate.css';
export default function Musica({ canciones }) {
  return (
    <div id="canciones" className="flex overflow-hidden animate__animated animate__zoomIn">
      {canciones.map((cancion, index) => (
        <div key={index} className="w-full p-2 relative">
       
          <img
            src={cancion.imagen}
            alt={cancion.nombre}
            className="h-full  transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
          />
          {/* Icono de reproducción */}
          <p className="text-white text-center mt-2">{cancion.nombre}</p>
        </div>
      ))}
    </div>
  );
}