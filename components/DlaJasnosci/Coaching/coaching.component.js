import React from "react";
import dynamic from "next/dynamic";
import AccordionBlock from "../../ui/accordionBlock";
import CalendarButton from "../../ui/calendarButton";
import useAccordionLazyLoad from "../../../hooks/useAccordionLazyLoad.ts";
import SkeletonCard from "../../SkeletonCard/skeletonCard.component";
const CoToCoaching = dynamic(() => import("./cotocoaching.component"), {
  loading: () => <SkeletonCard />,
});
const IleTrwaSesja = dynamic(() => import("./iletrwasesja.component"), {
  loading: () => <SkeletonCard />,
});
const JakWygladaSesja = dynamic(() => import("./jakwygladasesja.component"), {
  loading: () => <SkeletonCard />,
});
const IleToKosztuje = dynamic(() => import("./iletokosztuje.component"), {
  loading: () => <SkeletonCard />,
});
const GdzieSesja = dynamic(() => import("./gdziesesja.component"), {
  loading: () => <SkeletonCard />,
});
const IlePotrzebuje = dynamic(() => import("./ilesesji.component"), {
  loading: () => <SkeletonCard />,
});
const JakUmowic = dynamic(() => import("./jaksieumowic.component"), {
  loading: () => <SkeletonCard />,
});
const DlaJasnosciCoaching = () => {
  const {
    handleChange: coToCoachingChange,
    expanded: isCoToCoachingChangeOpen,
  } = useAccordionLazyLoad();
  const { handleChange: trwaSesjaChange, expanded: isTrwaSesjaChangeOpen } =
    useAccordionLazyLoad();
  const {
    handleChange: wygladaSesjaChange,
    expanded: isWygladaSesjaChangeOpen,
  } = useAccordionLazyLoad();
  const { handleChange: ileKosztujeChange, expanded: isIleKosztujeOpen } =
    useAccordionLazyLoad();
  const { handleChange: gdzieSesjaChange, expanded: isGdzieSesjaOpen } =
    useAccordionLazyLoad();
  const { handleChange: ilePotrzebujeChange, expanded: isIlePotrzebujeOpen } =
    useAccordionLazyLoad();
  const { handleChange: jakUmowicChange, expanded: isJakUmowicOpen } =
    useAccordionLazyLoad();

  return (
    <section className="flex bg-[#F8F3F0] text-center justify-center items-center pt-10 pb-10">
      <div className=" flex flex-col ">
        <p className="text-3xl font-spartan-bold mb-2 ">Dla jasności</p>

        <AccordionBlock
          header="Co to jest coaching?"
          expanded={(value) => coToCoachingChange(value)}
          extra={
            <>
              {isCoToCoachingChangeOpen && <CoToCoaching />}
            </>
          }
        />
        <AccordionBlock
          header="Ile trwa sesja?"
          expanded={(value) => trwaSesjaChange(value)}
          extra={
            <>
            {isTrwaSesjaChangeOpen && <IleTrwaSesja />}
            </>
          }
        />
        <AccordionBlock
          header="Jak wygląda sesja?"
          expanded={(value) => wygladaSesjaChange(value)}
          extra={
            <>
            {isWygladaSesjaChangeOpen && <JakWygladaSesja />}
            </>
          }
        />
        <AccordionBlock
          header="Ile to kosztuje?"
          expanded={(value) => ileKosztujeChange(value)}
          extra={
            <>
            {isIleKosztujeOpen && <IleToKosztuje />}
            </>
          }
        />
        <AccordionBlock
          header="Gdzie odbywa się sesja?"
          expanded={(value) => gdzieSesjaChange(value)}
          extra={
            <>
            {isGdzieSesjaOpen && <GdzieSesja />}
            </>
          }
        />
        <AccordionBlock
          header="Ile sesji potrzebuje?"
          expanded={(value) => ilePotrzebujeChange(value)}
          extra={
            <>
            {isIlePotrzebujeOpen && <IlePotrzebuje />}
            </>
          }
        />
        <AccordionBlock
          header="Co mogę zyskać?"
          content="Poza zrealizowanym celem, rozwiązanym problemem czy uratowaną relacją to zyskać możesz również przestrzeń do odkrywania siebie na wielu poziomach. Coaching niejednokrotnie wzmacniania poczucie własnej wartości i samooceny, pewności siebie, efektywności osobistej, daje możliwość lepszego poznania siebie, swoich wartości i drogi życiowej. Pozwala nawiązać lepszy kontakt ze sobą, swoimi emocjami, potrzebami i podejmowanie decyzji w zgodzie ze sobą. Jeśli tego potrzebujesz coaching daje możliwość stworzenia zdrowego balansu pomiędzy pracą, a rodziną i życiem osobistym, lepszego zarządzanie sobą w czasie, uzyskania większego spokoju, umiejętności odpuszczania, skutecznego odpoczynku i relaksu. Coaching również może przyczynić się do wsparcia cię w pełnieniu roli lidera, awansie, zmianie stanowiska lub firmy, a także w całkowitej zmianie zawodu. 
          Proces przyczynia się dodatkowo do budowania trwałych i zdrowych relacji w życiu osobistym i zawodowym. "
        />
        <AccordionBlock
          header="Co mogę stracić?"
          content="Możesz stracić ograniczające i blokujące cię przekonania na temat siebie, innych i otaczającego świata. "
        />
        <AccordionBlock
          header="Jak się umówić?"
          expanded={(value) => jakUmowicChange(value)}
          extra={
            <>
            {isJakUmowicOpen && <JakUmowic />}
            </>
          }
        />
        <CalendarButton bgColor="bg-yellow-100" />
      </div>
    </section>
  );
};

export default DlaJasnosciCoaching;
