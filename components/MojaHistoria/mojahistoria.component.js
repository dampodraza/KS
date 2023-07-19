import React, { useRef, useState } from 'react';
import Image from 'next/legacy/image';
import AccordionBlock from '../ui/accordionBlock';
import RodzinaWartosci from './rodzinawartosci.component';
import KarieraPasja from './karierapasja.component';
import ZycieMilosc from './zyciemilosc.component';
import CeleMarzenia from './celemarzenia.component';
import ZmianyZawody from './zmianyzawody.component';
import Button from '../ui/button';
import IcoDalej from './icodalej.component';

const MojaHistoria = () => {
  return (
    // <section className="flex bg-[#F8F3F0] flex-col  text-center md:flex-row md:justify-center md:pt-32 md:pb-32">
    <section className='flex flex-col bg-[#F8F3F0]  text-center md:flex-row md:justify-center '>
      <p className='mb-6 text-center font-spartan-bold text-3xl xl:text-4xl md:hidden'>
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
      <div className='flex flex-col md:ml-8 md:max-w-[45%]'>
        <p className='mb-6 hidden text-center font-spartan-bold text-2xl md:mb-4 md:block md:pt-8 md:text-4xl'>
          Moja historia
        </p>
        <p className='mx-4 mb-4  font-spartan-light md:mb-0 md:px-8 md:text-justify md:text-base'>
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
         <AccordionBlock
            header='I co dalej'
            expanded={(value) => celeChange(value)}
            extra={
              <>
                <IcoDalej />
              </>
            }
          />
      </div>
    </section>
  );
};

export default MojaHistoria;
