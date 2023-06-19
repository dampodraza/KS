import React from 'react';

const PodcastPlayer = ({ src }) => {
  return (
    <div className='justify-left flex flex-row items-center pt-4'>
      <p className='mt-4 pl-2 text-left font-spartan-bold text-lg'>Posłuchaj</p>
      <audio
        className='w-[300px] pl-8 pt-2'
        controls
        preload='none'
      >
        <source src={src} type='audio/mpeg' />
      </audio>
    </div>
  );
};

export default PodcastPlayer;
