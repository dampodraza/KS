import React from 'react';
import AccordionBlock from '../../ui/accordionBlock';
import Button from '../../ui/button';
import CoToCoaching from './cotocoaching.component';
import IleTrwaSesja from './iletrwasesja.component';
import JakWygladaSesja from './jakwygladasesja.component';
import IleToKosztuje from './iletokosztuje.component';
import GdzieSesja from './gdziesesja.component';
import IlePotrzebuje from './ilesesji.component';
import JakUmowic from './jaksieumowic.component';

const DlaJasnosciCoaching = () => {
  return (
    <section className='flex bg-[#F8F3F0] text-center justify-center items-center  pb-10 md:pt-0 md:pb-0 md:z-[1] md:mx-8'>
      <div className=' flex flex-col '>
        <p className='text-3xl font-spartan-bold mb-2 '>Dla jasności</p>

        <AccordionBlock
          header='Co to jest coaching?'
          extra={
            <>
              <CoToCoaching />
            </>
          }
        />
        <AccordionBlock
          header='Ile trwa sesja?'
          extra={
            <>
              <IleTrwaSesja />
            </>
          }
        />
        <AccordionBlock
          header='Jak wygląda sesja?'
          extra={
            <>
              <JakWygladaSesja />
            </>
          }
        />
        <AccordionBlock
          header='Ile to kosztuje?'
          extra={
            <>
              <IleToKosztuje />
            </>
          }
        />
        <AccordionBlock
          header='Gdzie odbywa się sesja?'
          extra={
            <>
              <GdzieSesja />
            </>
          }
        />
        <AccordionBlock
          header='Ile sesji potrzebuje?'
          extra={
            <>
              <IlePotrzebuje />
            </>
          }
        />
        <AccordionBlock
          header='Co mogę zyskać?'
          content='Poza zrealizowanym celem, rozwiązanym problemem czy uratowaną relacją to zyskać możesz również przestrzeń do odkrywania siebie na wielu poziomach. Coaching niejednokrotnie wzmacniania poczucie własnej wartości i samooceny, pewności siebie, efektywności osobistej, daje możliwość lepszego poznania siebie, swoich wartości i drogi życiowej. Pozwala nawiązać lepszy kontakt ze sobą, swoimi emocjami, potrzebami i podejmowanie decyzji w zgodzie ze sobą. Jeśli tego potrzebujesz coaching daje możliwość stworzenia zdrowego balansu pomiędzy pracą, a rodziną i życiem osobistym, lepszego zarządzanie sobą w czasie, uzyskania większego spokoju, umiejętności odpuszczania, skutecznego odpoczynku i relaksu. Coaching również może przyczynić się do wsparcia cię w pełnieniu roli lidera, awansie, zmianie stanowiska lub firmy, a także w całkowitej zmianie zawodu. 
          Proces przyczynia się dodatkowo do budowania trwałych i zdrowych relacji w życiu osobistym i zawodowym. '
        />
        <AccordionBlock
          header='Co mogę stracić?'
          content='Możesz stracić ograniczające i blokujące cię przekonania na temat siebie, innych i otaczającego świata. '
        />
        <AccordionBlock
          header='Jak się umówić?'
          extra={
            <>
              <JakUmowic />
            </>
          }
        />
        <Button withIcon text='Umów się na sesje' color='bg-yellow-100' />
      </div>
    </section>
  );
};

export default DlaJasnosciCoaching;
