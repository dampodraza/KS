import React from 'react';
import Layout from '../../components/ui/layout';

const Podcasty = () => {
  return (
    <Layout>
      <div className='pt-32 md:pt-48 mt-[-125px] md:mt-0'>
        <p className='pb-8 text-center font-spartan-bold text-2xl md:pb-4 md:leading-[45px] lg:text-3xl xl:text-4xl'>
        Podcast &quot;Dobre miejsce&quot; to podróż<br></br>do odkrywania wewnętrznej równowagi, inspiracji i świadomego życia.
        </p>
        <div className='md:px-18 grid grid-cols-1 gap-4 text-center font-spartan-light text-base leading-[18px] md:gap-0 md:leading-8 lg:text-base xl:text-xl'>
        Dobre miejsce to przestrzeń, w której możemy być sobą. Gdzie czujemy się zaopiekowani i utuleni. Dobre miejsce to takie, w którym możemy spojrzeć na wszystko z innej perspektywy. Dobre miejsce to nasza głowa, bo tam właśnie dokonują się największe odkrycia. Dobre miejsce to nasze ciało, które pozostając z nami na zawsze jest naszym sprzymierzeńcem. Dobre miejsce to nasze serce, które zna wszystkie odpowiedzi. W dobrym miejscu możemy popełniać błędy, szukać rozwiązań, tworzyć i dzielić się.  Dobre miejsce tworzy możliwości i daje czas. W dobrym miejscu można być szczerym i otwartym oraz zapraszać innych, aby poczuli się dobrze. 
        
        Nigdy tak jak teraz nie czułam, że jestem w dobrym miejscu i z tego miejsca chcę opowiadać historię. To podcast o życiu i jego wielu wymiarach. Skupiam się na tym, w co wierzę, z czym się mierzę i z czego czerpię aby świadomie żyć.
        </div>
        <div className="grid gap-8 pt-8 pb-8">
          <iframe
            style={{borderRadius:'12px'}}
            src='https://open.spotify.com/embed/episode/0Qxe0OD0KkihZ4vxLLWToO?utm_source=generator'
            width='100%'
            height='152'
            frameBorder='0'
            allowfullscreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
           <iframe
            style={{borderRadius:'12px'}}
            src='https://open.spotify.com/embed/episode/0Qxe0OD0KkihZ4vxLLWToO?utm_source=generator'
            width='100%'
            height='152'
            frameBorder='0'
            allowfullscreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Podcasty;
