import React from "react";
import Image from "next/image";

const IleKosztuje = () => {
  return (
    <>
      <Image
        src={"/images/dlajasnosci/wsparcie/ilekosztuje.jpg"}
        alt={`wsparcie-ile-kosztuje`}
        width={390}
        height={251}
        className="md:hidden"
      />
      <p className="font-spartan-light leading-[23px] mt-4 mb-4">
        Oferuje trzy pakiety wsparcia w zależności od tego na jakim jesteś
        etapie życia i czego potrzebujesz. Jedna sesja to koszt 150 zł. Pakiet
        10 sesji to inwestycja 1200 zł. Wyjątkową formą objęłam osoby w trudnej
        sytuacji, które z różnych względów nie mogą sobie pozwolić na wsparcie,
        a potrzebują go, aby ruszyć do przodu - 0 zł.
      </p>
    </>
  );
};

export default IleKosztuje;
