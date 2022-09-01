import React, { useRef, useState } from "react";
import Image from "next/image";
import AccordionBlock from "../ui/accordionBlock";
import RodzinaWartosci from "./rodzinawartosci.component";
import KarieraPasja from "./karierapasja.component";
import ZycieMilosc from "./zyciemilosc.component";
import CeleMarzenia from "./celemarzenia.component";
import ZmianyZawody from "./zmianyzawody.component";

const MojaHistoria = () => {

  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center md:flex-row md:h-screen">
      <div className="flex flex-col w-1/2 relative">
          <Image
            src={"/images/moja-historia-desktop.jpg"}
            alt={`kasia-img`}
            // width={390}
            // height={330}
            layout="fill"
          />
      </div>
      <div className="flex flex-col w-1/2">
        <p className="text-4xl font-spartan-bold mb-6 text-center">
          Moja historia
        </p>
        <div className="block md:hidden">
          <Image
            src={"/images/kasia-img.png"}
            alt={`kasia-img`}
            width={390}
            height={330}
            layout="responsive"
          />
        </div>
        <p className="font-spartan-light mx-4 mt-4 mb-4">
          Pełna przygód i licznych zwrotów akcji historia o tym, jak ważne jest
          cieszyć się każdą chwilą swojego życia. Opowieść o dziewczynie tak
          normalnej, że aż podobnej do Ciebie. Z tą różnicą, że żyje za dwóch.
          Uświadomienie sobie tego doprowadziło mnie do jednego z
          najważniejszych odkryć w sobie. To był mój punkt zwrotny. Wiem teraz,
          że najlepszym sposobem na poznanie świata jest słuchanie tego, jak
          doświadczają go inni ludzie. Podróżuję przez życie jako wnikliwy
          obserwator, zbierając bogate doświadczenie i jednocześnie czerpiąc
          wiedzę z doświadczeń innych. Praca z ludźmi to ogromny przywilej i
          zaszczyt. To napełnia mnie miłością i jestem za to wdzięczna.
        </p>
      </div>

      <div className="md:hidden">
        <AccordionBlock
          expanded={(value) => rodzinaChange(value)}
          header="Rodzina i wartości"
          extra={<><RodzinaWartosci /></>}
        />
        <AccordionBlock
          header="Kariera i pasja"
          expanded={(value) => karieraChange(value)}
          extra={<> <KarieraPasja /></>}
        />
        <AccordionBlock
          header="Zmiany i zawody"
          expanded={(value) => zmianyChange(value)}
          extra={<> <ZmianyZawody /></>}
        />
        <AccordionBlock
          header="Zycie i miłość"
          expanded={(value) => zycieChange(value)}
          extra={<><ZycieMilosc /></>}
        />
        <AccordionBlock
          header="Cele i marzenia"
          expanded={(value) => celeChange(value)}
          extra={<><CeleMarzenia /></>}
        />
      </div>
    </section>
  );
};

export default MojaHistoria;
