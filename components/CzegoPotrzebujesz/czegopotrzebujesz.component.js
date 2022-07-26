import React from "react";
import ExpandContentCTA from "./ExpandContentCTA/expandcontentcta.component";
import { coachingList, wsparcieList, jogaList } from "../../content/cta";

const CzegoPotrzebujesz = ({}) => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col   items-center pt-4">
      <p className="text-3xl font-spartan-bold mb-4 text-center">
        W czym mogę służyć?
      </p>
      <p className="px-4 mb-10 font-spartan-light text-center leading-[26px]">
        Jeśli przechodzisz przez trudny okres w swoim życiu, wiedz, że nigdy nie
        jest on bezwartościowy. Wyzwania z którymi się mierzysz uczą dostrzegać
        możliwości, których być może nigdy byś nie zgłębił w komfortowych
        chwilach. Wiem, że proszenie o pomoc wymaga odwagi. To nie lada podróż
        być w sobie i zdać sobie sprawę potrzebuje wsparcia. Każdy z nas ma taki
        wewnętrzny głos, który w różnych momentach zycia próbuje przemówić,
        ważne aby dać mu do tego przestrzeń. <br></br>Witaj w tym miejscu.
      </p>

      <ExpandContentCTA
        title="Coaching"
        name="coaching"
        buttonText="Sprawdź jak to działa"
        textColor="text-yellow-100"
        bgColor="bg-yellow-100"
        contentList={coachingList}
      />

      <ExpandContentCTA
        title="Wsparcie"
        name="wsparcie"
        buttonText="Porozmawiajmy"
        textColor="text-blue-100"
        bgColor="bg-blue-100"
        contentList={wsparcieList}
      />
      <ExpandContentCTA
        title="Joga"
        name="joga"
        buttonText="Dowiedz się więcej"
        textColor="text-green-100"
        bgColor="bg-green-100"
        contentList={jogaList}
      />
    </section>
  );
};

export default CzegoPotrzebujesz;
