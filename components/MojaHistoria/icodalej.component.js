import Image from 'next/legacy/image';
import PodcastPlayer from '../ui/podcastPlayer';


const IcoDalej = () => {
  return (
    <>
     <Image
        src={'/images/IMG_5159.png'}
        alt={`ico-dalej-img`}
        width={1200}
        height={841}
        layout='responsive'
      />
     <p className='font-spartan-light leading-[23px] mt-4 mb-4'>
     A dalej jest tylko spokój i akceptacja tego, co przynosi życie. Jestem studentką psychologii klinicznej oraz uczę się psychologii ajurwedyjskiej. Zrobiłam wspaniały kurs joga w ciąży i mama baby joga dla kobiet starających się o dziecko, w trakcie ciąży i z małymi dziećmi do 1 roku życia zostając certyfikowanym nauczycielem w tym obszarze. Jestem także w trakcie szkolenia na terapeutę totalnej biologii Recall Herling. Wraz z mężem tworzymy projekt „Uzdrowisko Po Dobro”, a mój wspaniały mąż kończy ziołolecznictwo. Nasz piesek Blues jest zdrowy i dostarcza nam szczęścia ucząc nas wdzięczności za każdy moment. Wspólnie oczekujemy na nasze cudowne dziecko, gdyż rodzina nam się powiększy. 
      </p>
    </>
  );
};

export default IcoDalej;
