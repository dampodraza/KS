import React from 'react';
import landingImgDesktop from '../../public/images/landing-desktop5.png';
import Button from '../ui/button2';
import Image from 'next/image';

const FrontSection = () => {
  return (
    <section>
      <div className='relative w-screen px-1'>
        <Image src={landingImgDesktop} alt='kasiaPodrazaLogo' />
        <div className='absolute left-[40%] top-[40%] max-w-[30%] -translate-x-1/2 -translate-y-1/2 transform text-center font-spartan-bold text-base lg:text-xl xl:text-2xl'>
          Nie zawsze możesz kontrolować to, co dzieje się na zewnątrz. <br />
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
