import React from "react";
import Image from "next/legacy/image";

const ileTrwaSesja = () => {
  return (
    <>
      <Image
        src={"/images/dlajasnosci/coaching/gdziesesje.jpg"}
        alt={`coaching-gdzie-sesje`}
        width={390}
        height={272}
        layout="responsive"
      />
      <p className="font-spartan-light leading-[23px] mt-4 mb-4">
        Sesje coachingowe odbywają się online lub w dogodnym dla Ciebie miejscu
        w obrębie Warszawy. Z punktu widzenia efektywności procesów,
        nie ma różnicy pomiędzy sesjami realizowanymi zdalnie czy osobiście.
        A wręcz, wbrew przekonaniom, sesje realizowane zdalnie
        są często bardziej efektywne.
      </p>
    </>
  );
};

export default ileTrwaSesja;
