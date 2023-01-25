import React from "react";
import Image from "next/image";

const IleKosztuje = () => {
  return (
    <>
      <Image
        src={"/images/dlajasnosci/wsparcie/gdziezajecia.jpg"}
        alt={`wsparcie-ile-kosztuje`}
        width={390}
        height={272}
        className="md:hidden"
      />
      <p className="font-spartan-light leading-[23px] mt-4 mb-4">
        Sesje wsparcia odbywają się online lub w dogodnym dla Ciebie miejscu w
        obrębie Warszawy.
      </p>
    </>
  );
};

export default IleKosztuje;
