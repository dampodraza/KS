import React from 'react';
import Image from "next/image";
import ileTrwaSesjaImg from '../../../public/images/dlajasnosci/coaching/iletrwasesja.jpg'

const ileTrwaSesja = () => {
  return (
    <>
    <Image
      src={ileTrwaSesjaImg}
      alt={`coaching-ile-trwa-sesja`}
      width={390}
      height={268}
      className="md:hidden"
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