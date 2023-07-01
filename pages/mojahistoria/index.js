import React, { useState } from 'react';
import Layout from '../../components/ui/layout';
import RodzinaWartosci from '../../components/MojaHistoria/rodzinawartosci.component';
import KarieraPasja from '../../components/MojaHistoria/karierapasja.component';
import ZmianyZawody from '../../components/MojaHistoria/zmianyzawody.component';
import ZycieMilosc from '../../components/MojaHistoria/zyciemilosc.component';
import CeleMarzenia from '../../components/MojaHistoria/celemarzenia.component';
import MojaHistoria from '../../components/MojaHistoria/mojahistoria.component';
import Image from 'next/image';
import KasiaBlues from '../../public/images/kasiablues.png';
import AccordionBlock from '../../components/ui/accordionBlock';
import QuoteIcon from '../../public/icons/quote.svg';
import IcoDalej from '../../components/MojaHistoria/icodalej.component';

const MojaHistoriaPage = () => {
  return (
    <Layout>
      {/* <div className='px-8 md:px-20 pt-12 md:pt-48'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
          <div>
            <p className='mb-8 text-center text-2xl font-spartan-bold md:text-4xl'>
              Rodzina i wartości
            </p>
            <RodzinaWartosci />
            <p className='mb-8 mt-8 text-center  text-2xl font-spartan-bold md:text-4xl'>
              Zmiany
            </p>
            <ZmianyZawody />
            <p className='mb-8 mt-8 text-center  text-2xl font-spartan-bold md:text-4xl'>
              Cele i marzenia
            </p>
            <CeleMarzenia />
          </div>
          <div>
            <p className='mb-8 text-center  text-2xl font-spartan-bold md:text-4xl'>
              Kariera i pasja
            </p>
            <KarieraPasja />
            <p className='mb-8 mt-8 text-center  text-2xl font-spartan-bold md:text-4xl'>
              Miłość
            </p>
            <ZycieMilosc />
          </div>
          <div>


          </div>
        </div>
      </div> */}

      <div className='flex justify-center items-center flex-col pt-36'>
          <Image
            src={KasiaBlues}
            alt={`mojahistoria-img`}
            width={842}
            height={608}
            className='md:rounded-[35px]'
          />
        <section className='flex flex-col bg-[#F8F3F0]  text-center'>

      <p className='mt-12 hidden text-center font-spartan-bold text-2xl md:block md:font-josefin-italic md:text-3xl px-48'>
      Moja przeszłość nie definiuje mnie, ale daje szerszy obraz na to kim się staje. A droga ta nie ma końca.
      </p>
    </section>
      </div>
      <div className='px-48 pt-12 pb-12'>
        <div>
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
            header='Życie i miłość'
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
      </div>
    </Layout>
  );
};

export default MojaHistoriaPage;
