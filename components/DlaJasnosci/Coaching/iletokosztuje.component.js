import React from "react";
import Image from "next/image";
import ileToKosztujeImg from '../../../public/images/dlajasnosci/coaching/iletokosztuje.jpg'

const ileToKosztuje = () => {
  return (
    <>
      <Image
        src={ileToKosztujeImg}
        alt={`coaching-ile-to-kosztuje`}
        width={390}
        height={296}
        className="md:hidden"
      />
      <p className="font-spartan-light leading-[23px] mt-4 mb-4">
        Oferuje różne pakiety coachingowe w zależności od tego na jakim jesteś
        etapie życia i czego potrzebujesz. Jedna sesja to koszt 200 zł. W trzy
        miesięczny pakiet inwestujesz 1200 zł. Natomiast sześcio miesięczny
        program inwestycja rzędu 2000 zł. Wyjątkową formą objęłam młodzież do 21
        roku życia - 50 zł za sesję, seniorów od 60 roku życia - 0 zł za sesję i
        osoby w trudnej sytuacji, które z różnych względów nie mogą sobie
        pozwolić na wsparcie, a potrzebują go, aby ruszyć do przodu - 0 zł za
        sesje.
      </p>
    </>
  );
};

export default ileToKosztuje;
