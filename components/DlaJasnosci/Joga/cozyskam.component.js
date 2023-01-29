import React from "react";
import Image from "next/image";
import CoZyskamJogaImg from '../../../public/images/dlajasnosci/joga/cozyskam.jpg'

const CoZyskam = () => {
  return (
    <>
      <Image
        src={CoZyskamJogaImg}
        alt={`joga-gdzie-sesja`}
        width={390}
        height={248}
        className="md:hidden"
      />
      <p className="font-spartan-light leading-[23px] mt-4 mb-4">
      Zdrowie i dobre samopoczucie na wielu płaszczyznach. Zdrowe rośliny i drzewa obficie wydają kwiaty i owoce. Uśmiech i szczęście zdrowej osoby roztaczają blask jak promienie słońca. 
      </p>
    </>
  );
};

export default CoZyskam;
