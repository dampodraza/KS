import React from "react";
import Image from "next/image";
import CalendarButton from "../ui/calendarButton";
const Wsparcie = () => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-20">
      <p className="text-5xl font-spartan-bold mb-6 text-center">WSPARCIE</p>
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
        surowi za re doświadczenia za to co przeżyliśmy ale nie może
        przytłaczający ze możesz sie dzięki możesz być. Jestes godny bycia na
        tym świecie, dzielenia sie swoim czułym sercem nie będąc dla nikogo
        ciężarem nie sprawiając nikomu kłopotu jak sie czujesz i jak głęboko
        odczuwasz i doświadczasz świat. Czasami jesteśmy dla siebie bardzo
        surowi za re doświadczenia za to co przeżyliśmy ale nie może
        przytłaczający ze możesz sie dzięki możesz być. Jestes godny bycia na
        tym świecie, dzielenia sie swoim czułym sercem nie będąc dla nikogo
        ciężarem nie sprawiając nikomu kłopotu jak sie czujesz i jak głęboko
        odczuwasz i doświadczasz świat.
      </p> 
      <CalendarButton bgColor="bg-blue-100"/>
      <div className="block">
        <Image
          src={"/images/wsparcie-img.jpeg"}
          alt={`wsparcie-img`}
          width={390}
          height={278}
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default Wsparcie;
