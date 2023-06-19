import React, { useState } from 'react';
import Layout from '../../components/ui/layout';
import RodzinaWartosci from '../../components/MojaHistoria/rodzinawartosci.component';
import KarieraPasja from '../../components/MojaHistoria/karierapasja.component';
import ZmianyZawody from '../../components/MojaHistoria/zmianyzawody.component';
import ZycieMilosc from '../../components/MojaHistoria/zyciemilosc.component';
import CeleMarzenia from '../../components/MojaHistoria/celemarzenia.component';
import MojaHistoria from '../../components/MojaHistoria/mojahistoria.component';
import Image from 'next/image';
import WsparcieImg from '../../public/images/wsparcie-img.jpeg';
import AccordionBlock from '../../components/ui/accordionBlock';

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

      <div className='grid grid-cols-1 md:grid-cols-2  md:items-center pt-48'>
        <div className='block'>
          <Image
            src={WsparcieImg}
            alt={`wsparcie-img`}
            width={642}
            height={408}
            className='md:rounded-[35px]'
          />
        </div>
        <div className="md:px-8 md:text-center">
          <p className='mb-6 mt-6 font-spartan-bold text-xl md:mt-14 md:text-3xl'>
            Każdy kryzys to ukryta szansa.
          </p>
          <p className='mx-5 mb-2 font-spartan-light text-sm leading-[25px] '>
            Wierzę, że nie ma niczego, z czego nie mógłbyś się podnieść. Perła
            nie powstaje podczas leżenia w uzdrowisku. Perła powstaje z wyzwań,
            jakie stawia przed nami życie. To one ukształtowały osobę, którą
            jesteś dzisiaj. Bo tak naprawdę najsilniejszy jesteś, kiedy się
            rozpadasz. Potrzeba naprawdę silnej osoby, żeby się rozsypać.
            Najsilniejsi ludzie pozwalają sobie płakać jak małe dzieci. Nie boją
            się też prosić o pomoc, bo wiedzą, że w życiu nie można być
            niezależnym. Nikt nie jest niezależny. Każdy potrzebuje kogoś lub
            czegoś w jakimkolwiek momencie życia. Możemy czuć się zdruzgotani
            okolicznościami, w jakich się znajdujemy. Ale wewnątrz nas jest coś,
            co sprawia, że na nowo powstajemy. Doświadczenia bólu, cierpienia i
            niepowodzenia przypominają nam, że istnieje w nas część, która jest
            silna. Trzeba ją tylko na nowo powołać do życia.
          </p>
        </div>
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
      </div>
    </Layout>
  );
};

export default MojaHistoriaPage;
