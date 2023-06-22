import React from 'react';
import Layout from '../../components/ui/layout';
import { Metadata } from 'next';

export const metadata = {
  title: 'Podcasty',
  description: 'Wierzę, że każdy z nas ma potencjał do tworzenia zmian, które chcemy widzieć w świecie.',
  };

const Podcasty = () => {
  return (
    <Layout>
      <div className='pt-32 md:pt-48 mt-[-125px] md:mt-0'>
        <p className='pb-8 text-center font-spartan-bold text-2xl md:pb-4 md:leading-[45px] lg:text-3xl xl:text-4xl'>
          Świat potrzebuje takich ludzi jak Ty.<br></br>A Ty potrzebujesz takich
          ludzi jak ja.
        </p>
        <div className='md:px-18 grid grid-cols-1 gap-4 text-center font-spartan-light text-base leading-[18px] md:gap-0 md:leading-8 lg:text-base xl:text-xl'>
          Wierzę, że każdy z nas ma potencjał do tworzenia zmian, które chcemy
          widzieć w świecie. Ale zbyt często utknęliśmy, czując, że nie możemy.
          Chcę to zmienić. Świat potrzebuje ludzi takich jak ty. Ludzi
          obdarzonych współczuciem i pragnieniem zmiany. Ludzi, którzy widzą
          problem i szukają rozwiązania. A ty potrzebujesz ludzi takich jak ja.
          Kogoś, kto nie tylko pomoże Ci znaleźć pewność siebie, aby zrobić coś
          więcej, ale także wesprze Cię w tworzeniu życia, które kochasz.
        </div>
        <div className="grid gap-8 pt-8 pb-8">
          <iframe
            style={{borderRadius:'12px'}}
            src='https://open.spotify.com/embed/episode/0Qxe0OD0KkihZ4vxLLWToO?utm_source=generator'
            width='100%'
            height='152'
            frameBorder='0'
            allowFullScreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
           <iframe
            style={{borderRadius:'12px'}}
            src='https://open.spotify.com/embed/episode/0Qxe0OD0KkihZ4vxLLWToO?utm_source=generator'
            width='100%'
            height='152'
            frameBorder='0'
            allowFullScreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Podcasty;
