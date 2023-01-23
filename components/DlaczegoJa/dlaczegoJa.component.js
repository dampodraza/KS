import React from "react";
import Image from "next/legacy/image";
import kasiaDrawing from "../../public/images/kasia-drawing.png";
import DlaczegoJaIcons from "./dlaczegoJaIcons.component";
import Opinions from "./opinions.component";
import {isMobile} from 'react-device-detect';

const DlaczegoJa = () => {
  return (
    <>
      <section className="flex justify-center items-center pt-20 pb-6 md:h-screen md:pt-28 md:pb-16">
        <div className="flex flex-col items-center justify-center md:basis-4/12	">
        {!isMobile && <Image
            src={kasiaDrawing}
            alt="kasia-drawing"
            width={900}
            height={900}
          />}
        </div>
        <div className="px-10 md:px-4 flex flex-col	items-center md:basis-8/12 md:text-left md:items-baseline	">
          <p className="text-2xl	font-spartan-bold mb-2 md:text-4xl	">
            Dlaczego właśnie ja?
          </p>
          {isMobile && <Image
            src={kasiaDrawing}
            alt="kasia-drawing"
            width={324}
            height={310}
          />}
          <p className="text-base md:text-xl font-spartan-light leading-[26px] pt-6 text-center md:text-left md:pb-12">
            Cześć! Jestem Kasia i wierzę w cuda. Uważam, że człowiek to istota
            wielowymiarowa, istny CUD - składający się z ciała, duszy i umysłu.
            Podczas pracy stosuje podejście holistyczne, sięgam głębiej, pracuję
            z drugim człowiekiem jako całością w wymiarze fizycznym,
            psychicznym, emocjonalnym i duchowym. Poza stosowaniem wiedzy z
            różnych nurtów psychologii, neurobiologii, filozofii, coachingu,
            rozwoju, wykorzystuję również intuicję i słucham głosu swego serca.
          </p>
          {!isMobile && <DlaczegoJaIcons isMobile={isMobile} />}
        </div>
      </section>
      { isMobile && <DlaczegoJaIcons isMobile={isMobile} /> }
      <Opinions isMobile={isMobile}/>
    </>
  );
};

export default DlaczegoJa;
