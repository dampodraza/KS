import React from 'react';
import Image from 'next/image';

const JakWygladaSesja = () => {
  return (
    <>
      <Image
        src={'/images/dlajasnosci/wsparcie/jakwyglada.jpg'}
        alt={`joga-jak-wyglada-sesja`}
        width={390}
        height={260}
        className='md:hidden'
      />
      <p className='font-spartan-light leading-[23px] mt-4 mb-4'>
        Rozpoczyna się rozmową, podczas której poznasz mój styl pracy.
        Porozmawiamy o Twoich potrzebach i trudnościach oraz czy wsparcie jest
        tą formą pomocy, która aktualnie będzie najlepiej Ci służyć. Oboje
        ustalamy zasady współpracy i decydujemy o kontynuacji naszych spotkań.
        W trakcie trwania procesu pracujemy wspólnie nad rozwiązaniem Twoich
        problemów. W pakiecie otrzymujesz również moje autorskie metody
        wspierające Twój rozwój oraz czas wsparcia mailowego, po zakończeniu
        spotkań. Na zakończenie dodatkowo, podsumujemy efekty i zmiany, jakie
        zaszły w Tobie i Twoim życiu, w trakcie naszej współpracy.
      </p>
    </>
  );
};

export default JakWygladaSesja;
