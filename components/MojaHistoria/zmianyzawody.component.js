import Image from 'next/legacy/image';
import PodcastPlayer from '../ui/podcastPlayer';

const ZmianyZawody = () => {
  return (
    <>
      <Image
        src={'/images/mojahistoria/zmiany.jpg'}
        alt={`kasia-img`}
        width={390}
        height={269}
        layout='responsive'
      />
      <p className='font-spartan-light leading-[23px] mt-4 mb-4'>
        Zmiana towarzyszy mi przez całe życie. Nauczyłam się codziennie z nią
        obcować i wiem, że nie ma nic bardziej pewnego niż zmiana. To nie jest
        tak, że mnie to nie kosztuje, ale mam świadomość tego, że zmiana niesie
        nowe i z mojego doświadczenia zawsze to nowe jest dobre. Może nie
        dzisiaj, nie jutro, ale za jakiś czas zrozumiem, że wszystko jest po coś.
        I z tą perspektywą idę przez życie. Przez życie, do którego nauczyłam się
        mieć zaufanie. Mieć całkowitą pewność, że życie chce dobrze, bo nie ma
        żadnych przyczyn, aby chcieć dla nas źle. Zdrada i odebranie mi mojej
        pewności siebie były trudną lekcją, którą dostałam nie rozumiejąc za
        dlaczego. Długi czas zajęło mi stawanie na nogi i zrozumienie po co.  
        <br></br>
        Długi czas zajęło mi stawanie na nogi i zrozumienie po co. To jednak
        było wstępem do lekcji pt. „Odpuszczanie”. Lekcji trudnej jak diabli i
        ciągle się powtarzającej. Istnieje także wiele lekcji w naturze. Powrót
        do natury, po latach życia w miejskiej dżungli był dla mnie przełomem na
        skalę życiową. Kiedy przeprowadziliśmy się na wieś mój system nerwowy po
        raz pierwszy się uspokoił, mogłam swobodnie oddychać. Czuje się tutaj
        bezpiecznie, spokojnie. I wreszcie fakt, że nie na wszystko jest
        wyjaśnienie, że dzieją się cuda, że nauka wielu rzeczy nie potrafi
        jeszcze wytłumaczyć.
      </p>
    </>
  );
};

export default ZmianyZawody;
