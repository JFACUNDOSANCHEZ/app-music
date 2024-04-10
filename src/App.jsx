import { useState, useEffect } from 'react'
import Video from './componentes/Video'
import MusicPlayer from './componentes/MusicPlayer'
import Musica from './componentes/Musica '
import {canciones, planes} from './componentes/api'
import Premium from './componentes/Premium'
import CardsPremium from './componentes/CardsPremium'
function App() {

  const m1 = canciones.slice(0,5)
  const m2 = canciones.slice(5,10)
  const m3 = canciones.slice(10,15)



  return (
    <>
    <div className='bg-black'>
      
      <Video />
   <div >
<h2 className='text-white text-4xl m-6'>Top 5</h2>
<Musica canciones={m1}></Musica>
<h2 className='text-white text-4xl m-6 '>Lo mas escuchado</h2>
<Musica canciones={m2}></Musica>
<h2 className='text-white text-4xl  m-6 '>Musica para todo </h2>
<Musica canciones={m3}></Musica>
 
 <MusicPlayer></MusicPlayer>
<hr className="border border-white w-1/2 mx-auto  mt-72" /> 
<div className=' mt-80'>
<Premium></Premium>

</div>

<div className=' mt-16'>
<CardsPremium info={planes} ></CardsPremium>
</div>


   </div>
   </div>
    </>
    
  );
}

export default App;