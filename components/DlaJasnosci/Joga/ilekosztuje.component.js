import React from "react";
import Image from "next/image";

const IleKosztuje = () => {
  return (
    <>
      <Image
        src={"/images/dlajasnosci/joga/ilekosztuje.png"}
        alt={`joga-ile-kosztuje`}
        width={390}
        height={238}
        layout="responsive"
      />
      <p className="font-spartan-light leading-[23px] mt-4 mb-4">
        Oferuje możliwość odbycia jednej sesji zdrowia, której koszt wynosi 50
        zł. Za jedno miesięczny pakiet sesji inwestujesz 180 zł w swoje zdrowie.
        Program trwający trzy miesiące to 500 zł inwestycji w swoje zdrowie.
      </p>
    </>
  );
};

export default IleKosztuje;
