import React from "react";
import Image from "next/image";
import gdzieSesjaImg from '../../../public/images/dlajasnosci/coaching/gdziesesje.jpg'

const gdzieSesja = () => {
  return (
    <>
      <Image
        src={gdzieSesjaImg}
        alt={`coaching-gdzie-sesje`}
        width={390}
        height={272}
        className="md:hidden"
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

export default gdzieSesja;
