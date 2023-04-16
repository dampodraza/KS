import React from 'react';
import AccordionBlock from '../../ui/accordionBlock';
import Button from '../../ui/button';

import CoStrace from './costrace.component';
import CoZyskam from './cozyskam.component';
import IleTrwa from './iletrwa.component';
import JakWyglada from './jakwyglada.component';
import IleKosztuje from './ilekosztuje.component';
import GdzieSesja from './gdziesesja.component';
import IleSesji from './ilesesji.component';
import CoWyroznia from './cowyroznia.component';

const DlaJasnosciJoga = () => {
  return (
    <section className='flex bg-[#F8F3F0] text-center justify-center items-center pt-10 pb-10'>
      <div className='flex flex-col w-full'>
        <p className='text-3xl font-spartan-bold mb-2 '>Dla jasności</p>

        <AccordionBlock
          header='Ile trwają zajęcia jogi?'
          expanded={(value) => ileTrwaChange(value)}
          extra={
            <>
              <IleTrwa />
            </>
          }
        />
        <AccordionBlock
          header='Jak to wygląda?'
          expanded={(value) => jakWygladaChange(value)}
          extra={
            <>
              {' '}
              <JakWyglada />
            </>
          }
        />
        <AccordionBlock
          header='Ile to kosztuje?'
          expanded={(value) => ileKosztujehange(value)}
          extra={
            <>
              <IleKosztuje />
            </>
          }
        />
        <AccordionBlock
          header='Gdzie odbywa się sesja?'
          expanded={(value) => gdzieSesjachange(value)}
          extra={
            <>
              <GdzieSesja />
            </>
          }
        />
        <AccordionBlock
          header='Ile sesji potrzebuje?'
          expanded={(value) => ileSesjihange(value)}
          extra={
            <>
              <IleSesji />
            </>
          }
        />
        <AccordionBlock
          header='Co mogę zyskać?'
          expanded={(value) => coZyskamChange(value)}
          extra={
            <>
              {' '}
              <CoZyskam />
            </>
          }
        />
        <AccordionBlock
          header='Co mogę stracić?'
          expanded={(value) => coStraceChange(value)}
          extra={
            <>
              <CoStrace />
            </>
          }
        />
        <AccordionBlock
          header='Czym wyrózniają się zajęcia jogi?'
          expanded={(value) => coWyrozniaChange(value)}
          extra={
            <>
              <CoWyroznia />
            </>
          }
        />
      </div>
    </section>
  );
};

export default DlaJasnosciJoga;
