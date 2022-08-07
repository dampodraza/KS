import React from "react";
import Image from "next/image";
import kasiaDrawing from "../../public/images/kasia-drawing.png";

const DlaczegoJa1 = () => {
  return (
    <section className="flex bg-[#F8F3F0] justify-center items-center pt-10 pb-6">
      <div className="px-10 md:px-96 flex flex-col	items-center ">
        <p className="text-2xl	font-spartan-bold mb-2 ">Dlaczego właśnie ja?</p>
        <Image
          src={kasiaDrawing}
          alt="kasia-drawing"
          width={324}
          height={310}
        />
        <p className="text-base md:text-3xl font-spartan-light leading-[26px] pt-6 text-center">
          Cześć! Jestem Kasia i wierzę w cuda. Uważam, że człowiek to istota
          wielowymiarowa, istny CUD - składający się z ciała, duszy i umysłu.
          Podczas pracy stosuje podejście holistyczne, sięgam głębiej, pracuję z
          drugim człowiekiem jako całością w wymiarze fizycznym, psychicznym,
          emocjonalnym i duchowym. Poza stosowaniem wiedzy z różnych nurtów
          psychologii, neurobiologii, filozofii, coachingu, rozwoju,
          wykorzystuję również intuicję i słucham głosu swego serca.
        </p>
      </div>
    </section>
  );
};

export default DlaczegoJa1;
