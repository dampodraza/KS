import Image from 'next/legacy/image';
import PodcastPlayer from '../ui/podcastPlayer';

const RodzinaWatosci = () => {
  return (
    <>
      <div className='block'>
        <Image
          src={'/images/mojahistoria/rodzinawartosci1.jpg'}
          alt={`kasia-img`}
          width={397}
          height={234}
          layout='responsive'
        />
      </div>

      <>
        <PodcastPlayer src={'audio/my_song.mp3'} />
      </>

      <p className='mb-4 mt-8 font-spartan-light leading-[23px] md:text-base'>
        Urodziłam się w roku przełomowym - 1989 i przełomem były moje narodziny.
        Byłam zdrową siostrą siedmioletniego autysty z porażeniem mózgowym i
        niezwykłych rodziców, których miłość rozwiązywała wszystkie problemy
        świata. Samodzielność, empatię i słuchanie pomiędzy jedną a drugą ciszą
        miałam kompletnie opanowane przed skończeniem trzeciego roku życia.
        Sytuacja, w której się wychowałam, sprawiła, że wdzięczność i nadzieja
        stały się najważniejszą walutą w moim życiu. Bo jak było dobrze, to
        znaczyło, że wygraliśmy życie i należy być za to po stokroć wdzięcznym,
        a jak było źle, to mieliśmy nadzieje, że będzie dobrze. Źle oznaczało
        problemy. Problemy ze snem, z agresją, z emocjami, z wypróżnianiem, z
        jedzeniem i ze wszystkim, na co mały człowiek nie ma wpływu. Dobrze
        natomiast było dla nas tym, co dla świata jest normalne, monotonne,
        stabilne i nudne.{' '}
      </p>
      <Image
        src={'/images/mojahistoria/rodzinawartosci2.jpg'}
        alt={`kasia-img`}
        width={390}
        height={237}
        layout='responsive'
      />
      <p className='mt-4 font-spartan-light leading-[23px] md:text-base'>
        Jednakże po burzy wychodzi słońce i nie ma niczego, z czego nie mógłbyś
        się podnieść. Mam na to dowody w postaci życia na takim rollecasterze
        przez 40 lat. Nie wiem, czy mogłam wymarzyć sobie lepsze dzieciństwo,
        dostałam bowiem tak dużo lekcji, że kiedy poszłam do szkoły, niewiele
        już miało znaczenie. Wiedziałam bowiem, że największą rzeczą, która
        nadaje sens mojemu życiu, jest bycie wartością dla kogoś innego. Jako
        mały człowiek wiedziałam też, że zdrowie jest kluczowe i miałam
        poczucie, że dostałam je w podwójnej dawce, za mojego brata. Podwójnie
        również zostałam obdarowana umiejętnością mówienia, pisania i uczenia
        się — te rzeczy przychodzą mi z niezwykłą łatwością. Mam poczucie, że w
        moim życiu obecny jest mój wyjątkowy brat, którego cechy niejako
        przejęłam, czasami z podwójną mocą. Patrzę na świat z podziwem każdego
        dnia, a mantra, według której żyje to wdzięczność. Jestem wdzięcznym za
        to kim jestem. Wdzięczna za to, co mam wokół siebie. Czuje ogromną
        wdzięczność za to, że mogę żyć moim marzeniem.
      </p>
    </>
  );
};

export default RodzinaWatosci;
