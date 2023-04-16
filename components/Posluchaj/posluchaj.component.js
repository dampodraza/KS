import React from 'react';

const Posluchaj = () => {
  return (
    <div className='grid px-5'>
      <p className='mb-6 text-center font-spartan-bold text-4xl'>Posłuchaj</p>
      <div className='grid gap-8 md:grid-cols-2'>
        <div className='md:hidden'>
          <iframe
            src='https://open.spotify.com/embed/episode/0Qxe0OD0KkihZ4vxLLWToO?utm_source=generator'
            width='100%'
            frameBorder='0'
            allowfullscreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
        </div>
        <div className='hidden md:block'>
          <iframe
            src='https://open.spotify.com/embed/episode/0Qxe0OD0KkihZ4vxLLWToO?utm_source=generator'
            width='100%'
            height='352'
            frameBorder='0'
            allowfullscreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Posluchaj;
