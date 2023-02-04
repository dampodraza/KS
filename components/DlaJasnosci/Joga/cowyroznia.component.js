import React from 'react';
import Image from 'next/image';
import CoWyrozniaJogaImg from '../../../public/images/dlajasnosci/joga/cowyroznia.jpg';

const CoWyroznia = () => {
  return (
    <>
      <Image
        src={CoWyrozniaJogaImg}
        alt={`joga-co-wyroznia`}
        width={390}
        height={248}
        className='md:hidden'
      />
      <p className='font-spartan-light leading-[23px] mt-4 mb-4'>
        Niezwykle ważnym czynnikiem dla mnie jest zdrowie. Moje zajęcia jogi nie
        postrzegają ciała jako konia wyścigowego, przekraczając granice i
        zmuszając do rywalizacji z innymi ciałami w kategorii rozciągliwości,
        prędkości i siły. Przywiązuje ogromną wagę do tego aby słuchać swojego
        ciała i podążać zanim próbując równoważyć, to czego w tym temacie
        pragnie umysł. Do każdej osoby podchodzę indywidualnie i holistycznie,
        dlatego zajęcia ze mną mają określony indywidualnie dopasowany schemat,
        nie są dla wszystkich, tylko dla ciebie.
      </p>
    </>
  );
};

export default CoWyroznia;
