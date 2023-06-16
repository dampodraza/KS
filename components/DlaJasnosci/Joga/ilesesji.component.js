import React from 'react';
import Image from 'next/image';
import IleSesjiJogaImg from '../../../public/images/dlajasnosci/joga/ilezajec.jpg';

const IleSesji = () => {
  return (
    <>
      <Image
        src={IleSesjiJogaImg}
        alt={`joga-ile-zajec`}
        width={390}
        height={257}
        className='md:hidden'
      />
      <p className='font-spartan-light leading-[23px] mt-4 mb-4'>
      Ilość zajęć zależy od Twoich potrzeb, zaangażowania i stanu zdrowia.
      </p>
    </>
  );
};

export default IleSesji;
