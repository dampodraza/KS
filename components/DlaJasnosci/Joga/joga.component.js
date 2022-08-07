import React from "react";
import Image from "next/image";
import AccordionBlock from "../../ui/accordionBlock";
import CalendarButton from "../../ui/calendarButton";
import SkeletonCard from "../../SkeletonCard/skeletonCard.component";
import useAccordionLazyLoad from "../../../hooks/useAccordionLazyLoad.ts";
import dynamic from "next/dynamic";

const CoStrace = dynamic(() => import("./costrace.component"), {
  loading: () => <SkeletonCard />,
});
const CoWyroznia = dynamic(() => import("./cowyroznia.component"), {
  loading: () => <SkeletonCard />,
});
const CoZyskam = dynamic(() => import("./cozyskam.component"), {
  loading: () => <SkeletonCard />,
});
const GdzieSesja = dynamic(() => import("./gdziesesja.component"), {
  loading: () => <SkeletonCard />,
});
const IleKosztuje = dynamic(() => import("./ilekosztuje.component"), {
  loading: () => <SkeletonCard />,
});
const IleSesji = dynamic(() => import("./ilesesji.component"), {
  loading: () => <SkeletonCard />,
});
const IleTrwa = dynamic(() => import("./iletrwa.component"), {
  loading: () => <SkeletonCard />,
});
const JakWyglada = dynamic(() => import("./jakwyglada.component"), {
  loading: () => <SkeletonCard />,
});

const DlaJasnosciJoga = () => {
  const { handleChange: ileTrwaChange, expanded: isIleTrwaChangeOpen } =
    useAccordionLazyLoad();
  const { handleChange: jakWygladaChange, expanded: isJakWygladaChangeOpen } =
    useAccordionLazyLoad();
  const { handleChange: ileKosztujehange, expanded: isIleKosztujeChangeOpen } =
    useAccordionLazyLoad();
  const { handleChange: ileSesjihange, expanded: isIleSesjiChangeOpen } =
    useAccordionLazyLoad();
  const { handleChange: coZyskamChange, expanded: isCoZyskamChangeOpen } =
    useAccordionLazyLoad();
  const { handleChange: coStraceChange, expanded: isCoStraceChangeOpen } =
    useAccordionLazyLoad();
  const { handleChange: coWyrozniaChange, expanded: isCoWyrozniahangeOpen } =
    useAccordionLazyLoad();
  const { handleChange: gdzieSesjachange, expanded: isGdzieSesjaChangeOpen } =
    useAccordionLazyLoad();

  return (
    <section className="flex bg-[#F8F3F0] text-center justify-center items-center pt-10 pb-10">
      <div className="flex flex-col w-full">
        <p className="text-3xl font-spartan-bold mb-2 ">Dla jasności</p>

        <AccordionBlock
          header="Ile trwają zajęcia jogi?"
          expanded={(value) => ileTrwaChange(value)}
          extra={<>{isIleTrwaChangeOpen && <IleTrwa />}</>}
        />
        <AccordionBlock
          header="Jak to wygląda?"
          expanded={(value) => jakWygladaChange(value)}
          extra={<>{isJakWygladaChangeOpen && <JakWyglada />}</>}
        />
        <AccordionBlock
          header="Ile to kosztuje?"
          expanded={(value) => ileKosztujehange(value)}
          extra={<>{isIleKosztujeChangeOpen && <IleKosztuje />}</>}
        />
        <AccordionBlock
          header="Gdzie odbywa się sesja?"
          expanded={(value) => gdzieSesjachange(value)}
          extra={<>{isGdzieSesjaChangeOpen && <GdzieSesja />}</>}
        />
        <AccordionBlock
          header="Ile sesji potrzebuje?"
          expanded={(value) => ileSesjihange(value)}
          extra={<>{isIleSesjiChangeOpen && <IleSesji />}</>}
        />
        <AccordionBlock
          header="Co mogę zyskać?"
          expanded={(value) => coZyskamChange(value)}
          extra={<>{isCoZyskamChangeOpen && <CoZyskam />}</>}
        />
        <AccordionBlock
          header="Co mogę stracić?"
          expanded={(value) => coStraceChange(value)}
          extra={<>{isCoStraceChangeOpen && <CoStrace />}</>}
        />
        <AccordionBlock
          header="Czym wyrózniają się zajęcia jogi?"
          expanded={(value) => coWyrozniaChange(value)}
          extra={<>{isCoWyrozniahangeOpen && <CoWyroznia />}</>}
        />
        <CalendarButton bgColor="bg-green-100" />
      </div>
    </section>
  );
};

export default DlaJasnosciJoga;
