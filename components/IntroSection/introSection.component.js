import React from 'react';

const IntroSection = () => {
  return (
    <section className='flex items-center justify-center bg-[#F8F3F0]'>
      <div className='grid items-center gap-4 px-4 md:grid-cols-1 md:px-20'>
        <p className='pb-8 text-center font-spartan-bold text-2xl md:pb-4 md:leading-[45px] lg:text-3xl xl:text-4xl'>
          Świat potrzebuje takich ludzi jak Ty.<br></br>A Ty potrzebujesz takich
          ludzi jak ja.
        </p>

        <div
          className='md:px-18 grid grid-cols-1 gap-4 text-center font-spartan-light text-base leading-[26px] md:gap-0
         md:leading-8 lg:text-base xl:text-xl'
        >
          Wierzę, że każdy z nas ma potencjał do tworzenia zmian, które chcemy
          widzieć w świecie. Ale zbyt często utknęliśmy, czując, że nie możemy.
          Chcę to zmienić. Świat potrzebuje ludzi takich jak ty. Ludzi
          obdarzonych współczuciem i pragnieniem zmiany. Ludzi, którzy widzą
          problem i szukają rozwiązania. A ty potrzebujesz ludzi takich jak ja.
          Kogoś, kto nie tylko pomoże Ci znaleźć pewność siebie, aby zrobić coś
          więcej, ale także wesprze Cię w tworzeniu życia, które kochasz.
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
