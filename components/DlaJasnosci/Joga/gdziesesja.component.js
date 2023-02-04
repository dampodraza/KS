import React from 'react';
import Image from 'next/image';
import GdzieSesjaJogaImg from '../../../public/images/dlajasnosci/joga/gdziesesja.jpg';

const GdzieSesja = () => {
  return (
    <>
      <Image
        src={GdzieSesjaJogaImg}
        alt={`joga-gdzie-sesja`}
        width={390}
        height={248}
        className='md:hidden'
      />
      <p className='font-spartan-light leading-[23px] mt-4 mb-4'>
        Sesje jogi odbywają się online lub w dogodnym dla Ciebie miejscu w
        obrębie Warszawy. (z punktu widzenia efektywności procesów,
        nie ma różnicy pomiędzy sesjami realizowanymi zdalnie czy osobiście.
        A wręcz, wbrew przekonaniom, sesje realizowane zdalnie
        są często bardziej efektywne)n
      </p>
    </>
  );
};

export default GdzieSesja;
