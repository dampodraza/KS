import React from "react";
import ExpandContentCTA from "./ExpandContentCTA/expandcontentcta.component";
import { coachingList, wsparcieList, jogaList } from "../../content/cta";

const CzegoPotrzebujesz = ({}) => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col   items-center pt-20">
      <p className="text-4xl font-spartan-bold mb-6 text-center">
        Czego potrzebujesz?
      </p>
      <p className="text-lg px-10 mb-10 font-josefin-italic text-center">
        Może być tak, że połączymy różne z tych opcji. Może być tak, że
        połączymy różne z tych opcji. Może być tak, że połączymy różne z tych
        opcji. Może być tak, że połączymy różne z tych opcji.
      </p>

      <ExpandContentCTA
        title="Coaching"
        name="coaching"
        buttonText="UMÓW SIĘ NA SESJE"
        textColor="text-yellow-100"
        bgColor="bg-yellow-100"
        contentList={coachingList}
      />

      <ExpandContentCTA
        title="Wsparcie"
        name="wsparcie"
        buttonText="POROZMAWIAJMY"
        textColor="text-blue-100"
        bgColor="bg-blue-100"
        contentList={wsparcieList}
      />
      <ExpandContentCTA
        title="Joga"
        name="joga"
        buttonText="ZOBACZ JAK TO DZIAŁA"
        textColor="text-green-100"
        bgColor="bg-green-100"
        contentList={jogaList}
      />
    </section>
  );
};

export default CzegoPotrzebujesz;
