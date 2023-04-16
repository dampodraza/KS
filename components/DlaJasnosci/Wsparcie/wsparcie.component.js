import React from 'react';
import AccordionBlock from '../../ui/accordionBlock';
import Button from '../../ui/button';
import CoToWsparcie from './cotowsparcie.component';
import IleTrwa from './iletrwa.component';
import JakWyglada from './jakwyglada.component';
import IleKosztuje from './ilekosztuje.component';
import GdzieSesja from './gdziesesja.component';
import CoZyskam from './cozyskam.component';
import CzymRozniOdCoaching from './czymrozniodcoachingu.component';

const DlaJasnosciWsparcie = () => {
  return (
    <section className='flex bg-[#F8F3F0] text-center justify-center items-center  pb-10 md:pt-0 md:pb-0 md:z-[1] md:mx-8'>
      <div className='flex flex-col '>
        <p className='text-3xl font-spartan-bold mb-2'>Dla jasności</p>
        <AccordionBlock
          header='Co to jest wsparcie?'
          expanded={(value) => coToWsparcieChange(value)}
          extra={
            <>
              <CoToWsparcie />
            </>
          }
        />
        <AccordionBlock
          header='Ile trwa sesja?'
          expanded={(value) => ileTrwaChange(value)}
          extra={
            <>
              <IleTrwa />
            </>
          }
        />
        <AccordionBlock
          header='Jak wygląda sesja?'
          expanded={(value) => jakWygladaChange(value)}
          extra={
            <>
              <JakWyglada />
            </>
          }
        />
        <AccordionBlock
          header='Ile to kosztuje?'
          expanded={(value) => ileKosztujeChange(value)}
          extra={
            <>
              <IleKosztuje />
            </>
          }
        />
        <AccordionBlock
          header='Gdzie odbywają się zajęcia?'
          expanded={(value) => gdzieSesjaChange(value)}
          extra={
            <>
              <GdzieSesja />
            </>
          }
        />
        <AccordionBlock
          header='Co mogę zyskać?'
          expanded={(value) => coZyskamChange(value)}
          extra={
            <>
              <CoZyskam />
            </>
          }
        />
        <AccordionBlock
          header='Czym rózni się wsparcie od coachingu?'
          expanded={(value) => czymRozniChange(value)}
          extra={
            <>
              <CzymRozniOdCoaching />
            </>
          }
        />
        {/* <Button withIcon color='bg-blue-100' text='Umów się na sesje' /> */}
      </div>
    </section>
  );
};

export default DlaJasnosciWsparcie;
