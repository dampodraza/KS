import React from 'react';

const IntroSection = () => {
  return (
    // <section className="flex bg-[#F8F3F0] justify-center items-center pt-20">
    <section className='flex items-center justify-center bg-[#F8F3F0]'>
      <div className='grid items-center gap-4 px-10 md:grid-cols-1 md:px-20'>
        <p className='pb-8 text-center font-spartan-bold text-3xl md:pb-4 md:text-4xl md:leading-[60px]'>
          Świat potrzebuje takich ludzi jak Ty.<br></br>A Ty potrzebujesz takich
          ludzi jak ja.
        </p>
        <div className='grid grid-cols-1 gap-4 text-center font-spartan-light text-base leading-[26px] md:text-xl md:leading-10 md:gap-0'>
          <p>
            Wierzę, że każdy z nas ma potencjał do tworzenia zmian, które chcemy
            widzieć w świecie. Ale zbyt często utknęliśmy, czując, że nie
            możemy. Chcę to zmienić.
          </p>
          <p>
            {' '}
            Świat potrzebuje ludzi takich jak ty. Ludzi obdarzonych współczuciem
            i pragnieniem zmiany. Ludzi, którzy widzą problem i szukają
            rozwiązania.
          </p>
          <p>
            A ty potrzebujesz ludzi takich jak ja. Kogoś, kto nie tylko pomoże
            Ci znaleźć pewność siebie, aby zrobić coś więcej, ale także wesprze
            Cię w tworzeniu życia, które kochasz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
