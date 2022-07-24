import React from "react";
import Image from "next/image";
import CalendarButton from "../ui/calendarButton";
import jogaImg from '../../public/images/joga-img.jpeg';
const Coaching = () => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-20">
      <p className="text-5xl font-spartan-bold mb-6 text-center">JOGA</p>
      <p className="font-josefin-italic mx-10">
        Perła nie powstaje podczas leżenia w uzdrowisku. Perła powstaje z wyzwań
        jakie stawia przed nami życie. To one ukształtowały osobę którą jesteś
        dzisiaj. To był powód tych ciężkich chwil, aby cię uformować, abyś mógł
        spojrzeć wstecz i powiedzieć „dziękuje” za te pełne wyzwań czasy.
        Ponieważ przyszły one z darem, a ten dar jest w chwili obecnej. Myśle ze
        czasami to jak przedstawiamy nasze życie ze jest piękne ze to bajka
        ładny obrazek. Nie chcemy pozwolić żeby ludzie zajrzeli do środka. Nie
        pozwalamy by ludzie widzieli ten bałagan. Sprawy są tłumione i ukrywane.
        To nie lada podróż być w sobie i zdać sobie sprawę ze nie jesteś
        przytłaczający ze możesz sie dzięki możesz być. Jestes godny bycia na
        tym świecie, dzielenia sie swoim czułym sercem nie będąc dla nikogo
        ciężarem nie sprawiając nikomu kłopotu jak sie czujesz i jak głęboko
        odczuwasz i doświadczasz świat. Czasami jesteśmy dla siebie bardzo
        surowi za re doświadczenia za to co przeżyliśmy ale nie może oceniać
        kiedy drzewo jest nagie bez liści. Po prostu jest. To cześć jego
        podróży, jego cyklu. My jako ludzie tez many swoją podróż swoj cykl i
        sezony bycia. Umiejetność przetrwania w zimie kiedy czujemy sie sztywni
        samotni i zziębnięci. Ale z wiedza ze wiosna nadejdzie i nadejdzie
        zmiana. Czasami wiatr musi wiać naprawdę mocno żeby zdmuchnąć jesienne
        liście.
      </p>
      <CalendarButton bgColor="bg-green-100" />
      <div className="block">
        <Image
          src={jogaImg}
          alt={`joga-img`}
          width={390}
          height={278}
          layout="responsive"
        />
      </div>
      <p className="text-xl mt-6">Joga nie zabiera czasu lecz go daje.</p>
    </section>
  );
};

export default Coaching;
