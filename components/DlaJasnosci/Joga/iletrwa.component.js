import React from 'react';
import Image from 'next/image';
import IleTrwaZajeciaJogaImg from '../../../public/images/dlajasnosci/joga/iletrwajazajecia.jpg';

const IleTrwa = () => {
  return (
    <>
      <Image
        src={IleTrwaZajeciaJogaImg}
        alt={`joga-ile-trwa-zajecia`}
        width={390}
        height={234}
        className='md:hidden'
      />
      <p className='font-spartan-light leading-[23px] mt-4 mb-4'>
        Zajęcia jogi trwają 90 minut.
      </p>
    </>
  );
};

export default IleTrwa;
