import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import AccordionBlock from "../ui/accordionBlock";
import SkeletonCard from "../SkeletonCard/skeletonCard.component";
const RodzinaWartosci = dynamic(() => import("./rodzinawartosci.component"), {
  loading: () => <SkeletonCard />,
});
const KarieraPasja = dynamic(() => import("./karierapasja.component"), {
  loading: () => <SkeletonCard />,
});
const ZmianyZawody = dynamic(() => import("./zmianyzawody.component"), {
  loading: () => <SkeletonCard />,
});
const ZycieMilosc = dynamic(() => import("./zyciemilosc.component"), {
  loading: () => <SkeletonCard />,
});
const CeleMarzenia = dynamic(() => import("./celemarzenia.component"), {
  loading: () => <SkeletonCard />,
});

const useAccordionLazyLoad = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (exp) => {
    setExpanded(exp);
  };
  return {
    handleChange,
    expanded,
  };
};

const MojaHistoria = () => {
  const { handleChange: rodzinaChange, expanded: isRodzinaWartosciOpen } =
    useAccordionLazyLoad();
  const { handleChange: karieraChange, expanded: isKarieraPasjaOpen } =
    useAccordionLazyLoad();
  const { handleChange: zmianyChange, expanded: isZmianyZawodyOpen } =
    useAccordionLazyLoad();
  const { handleChange: zycieChange, expanded: isZycieiMiloscOpen } =
    useAccordionLazyLoad();
    const { handleChange: celeChange, expanded: isCeleMarzeniaOpen } =
    useAccordionLazyLoad();

  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-10">
      <p className="text-4xl font-spartan-bold mb-6 text-center">
        Moja historia
      </p>
      <div className="block">
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
        Uświadomienie sobie tego doprowadziło mnie do jednego z najważniejszych
        odkryć w sobie. To był mój punkt zwrotny. Wiem teraz, że najlepszym
        sposobem na poznanie świata jest słuchanie tego, jak doświadczają go
        inni ludzie. Podróżuję przez życie jako wnikliwy obserwator, zbierając
        bogate doświadczenie i jednocześnie czerpiąc wiedzę z doświadczeń
        innych. Praca z ludźmi to ogromny przywilej i zaszczyt. To napełnia mnie
        miłością i jestem za to wdzięczna.
      </p>
      <div>
        <AccordionBlock
          expanded={(value) => rodzinaChange(value)}
          header="Rodzina i wartości"
          extra={<>{isRodzinaWartosciOpen && <RodzinaWartosci />}</>}
        />
        <AccordionBlock
          header="Kariera i pasja"
          expanded={(value) => karieraChange(value)}
          extra={<>{isKarieraPasjaOpen && <KarieraPasja />}</>}
        />
        <AccordionBlock
          header="Zmiany i zawody"
          expanded={(value) => zmianyChange(value)}
          extra={<>{isZmianyZawodyOpen && <ZmianyZawody />}</>}
        />
        <AccordionBlock
          header="Zycie i miłość"
          expanded={(value) => zycieChange(value)}
          extra={<>{isZycieiMiloscOpen && <ZycieMilosc />}</>}
        />
        <AccordionBlock
          header="Cele i marzenia"
          expanded={(value) => celeChange(value)}
          extra={<>{isCeleMarzeniaOpen && <CeleMarzenia />}</>}
        />
      </div>
    </section>
  );
};

export default MojaHistoria;
