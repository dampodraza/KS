import React from 'react';
import Button from '../ui/button';
import Image from 'next/image';
import PodcastCoverImg from '../../public/images/podcast_podmiana.png'

const Posluchaj = () => {
  return (
    <div className='grid px-5'>
      <div className='grid grid-cols-1 md:grid-cols-12 '>
        {/* <div className='md:hidden'> */}
          {/* <iframe
            title='episode 1'
            src='https://open.spotify.com/embed/episode/0Qxe0OD0KkihZ4vxLLWToO?utm_source=generator'
            width='100%'
            height='200'
            frameBorder='0'
            allowFullScreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe> */}
        {/* </div> */}
        {/* <div className='hidden md:block'> */}
          {/* <iframe
            title='episode 2'
            src='https://open.spotify.com/embed/episode/0Qxe0OD0KkihZ4vxLLWToO?utm_source=generator'
            width='100%'
            height='352'
            frameBorder='0'
            allowFullScreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe> */}
        {/* </div> */}
        <div
              className={
                'relative h-auto overflow-hidden md:w-auto md:col-start-1 md:col-end-6'
              }
            >
              <Image
                src={PodcastCoverImg}
                alt='podcast-cover-image'
                height={350}
                width={350}
                className='object-cover md:hidden rounded-2xl mb-8'
              />
              <Image
                src={PodcastCoverImg}
                alt='podcast-cover-image'
                height={1200}
                width={1200}
                className='hidden md:block rounded-2xl '
              />
            </div>
        <div className='flex flex-col items-center justify-center	 md:col-start-6 md:col-end-13'>
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
            Dobre miejsce to przestrzeń, w której możemy być sobą. Gdzie czujemy się zaopiekowani i utuleni. Dobre miejsce to takie, w którym możemy spojrzeć na wszystko z innej perspektywy. Dobre miejsce to nasza głowa, bo tam właśnie dokonują się największe odkrycia. Dobre miejsce to nasze ciało, które pozostając z nami na zawsze jest naszym sprzymierzeńcem. Dobre miejsce to nasze serce, które zna wszystkie odpowiedzi. W dobrym miejscu możemy popełniać błędy, szukać rozwiązań, tworzyć i dzielić się. Dobre miejsce tworzy możliwości i daje czas. W dobrym miejscu można być szczerym i otwartym oraz zapraszać innych, aby poczuli się dobrze. Nigdy tak jak teraz nie czułam, że jestem w dobrym miejscu i z tego miejsca chcę opowiadać historię. To podcast o życiu i jego wielu wymiarach. Skupiam się na tym, w co wierzę, z czym się mierzę i z czego czerpię aby świadomie żyć.
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
