import React, { useRef, useState } from 'react';
import Image from 'next/legacy/image';
import AccordionBlock from '../ui/accordionBlock';
import RodzinaWartosci from './rodzinawartosci.component';
import KarieraPasja from './karierapasja.component';
import ZycieMilosc from './zyciemilosc.component';
import CeleMarzenia from './celemarzenia.component';
import ZmianyZawody from './zmianyzawody.component';
import Button from '../ui/button';
const MojaHistoria = () => {
  return (
    // <section className="flex bg-[#F8F3F0] flex-col  text-center md:flex-row md:justify-center md:pt-32 md:pb-32">
    <section className='flex bg-[#F8F3F0] flex-col  text-center md:flex-row md:justify-center '>
      <p className='text-4xl font-spartan-bold mb-6 text-center md:hidden'>
        Moja historia
      </p>
      <div className='block'>
        <Image
          src={'/images/kasia-img.png'}
          alt={`kasia-img`}
          width={589}
          height={498}
          className='md:rounded-[35px]'
        />
      </div>
      <div className='flex flex-col md:max-w-[45%]'>
        <p className='text-4xl font-spartan-bolzd mb-6 text-center hidden md:block md:text-5xl'>
          Moja historia
        </p>
        <p className='font-spartan-light mx-4 mt-4 mb-4 md:px-8 md:text-base '>
          Pełna przygód i licznych zwrotów akcji historia o tym, jak ważne jest
          cieszyć się każdą chwilą swojego życia. Opowieść o dziewczynie tak
          normalnej, że aż podobnej do Ciebie. Z tą różnicą, że żyje za dwóch.
          Uświadomienie sobie tego doprowadziło mnie do jednego z
          najważniejszych odkryć w sobie. To był mój punkt zwrotny. Wiem teraz,
          że najlepszym sposobem na poznanie świata jest słuchanie tego, jak
          doświadczają go inni ludzie. Podróżuję przez życie jako wnikliwy
          obserwator, zbierając bogate doświadczenie i jednocześnie czerpiąc
          wiedzę z doświadczeń innych. Praca z ludźmi to ogromny przywilej i
          zaszczyt. To napełnia mnie miłością i jestem za to wdzięczna.
        </p>
        <div className='hidden md:block'>
          <Button
            withLink
            text='więcej...'
            color='bg-white'
            link={'/mojahistoria'}
          />
        </div>
      </div>
      <div className='md:hidden'>
        <AccordionBlock
          expanded={(value) => rodzinaChange(value)}
          header='Rodzina i wartości'
          extra={
            <>
              <RodzinaWartosci />
            </>
          }
        />
        <AccordionBlock
          header='Kariera i pasja'
          expanded={(value) => karieraChange(value)}
          extra={
            <>
              {' '}
              <KarieraPasja />
            </>
          }
        />
        <AccordionBlock
          header='Zmiany i zawody'
          expanded={(value) => zmianyChange(value)}
          extra={
            <>
              {' '}
              <ZmianyZawody />
            </>
          }
        />
        <AccordionBlock
          header='Zycie i miłość'
          expanded={(value) => zycieChange(value)}
          extra={
            <>
              <ZycieMilosc />
            </>
          }
        />
        <AccordionBlock
          header='Cele i marzenia'
          expanded={(value) => celeChange(value)}
          extra={
            <>
              <CeleMarzenia />
            </>
          }
        />
      </div>
    </section>
  );
};

export default MojaHistoria;
