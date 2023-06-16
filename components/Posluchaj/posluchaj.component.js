import React from 'react';

const Posluchaj = () => {
  return (
    <div className='grid px-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
        <div className='md:hidden'>
          <iframe
            src='https://open.spotify.com/embed/episode/0Qxe0OD0KkihZ4vxLLWToO?utm_source=generator'
            width='100%'
            height='200'
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
        <div className='flex flex-col items-center justify-center	'>
          <p className='w-[94px] text-center rounded-2xl bg-blue-100 pt-1 mb-4 text-base font-bold md:font-spartan-bold md:text-base md:mb-2'>
            Podcast
          </p>
          <p className='pt-2 mb-2 text-xl font-bold sm:text-base md:font-spartan-bold md:text-4xl md:mb-0'>
            Wszystko jest ok
          </p>
          <div className=' font-josefin text-xs sm:px-10 sm:pt-4 sm:text-sm md:font-spartan-light md:text-base md:pt-0 md:text-justify'>
            <p className="md:text-center md:text-sm md:p-2">Czas słuchania: 10 minut</p>
          Są takie rzeczy, sprawy, sytuacje czy uczucia, których nie da się opisać słowami. Widziałam w życiu różne cierpienia, słabości i upadki. Oglądałam wojny, uczestniczyłam w bitwach, krzyczałam i kłóciłam się nie raz i nie dwa . Doświadczałam wielu porażek i popełniałam błędy, które bolały nie tylko mnie. Kiedy ktoś niezwykle bliski zabił człowieka, czułam się współwinna, bo przecież coś mogłam zrobić...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posluchaj;
