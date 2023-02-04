import React from 'react';
import Image from 'next/image';

const IleTrwa = () => {
  return (
    <>
      <Image
        src={'/images/dlajasnosci/wsparcie/iletrwa.jpg'}
        alt={`wsparcie-ile-trwa`}
        width={390}
        height={251}
        className='md:hidden'
      />
      <p className='font-spartan-light leading-[23px] mt-4 mb-4'>
        Sesja trwa między 60 a 90 minut, w zależności od tego jaka jest potrzeba
        w danym momencie. Spotkania odbywają się średnio co tydzień.
      </p>
    </>
  );
};

export default IleTrwa;
