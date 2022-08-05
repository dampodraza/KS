import React from "react";
import Image from "next/image";

const IleTrwa = () => {
  return (
    <>
      <Image
        src={"/images/dlajasnosci/joga/iletrwajazajecia.jpg"}
        alt={`joga-ile-kosztuje`}
        width={390}
        height={234}
        layout="responsive"
      />
      <p className="font-spartan-light leading-[23px] mt-4 mb-4">
      Zajęcia jogi trwają 90 minut.
      </p>
    </>
  );
};

export default IleTrwa;
