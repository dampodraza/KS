import React from "react";
import AccordionBlock from "../../ui/accordionBlock";
import CalendarButton from "../../ui/calendarButton";
import dynamic from "next/dynamic";
import useAccordionLazyLoad from "../../../hooks/useAccordionLazyLoad.ts";
import SkeletonCard from "../../SkeletonCard/skeletonCard.component";
const CoToWsparcie = dynamic(() => import("./cotowsparcie.component"), {
  loading: () => <SkeletonCard />,
});
const CoZyskam = dynamic(() => import("./cozyskam.component"), {
  loading: () => <SkeletonCard />,
});
const CzymRozniOdCoaching = dynamic(() => import("./czymrozniodcoachingu.component"), {
  loading: () => <SkeletonCard />,
});
const GdzieSesja = dynamic(() => import("./gdziesesja.component"), {
  loading: () => <SkeletonCard />,
});
const IleKosztuje = dynamic(() => import("./ilekosztuje.component"), {
  loading: () => <SkeletonCard />,
});
const IleTrwa = dynamic(() => import("./iletrwa.component"), {
  loading: () => <SkeletonCard />,
});
const JakWyglada = dynamic(() => import("./jakwyglada.component"), {
  loading: () => <SkeletonCard />,
});

const DlaJasnosciWsparcie = () => {
  const { handleChange: coToWsparcieChange, expanded: isCoToWsparcieChangeOpen } =
  useAccordionLazyLoad();
  const { handleChange: ileTrwaChange, expanded: isIleTrwaChangeOpen } =
  useAccordionLazyLoad();
  const { handleChange: jakWygladaChange, expanded: isJakWygladaChangeOpen } =
  useAccordionLazyLoad();
  const { handleChange: ileKosztujeChange, expanded: isIleKosztujeChangeOpen } =
  useAccordionLazyLoad();
  const { handleChange: gdzieSesjaChange, expanded: isGdzieSesjaChangeOpen } =
  useAccordionLazyLoad();
  const { handleChange: coZyskamChange, expanded: isCoZyskamChangeOpen } =
  useAccordionLazyLoad();
  const { handleChange: czymRozniChange, expanded: isCzymRozniChangeOpen } =
  useAccordionLazyLoad();
  return (
    <section className="flex bg-[#F8F3F0] text-center justify-center items-center pt-10 pb-10">
      <div className="flex flex-col w-full">
        <p className="text-3xl font-spartan-bold mb-2 ">Dla jasności</p>
        
        <AccordionBlock
          header="Co to jest wsparcie?"
          expanded={(value) => coToWsparcieChange(value)}
          extra={
            <>
              {isCoToWsparcieChangeOpen && <CoToWsparcie />}
            </>
          }
        />
        <AccordionBlock
          header="Ile trwa sesja?"
          expanded={(value) => ileTrwaChange(value)}
          extra={
            <>
              {isIleTrwaChangeOpen && <IleTrwa />}
            </>
          }
        />
        <AccordionBlock
          header="Jak wygląda sesja?"
          expanded={(value) => jakWygladaChange(value)}
          extra={
            <>
              {isJakWygladaChangeOpen && <JakWyglada />}
            </>
          }
        />
        <AccordionBlock
          header="Ile to kosztuje?"
          expanded={(value) => ileKosztujeChange(value)}
          extra={
            <>
              {isIleKosztujeChangeOpen && <IleKosztuje />}
            </>
          }
        />
        <AccordionBlock
          header="Gdzie odbywają się zajęcia?"
          expanded={(value) => gdzieSesjaChange(value)}
          extra={
            <>
              {isGdzieSesjaChangeOpen && <GdzieSesja />}
            </>
          }
        />
        <AccordionBlock
          header="Co mogę zyskać?"
          expanded={(value) => coZyskamChange(value)}
          extra={
            <>
              {isCoZyskamChangeOpen && <CoZyskam />}
            </>
          }
        />
        <AccordionBlock
          header="Czym rózni się wsparcie od coachingu?"
          expanded={(value) => czymRozniChange(value)}
          extra={
            <>
              {isCzymRozniChangeOpen && <CzymRozniOdCoaching />}
            </>
          }
        />
        <CalendarButton bgColor="bg-blue-100" />
      </div>
    </section>
  );
};

export default DlaJasnosciWsparcie;
