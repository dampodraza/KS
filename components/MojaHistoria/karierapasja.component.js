import Image from 'next/legacy/image';

const KarieraPasja = () => {
  return (
    <>
      <div className='block'>
        <Image
          src={'/images/mojahistoria/kariera1.jpg'}
          alt={`kasia-img`}
          width={390}
          height={237}
          layout='responsive'
        />
      </div>
      <p className='font-spartan-bold text-lg text-left mt-4 pl-2'>Posłuchaj</p>
      <audio
        className='w-[300px] pt-2'
        controls
        preload='none'
        style={{ margin: '0 auto' }}
      >
        <source src='audio/my_song.mp3' type='audio/mpeg' />
      </audio>
      <p className='font-spartan-light leading-[23px] mt-4 mb-4'>
        Wychowałam się w czasach, w których jedna praca równa się jedno życie.
        To zawsze wprawiało mnie w zakłopotanie, ponieważ jako mała dziewczynka
        próbowałam wielu rzeczy, które często porzucałam, a to nazywane było
        słomianym zapałem. Jak możecie się domyślić nienawidzę tego określenia i
        kibicuje wszystkim ludziom mającym rzekomy „słomiany zapał” bo uważam,
        że nie ma innej drogi, aby odkryć to, co się kocha robić w życiu. Miałam
        jednak to szczęście, że w moim życiu obecni byli ludzie, którzy dawali
        mi dowolność w podejmowaniu jakichkolwiek decyzji i wspierali każdy mój
        pomysł na życie. Zaczynałam od aktorstwa, bo miałam potrzebę
        udowodnienia sobie, rodzicom i światu, że zarówno ja jak i mój brat
        jesteśmy ważni. To wiem dzisiaj, wtedy wydawało mi się, że jestem
        stworzona do odgrywania ról i słuchania braw.{' '}
      </p>
      <Image
        src={'/images/mojahistoria/kariera2.jpg'}
        alt={`kasia-img`}
        width={390}
        height={241}
        layout='responsive'
      />
      <p className='font-spartan-light leading-[23px] mt-4 mb-4'>
        Ukończyłam nawet szkołę aktorską, obroniłam dyplom, wyjechała do
        Warszawy osiągnąć karierę i.. spotkałam się z brutalną rzeczywistością.
        Musząc zarobić na czynsz zaczęłam pracować w jednej z sieci
        telekomunikacyjnych, dużej korporacji, szybką pnąc się po szczebelkach
        kariery na stanowiska kierownicze. Spędziłam tam 5 lat, za które jestem
        ogromnie wdzięczna, bo nauczyły mnie pokory, zarządzania i uświadomiły
        jak bardzo nie potrafię się podporządkowywać. W międzyczasie studiowałam
        lingwistykę stosowaną na Uniwersytecie Warszawskim, której nigdy nie
        skończyłam, bo bliżej mi do mówienia, niż do uczenia się o mówieniu. 5
        lat później ukończyłam studia w Łódzkiej Szkole Filmowej jako
        organizator produkcji filmowych i telewizyjnych. Postawiłabym wtedy cały
        swój majątek na to, że będzie to mój zawód do końca życia., W trakcie
        studiów pracowałam już na różnych stanowiskach, produkowałam programy
        telewizyjne, nawet w Japonii, Korei Południowej czy Indonezji, a
        następnie filmy i seriale.
      </p>
      <Image
        src={'/images/mojahistoria/kariera3.jpg'}
        alt={`kasia-img`}
        width={390}
        height={241}
        layout='responsive'
      />
      <p className='font-spartan-light leading-[23px] mt-4 mb-4'>
        Cała moja kariera odbywała się książkowo, zarabiałam świetne pieniądze,
        zajmowałam wysokie stanowiska, mogło być tylko lepiej. Ale nie było. Bo
        czułam się w branży filmowej jak ryba na powierzchni, brakowało mi wody.
        Wszystko mnie w tym świecie rozczarowało, ale nie mogłam znieść
        odmiennych wartości i braku poczucia sensu. Pamiętam jak zorientowałam
        się, że robię karierę, która nie była dla mnie ważna. Był to mój sposób
        na zarabianie pieniędzy, to wszystko. Zdałam sobie sprawę, że nie jest
        to miejsce dla mnie. I ziarno zostało zasiane w moim sercu. Pozostawić
        stabilną karierę by wskoczyć w coś, co nie jest stabilne ani trochę
        byłam przerażona totalnie się bałam. Ale wiedziałam, że jak nie wykonam
        żadnego ruchu to nic się nie zmieni. I zrozumiałam, że jedyne czego
        naprawdę trzeba się bać to niesłuchanie siebie, niezrobienie tego co
        uważasz za słuszne. Wtedy postanowiłam pierwszy raz od wielu lat się
        zatrzymać.{' '}
      </p>
      <Image
        src={'/images/mojahistoria/kariera4.jpg'}
        alt={`kasia-img`}
        width={390}
        height={241}
        layout='responsive'
      />
      <p className='font-spartan-light leading-[23px] mt-4 mb-4'>
        Zdałam sobie sprawę próbowałam wielu dróg i nie byłam
        usatysfakcjonowana. Ale zawsze był mały płomień i co jakiś czas do niego
        wracałam, pielęgnowałam ten żar płynący w sercu. To źródło wewnątrz
        ciebie które mówi że jest coś więcej niż twoje okoliczności. Tym źródłem
        jest bycie blisko kogoś kto utracił nadzieje a następnie zaprowadzenie
        go do miejsca w którym zobaczy trochę światła. Skończyłam więc dwa
        przepiękne kursy: PWC Coaching and Bussines Diploma oraz kurs
        nauczycielski Sri Sri Yoga. Jako osoba ambitna, pracowita, głodna
        wiedzy, zdobyłam wiele dyplomów i ukończyłam sporo kursów. Ostatecznie
        jednak uświadomiłam sobie, że to nie one stanowią o mojej wartości, lecz
        to jakim jestem człowiekiem i co wnoszę do życia innych. 
      </p>
    </>
  );
};

export default KarieraPasja;
