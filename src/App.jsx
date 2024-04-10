import { useState, useEffect } from 'react'
import Video from './componentes/Video'
import Playlist from './componentes/Playlist'
import Cardo from './componentes/ui/Card'
import Musica from './componentes/Musica '
import canciones from './componentes/api'
import Premium from './componentes/Premium'
function App() {

  const m1 = canciones.slice(0,5)
  const m2 = canciones.slice(5,10)
  const m3 = canciones.slice(10,15)
  const m4 = canciones.slice(15,20)


  return (
    <div className='bg-black'>
      
      <Video />
   <div >
<h2 className='text-white text-4xl m-6'>Top 5</h2>
<Musica canciones={m1}></Musica>
<h2 className='text-white text-4xl m-6 '>Lo mas escuchado</h2>
<Musica canciones={m2}></Musica>
<h2 className='text-white text-4xl  m-6 '>Musica para todo </h2>
<Musica canciones={m3}></Musica>
<h2 className='text-white text-4xl m-6  '>Rock Nacional</h2>
<Musica canciones={m4}></Musica>
<div className=' mt-28'>
<Premium></Premium>

</div>
<div className=' mt-16'>

<Cardo></Cardo>
</div>

   </div>
   </div>
    
  );
}

export default App;