import React from 'react';
import { FaPlay, FaPause, FaForward } from 'react-icons/fa';

const MusicPlayer = ({ songName }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {/* Icono de reproducción */}
          <FaPlay className="text-2xl mr-2" />
          {/* Icono de pausa */}
          <FaPause className="text-2xl mr-2" />
          {/* Icono de adelantar */}
          <FaForward className="text-2xl mr-2" />
          {/* Nombre de la canción */}
          <p className="text-lg">{songName}</p>
        </div>
        {/* Controles adicionales como el volumen, lista de reproducción, etc. */}
        <div>
          {/* Aquí puedes agregar más botones o controles */}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;