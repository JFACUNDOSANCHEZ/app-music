import React from 'react';

export default function CardsPremium({ info }) {
  // Función para generar un color aleatorio
  const generarColor = () => {
    const colores = ['-blue-400', '-green-400', '-purple-400'];
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    return colores[indiceAleatorio];
  };

  return (
    <div className='text-white items-center flex h-screen justify-between'>
      {info.map((card) => {
        const color = generarColor(); // Generar un color aleatorio una vez
        return (
          <div key={card.id} className={`p-6 rounded-xl m-4 border-white h-1/2 bg-black text-white hover:bg-white hover:text-black transition duration-300 border w-3/4 `}>
            <p className={`text-start text-4xl p-6 text${color}`}>{card.plan}</p>
            <p className='text-2xl'>${card.precio} al mes</p>
            <hr className="border border-black w-1/2 mx-auto my-4" /> 
            <ul className='list-disc text-left px-6'>
              {card.beneficio.map((b, index) => (
                <li key={index}>{b}</li>
              ))}
            </ul>
            <div className="text-center"> 
              <button className={`p-2 rounded-full m-4 bg${color}`}>
                Contratar plan {card.plan}
              </button>
            </div>
            <p className='text-gray-600'>{card.terminos}</p>
          </div>
        );
      })}
    </div>
  );
}