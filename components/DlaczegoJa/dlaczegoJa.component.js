import React from 'react';
import Image from 'next/image';
import kasiaDrawing from '../../public/images/kasia-drawing2.png';
import DlaczegoJaIcons from './dlaczegoJaIcons.component';

const DlaczegoJa = () => {
  return (
    <>
      {/* <section className="flex justify-center items-center pt-20 pb-6 md:h-screen md:pt-28 md:pb-16"> */}
      <section className='flex items-center justify-center'>
        <div className='hidden md:flex w-full flex-col items-center justify-center lg:w-4/12'>
          <Image
            src={kasiaDrawing}
            alt='kasia-drawing'
            width={900}
            height={900}
            className='hidden lg:block'
          />
        </div>
        <div className='flex flex-col items-center px-4  md:items-baseline md:px-4 md:text-left lg:w-8/12'>
          <p className='mb-2 font-spartan-bold text-2xl lg:text-3xl xl:text-4xl'>
            Dlaczego właśnie ja?
          </p>
          <div className='w-full flex justify-center lg:hidden'>
            <Image
              src={kasiaDrawing}
              alt='kasia-drawing'
              width={324}
              height={310}
              className='md:w-full'
            />
          </div>
          <p className='pt-6 text-center font-spartan-light text-base leading-[26px] md:pb-12 md:text-left lg:text-base xl:text-xl'>
            Cześć! Jestem Kasia i wierzę w cuda. Uważam, że człowiek to istota
            wielowymiarowa, istny CUD - składający się z ciała, duszy i umysłu.
            Podczas pracy stosuje podejście holistyczne, sięgam głębiej, pracuję
            z drugim człowiekiem jako całością w wymiarze fizycznym,
            psychicznym, emocjonalnym i duchowym. Poza stosowaniem wiedzy z
            różnych nurtów psychologii, neurobiologii, filozofii, coachingu,
            totalnej biologii i psychologii ajurwedyjskiej, wykorzystuję również
            intuicję i słucham głosu swego serca.
          </p>
          <DlaczegoJaIcons />
        </div>
      </section>
    </>
  );
};

export default DlaczegoJa;
