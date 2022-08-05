import React from "react";
import Image from "next/image";

const IleSesji = () => {
  return (
    <>
      <Image
        src={"/images/dlajasnosci/joga/ilezajec.jpg"}
        alt={`joga-ile-zajec`}
        width={390}
        height={257}
        layout="responsive"
      />
      <p className="font-spartan-light leading-[23px] mt-4 mb-4">
        Sesje jogi odbywają się online lub w dogodnym dla Ciebie miejscu w
        obrębie Warszawy. (z punktu widzenia efektywności procesów,
        nie ma różnicy pomiędzy sesjami realizowanymi zdalnie czy osobiście.
        A wręcz, wbrew przekonaniom, sesje realizowane zdalnie
        są często bardziej efektywne)
      </p>
    </>
  );
};

export default IleSesji;
