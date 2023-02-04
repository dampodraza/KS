import React from 'react';

const Posluchaj = () => {
  return (
    <div className='grid'>
      {/* <p className="text-4xl font-spartan-bold mb-6 text-center mt-8"> */}
      <p className='mb-6 text-center font-spartan-bold text-4xl '>Posłuchaj</p>
      <div className='flex flex-col'>
        <iframe
          title='spotifyPodcast'
          style={{ borderRadius: '12px', marginBottom: '20px' }}
          src='https://open.spotify.com/embed/episode/0Qxe0OD0KkihZ4vxLLWToO?utm_source=generator'
          width='100%'
          height='152'
          loading='lazy'
          frameBorder='0'
          allowFullScreen=''
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        ></iframe>
      </div>
    </div>
  );
};

export default Posluchaj;
