import Image from "next/legacy/image";

const ZycieMilosc = () => {
  return (
    <>
      <Image
        src={"/images/mojahistoria/zyciemilosc1.jpg"}
        alt={`kasia-img`}
        width={390}
        height={273}
        layout="responsive"
      />
      <p className="font-spartan-bold text-lg text-left mt-4 pl-2">Posłuchaj</p>
      <audio
        className="w-[300px] pt-2"
        controls
        preload="none"
        style={{ margin: "0 auto" }}
      >
        <source src="audio/my_song.mp3" type="audio/mpeg" />
      </audio>
      <p className="font-spartan-light leading-[23px] mt-4 mb-4">
        Jako mała dziewczynka nagrywałam audycje radiowe, bo ciekawiły mnie
        historie innych ludzi. Od 7 roku życia pisałam pamiętniki, a od 13 roku
        życia piszę bloga. W życiu wielką radość daje mi rodzina, przyjaciele,
        mój mąż, pies Blues, szarlotka z lodami i podróże. Patrzę na swoje życie
        i widzę jak niesamowitą szczęściara jestem, zawsze byłam. Nigdy nie
        chorowałam, nic nie złamałam, nawet nie byłam w szpitalu. I jak z tym co
        posiadam miałabym nie chcieć zrobić czegoś dla innych. Oderwanie wzroku
        od siebie i własnych potrzeb i zwyczajne zaangażowanie się w ludzi
        zmieniło mój świat. Moje życie stało się niezwykłą przygodą, kiedy na
        mojej drodze pojawił się mój przyjaciel, a obecnie mąż Damian.<br></br>
        Nie będę czarować, że nie można uzależniać swojego szczęścia od drugiej
        osoby, bo uważam, że przez całe życie jesteśmy zależni i różne osoby
        wpływają na nasze szczęście. Kiedy naprawdę kochasz chcesz być dawcą nie
        biorcą. To sprawia największą przyjemność dar dawania bez oczekiwania
        niczego w zamian. Jeśli kogoś kochasz cieszysz się, że możesz dawać. To
        jest prawdziwa miłość. Miłość to po prostu nieskończony sposób, w jaki
        jesteś gotów dawać. Prawdziwa miłość prosi nas, byśmy robili trudne
        rzeczy – przebaczali sobie nawzajem, wspierali się nawzajem, pocieszali
        i troszczyli się o siebie nawzajem – w najtrudniejszych chwilach naszego
        życia. Moje życie stało się pełne i wspaniałe właśnie dzięki mojemu
        mężowi. Kiedy budzę się każdego dnia jestem zachwycona, że jestem
        powitana widokiem pieska, który przychodzi i macha ogonem, który po
        prostu cieszy się, że mnie widzi. Widokiem uśmiechniętych oczu mojego
        męża, który bezgranicznie mnie kocha. Śpiewem ptaków, które codziennie
        zupełnie za darmo dają koncert powitalny, bo jestem. Wszyscy oni są
        moimi guru.
        <Image
          src={"/images/mojahistoria/zyciemilosc2.jpg"}
          alt={`kasia-img`}
          width={390}
          height={216}
          layout="responsive"
        />
      </p>
    </>
  );
};

export default ZycieMilosc;
