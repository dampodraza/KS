import React from 'react';
import landingImg from '../../public/images/landing-mobile.jpg';
import landingImgDesktop from '../../public/images/landing-desktop5.png';
import Image from 'next/image';
import Button from '../ui/button2';

const FrontSection = () => {
  return (
    <section>
      <div className='relative mt-[-225px]  w-screen md:hidden'>
        <Image src={landingImg} alt='podobroLogo' />
        <p className='absolute left-0 right-0 mr-auto ml-auto top-[224px] max-w-[280px] text-center font-spartan-bold text-[17px] leading-[22px]'>
          Nie zawsze możesz kontrolować to, co dzieje się na zewnątrz. 
          Ale zawsze możesz  kontrolować, to, co dzieje się w środku.
        </p>
        <div className='absolute left-[87px] top-[310px] max-w-[280px] text-center font-spartan-bold text-[20px] leading-[22px]'>
          <Button
            withLink
            text='Umów się na konsultacje'
            color='bg-white'
            link={'/rezerwacja'}
          />
        </div>
      </div>
      <div className='relative hidden w-screen px-1 md:block'>
        <Image src={landingImgDesktop} priority alt='podobroLogo' />
        <div className='absolute left-[40%] top-[40%] max-w-[30%] -translate-x-1/2 -translate-y-1/2 transform text-center font-spartan-bold text-base lg:text-xl xl:text-2xl '>
          Nie zawsze możesz kontrolować to, co dzieje się na zewnątrz. <br></br>
          Ale zawsze możesz kontrolować to, co dzieje się w środku.
          <Button
            withLink
            text='Umów się na konsultacje'
            color='bg-white'
            link={'/rezerwacja'}
          />
        </div>
      </div>
    </section>
  );
};

export default FrontSection;
