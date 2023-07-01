import Image from 'next/legacy/image';
import PodcastPlayer from '../ui/podcastPlayer'
const CeleMarzenia = () => {
  return (
    <>
      <Image
        src={'/images/mojahistoria/celemarzenia1.jpg'}
        alt={`kasia-img`}
        width={390}
        height={251}
        layout='responsive'
      />

      <p className='mb-4 mt-4 font-spartan-light leading-[23px]'>
        Zawsze miałam długie listy tego czego chciałam od życia. Długie listy
        celów. I robiłam plany co za rok, dwa, pięć, dziesięć lat. Ale w ciągu
        kilku lat to trochę zmieniło formę. Robię tablice marzeń, nawet video
        tablice marzeń, ale mam przestrzeń na ciekawość i takie poczucie
        zobaczymy co się stanie. To takie poczucie ze życie zaprowadzi mnie w
        ciekawe miejsca. A ja jestem na to gotowa i otwarta. Dopóki mam otwarte
        serce, żeby się komunikować poprzez autentyczność dzielenia się i
        połączenia. Dlatego moim głównym celem w tej chwili jest być. Być to
        znaczy słuchać, obserwować, żyć według pór roku, żyć rytmem warzyw w
        ogródku, żyć wśród zwierząt. I pamiętać, że jestem tu, aby dać światu
        trochę miłości. Jeśli pomogę jednej osobie to podążam za celem.
      </p>
      <Image
        src={'/images/mojahistoria/celemarzenia2.jpg'}
        alt={`kasia-img`}
        width={390}
        height={281}
        layout='responsive'
      />
      <p className='mb-4 mt-4 font-spartan-light leading-[23px]'>
        Wspólnie z mężem prowadzimy też firmę <a href="https://unow.pl">www.unow.pl </a> i pragnę, aby
        przybliżanie ludzi do spełniania marzeń było naszym głównym zajęciem.
        Wierzę, że musimy ciągle marzyć. Zawsze jest coś nowego do odkrycia.
        Wiem jednocześnie, jestem tego pewna, mam głębokie przekonanie, że
        wszystkie moje marzenia się spełnią i będzie dokładnie tak, jak ma być.
      </p>
    </>
  );
};

export default CeleMarzenia;
