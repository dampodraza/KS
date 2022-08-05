import React from "react";
import Image from "next/image";

const CoZyskam = () => {
  return (
    <>
      <Image
        src={"/images/dlajasnosci/joga/cozyskam.jpg"}
        alt={`joga-gdzie-sesja`}
        width={390}
        height={248}
        layout="responsive"
      />
      <p className="font-spartan-light leading-[23px] mt-4 mb-4">
      Zdrowie i dobre samopoczucie na wielu płaszczyznach. Zdrowe rośliny i drzewa obficie wydają kwiaty i owoce. Uśmiech i szczęście zdrowej osoby roztaczają blask jak promienie słońca. 
      </p>
    </>
  );
};

export default CoZyskam;
