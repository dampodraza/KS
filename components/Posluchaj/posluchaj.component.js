import React from 'react';

const Posluchaj = () => {
  return (
    <div className='grid px-5'>
      <p className='mb-6 text-center font-spartan-bold text-4xl md:mb-12'>Posłuchaj</p>
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
        <div className='flex flex-col items-center'>
          <p className='w-[94px] text-center rounded-2xl bg-blue-100 pt-1 mb-4 text-base font-bold md:font-spartan-bold md:text-base'>
            Podcast
          </p>
          <div className='text-center text-base md:font-spartan-light md:text-base'>
            W &quot;Szczerze z Serca&quot; nie ma miejsca na fałszywe twarze czy udawanie,
            że wszystko jest idealne. Chcę, żeby ten podcast był prawdziwy i
            autentyczny, bez zbędnych ozdobników.
            <br></br>
            <br></br>Podcast &quot;Szczerze z Serca&quot; jest także miejscem, gdzie będę
            zgłębiać różnorodne tematy związane z rozwojem osobistym,
            psychologią, relacjami interpersonalnymi, zdrowiem psychicznym i
            wieloma innymi. Dzielę się swoimi przemyśleniami i spostrzeżeniami
            na te tematy, z nadzieją, że mogą one być inspiracją i wsparciem dla
            innych.
            <br></br>
            <br></br>
            Zapraszam Was serdecznie do miejsca, gdzie dzielę się swoim życiem,
            rozwojem osobistym i dociekaniami, prosto z serca. Będzie
            autentycznie, prawdziwie i z pełnym zaangażowaniem. Do usłyszenia!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posluchaj;
