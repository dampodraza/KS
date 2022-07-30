import React from 'react';
import Image from 'next/image';

const ileTrwaSesja = () => {
  return (
    <>
    <Image
      src={"/images/dlajasnosci/coaching/iletrwasesja.jpg"}
      alt={`coaching-ile-trwa-sesja`}
      width={390}
      height={268}
      layout="responsive"
    />
    <p className="font-spartan-light leading-[23px] mt-4 mb-4">
      Sesja trwa między 60 a 90 minut, w zależności od tego jaka jest
      potrzeba w danym momencie. Polecam jednak rezerwować sobie
      90 minut na sesje dając sobie spokojny czas dla
      siebie. Spotkania odbywają się zazwyczaj co 2 czy 3 tygodnie.
    </p>
  </>
  )
  }


export default ileTrwaSesja;