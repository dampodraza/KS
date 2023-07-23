import React from 'react';
import Layout from '../../components/ui/layout';
import Image from 'next/image';
import PodcastCoverImg from '../../public/images/podcast_podmiana.png'
import SpotifyIcon from '../../public/images/listen_spotify.png'
import AppleIcon from '../../public/images/listen_apple.png'

const Podcasty = () => {
  return (
    <Layout>
      <div className='pt-32 md:pt-48 mt-[-125px] md:mt-0'>

        <div className='grid px-5'>
          <div className='grid grid-cols-1 md:grid-cols-12 md:gap-8'>
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
              <div className='flex flex-col items-center justify-center md:col-start-6 md:col-end-13'>
                <p className='mb-8 pt-2 text-2xl font-bold md:font-spartan-bold md:text-4xl'>
                  Podcast &quot;Dobre miejsce&quot;
                </p>
                <div className='text-center font-spartan-light text-sm sm:px-10 sm:pt-4 md:pt-0 md:text-justify md:text-base'>
                  Dobre miejsce to przestrzeń, w której możemy być sobą. Gdzie czujemy się zaopiekowani i utuleni. Dobre miejsce to takie, w którym możemy spojrzeć na wszystko z innej perspektywy. Dobre miejsce to nasza głowa, bo tam właśnie dokonują się największe odkrycia. Dobre miejsce to nasze ciało, które pozostając z nami na zawsze jest naszym sprzymierzeńcem. Dobre miejsce to nasze serce, które zna wszystkie odpowiedzi. W dobrym miejscu możemy popełniać błędy, szukać rozwiązań, tworzyć i dzielić się.  Dobre miejsce tworzy możliwości i daje czas. W dobrym miejscu można być szczerym i otwartym oraz zapraszać innych, aby poczuli się dobrze.

                  Nigdy tak jak teraz nie czułam, że jestem w dobrym miejscu i z tego miejsca chcę opowiadać historię. To podcast o życiu i jego wielu wymiarach. Skupiam się na tym, w co wierzę, z czym się mierzę i z czego czerpię aby świadomie żyć.
                </div>
            
              </div>
           </div>

        </div>
        <div className="grid gap-8 pt-8 pb-8 mt-12 px-8">
        <iframe style={{borderRadius:'12px'}}
          src="https://open.spotify.com/embed/episode/3bc77aPPmmU8NxK2XUbt94?utm_source=generator&theme=0" 
          width="100%" height="152" frameBorder="0" allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"></iframe>
                    <iframe style={{borderRadius:'12px'}}
          src="https://open.spotify.com/embed/episode/3s3kZU1d4DEqfvoWkImKi9?utm_source=generator" 
          width="100%" height="152" frameBorder="0" allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"></iframe>
          <iframe style={{borderRadius:'12px'}}
          src="https://open.spotify.com/embed/episode/53hnqkaYd0LSYikdiNFtNa?utm_source=generator" 
          width="100%" height="152" frameBorder="0" allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"></iframe>
          <iframe style={{borderRadius:'12px'}}
          src="https://open.spotify.com/embed/episode/5TIvmMOmvBLGv3goqPTbpy?utm_source=generator" 
          width="100%" height="152" frameBorder="0" allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"></iframe>
        </div> 




        {/* <p className='pb-8 text-center font-spartan-bold text-2xl md:pb-4 md:leading-[45px] lg:text-3xl xl:text-4xl'>
          Podcast &quot;Dobre miejsce&quot;
        </p>
        <div className='md:px-18 grid grid-cols-1 gap-4 text-center font-spartan-light text-base leading-[18px] md:gap-0 md:leading-8 lg:text-base xl:text-xl'>
          Dobre miejsce to przestrzeń, w której możemy być sobą. Gdzie czujemy się zaopiekowani i utuleni. Dobre miejsce to takie, w którym możemy spojrzeć na wszystko z innej perspektywy. Dobre miejsce to nasza głowa, bo tam właśnie dokonują się największe odkrycia. Dobre miejsce to nasze ciało, które pozostając z nami na zawsze jest naszym sprzymierzeńcem. Dobre miejsce to nasze serce, które zna wszystkie odpowiedzi. W dobrym miejscu możemy popełniać błędy, szukać rozwiązań, tworzyć i dzielić się.  Dobre miejsce tworzy możliwości i daje czas. W dobrym miejscu można być szczerym i otwartym oraz zapraszać innych, aby poczuli się dobrze.

          Nigdy tak jak teraz nie czułam, że jestem w dobrym miejscu i z tego miejsca chcę opowiadać historię. To podcast o życiu i jego wielu wymiarach. Skupiam się na tym, w co wierzę, z czym się mierzę i z czego czerpię aby świadomie żyć.
        </div> */}
        {/* <div className="grid gap-8 pt-8 pb-8">
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
        </div> */}
      </div>
    </Layout>
  );
};

export default Podcasty;
