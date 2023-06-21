import React from 'react';
import Button from '../ui/button';

const Posluchaj = () => {
  return (
    <div className='grid px-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
        <div className='md:hidden'>
          <iframe
            title='episode 1'
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
            title='episode 2'
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
          <p className='mb-4 w-[94px] rounded-2xl bg-blue-100 pt-1 text-center text-base font-bold md:mb-2 md:font-spartan-bold md:text-base'>
            Podcast
          </p>
          <p className='mb-2 pt-2 text-2xl font-bold  md:mb-0 md:font-spartan-bold md:text-4xl'>
            Wszystko jest ok
          </p>
          <div className='  text-center text-sm sm:px-10 sm:pt-4 md:pt-0 md:text-justify md:text-base'>
            <p className='font-josefin mb-2 text-xs  md:pt-4 md:text-center md:text-sm '>
              Czas słuchania: 10 minut
            </p>
            <p className=' text-center font-spartan-light text-sm sm:px-10 sm:pt-4 md:pt-0 md:text-justify md:text-base'>
              Są takie rzeczy, sprawy, sytuacje czy uczucia, których nie da się
              opisać słowami. Widziałam w życiu różne cierpienia, słabości i
              upadki. Oglądałam wojny, uczestniczyłam w bitwach, krzyczałam i
              kłóciłam się nie raz i nie dwa . Doświadczałam wielu porażek i
              popełniałam błędy, które bolały nie tylko mnie. Kiedy ktoś
              niezwykle bliski zabił człowieka, czułam się współwinna, bo
              przecież coś mogłam zrobić...
            </p>
          </div>
          <Button
            withLink
            text='słuchaj więcej...'
            color='bg-white'
            link={'/podcasty'}
          />
        </div>
      </div>
    </div>
  );
};

export default Posluchaj;
