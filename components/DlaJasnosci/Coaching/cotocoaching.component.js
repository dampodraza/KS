import React from 'react';
import Image from 'next/image';
import coToCoachingImg from '../../../public/images/dlajasnosci/coaching/cotocoaching.jpg';

const coToCoaching = () => {
  return (
    <>
      <Image
        src={coToCoachingImg}
        alt={`co-to-coaching`}
        width={390}
        height={272}
        className='md:hidden'
      />
      <p className='font-spartan-light leading-[23px] mt-4 mb-4'>
        Coaching to metoda rozwoju osobistego, która pomaga osiągnąć cele,
        pozbyć się przeszkód i rozwiązać problemy. Ekspertem w tym procesie jest
        klient. Coach nie doradza, nie daje rozwiązań, nie ocenia, nie poucza, a
        zadaje pytania, które doprowadzają klienta do najlepszych rezultatów. To
        proces, który przywiązuje większą wagę do czucia niż do myślenia, do
        planowania, do bycia, a nie posiadania, do teraźniejszości i
        przyszłości, a nie do przeszłości. Podstawowym pytaniem zadawanym przez
        coacha jest „jak?” a nie „dlaczego?” To znaczy, jak osiągnąć poszukiwany
        cel, ale rozwiązać problem. To inspirowanie ludzi do poszukiwania
        odpowiedzi na ich najważniejsze pytania. Odpowiedzi, których nie mam ja,
        lecz ty.
      </p>
    </>
  );
};

export default coToCoaching;
