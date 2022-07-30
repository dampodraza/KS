import React from 'react';
import Image from 'next/image';

const ileTrwaSesja = () => {
  return (
    <>
    <Image
                src={"/images/dlajasnosci/coaching/jakwygladasesja.jpg"}
                alt={`coaching-jak-wglada-sesja`}
                width={390}
                height={264}
                layout="responsive"
              />
              <p className="font-spartan-light leading-[23px] mt-4 mb-4">
                Rozpoczyna się rozmową coachingową, podczas której doświadczysz,
                czym jest coaching i poznasz mój styl pracy. Porozmawiamy
                o Twoich potrzebach, trudnościach i celach oraz czy coaching
                jest tym rodzajem wsparcia, jaki aktualnie będzie najlepiej
                służyć ich realizacji. Oboje ustalamy zasady współpracy
                i decydujemy o kontynuacji naszych spotkań coachingowych.
                W trakcie trwania procesu pracujemy wspólnie nad realizacją
                Twoich celów. W pakiecie otrzymujesz również moje autorskie
                ćwiczenia coachingowe wspierające Twój rozwój oraz czas wsparcia
                mailowego, po zakończeniu spotkań. Na zakończenie dodatkowo,
                podsumujemy efekty i zmiany, jakie zaszły w Tobie i Twoim życiu,
                w trakcie naszej współpracy.
              </p>
  </>
  )
  }


export default ileTrwaSesja;