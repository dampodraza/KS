import React from 'react';
import Image from 'next/image';

const CoToWsparcie = () => {
  return (
    <>
      <Image
        src={'/images/dlajasnosci/wsparcie/cotowsparcie.jpg'}
        alt={`wsparcie-co-to`}
        width={390}
        height={257}
        className='md:hidden'
      />
      <p className='font-spartan-light leading-[23px] mt-4 mb-4'>
        Pracując jako coach zauważyłam, że życie ludzkie nie dzieje się w
        pudełku. Bywa tak, że nie sprawdzają się żadne zasady, schematy,
        techniki. Bywają sytuacje, w których trzeba wyjść poza pudełko.
        Posłuchać intuicji i otwartego serca. Nie do wszystkiego jest naukowe
        wyjaśnienie. Czasami wychodzisz na łono natury i czujesz się dobrze,
        często nie wiesz dlaczego. Ale czy to ważne? Czy potrzebujesz badań,
        naukowych dowodów na to dlaczego tak się dzieje? Po prostu czujesz się
        dobrze. Podobnie działają te sesje. Mają na celu wyprowadzić Cię z
        niewygodnego miejsca, w którym się znajdujesz do miejsca, w którym widzisz
        możliwości.
      </p>
    </>
  );
};

export default CoToWsparcie;
