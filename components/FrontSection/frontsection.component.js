import React from 'react';
import landingImg from '../../public/images/landing-mobile.jpg';
import landingImgDesktop from '../../public/images/landing-desktop5.jpg';
import Image from 'next/image';

const FrontSection = () => {
  return (
    <section>
      <div className='relative mt-[-225px] h-screen w-screen md:hidden'>
        <Image src={landingImg} alt='podobroLogo' />
        <p className='absolute top-[215px] left-4 max-w-[230px] text-center font-spartan-bold text-[20px] leading-[22px]'>
          Nie zawsze możesz kontrolować to, co dzieje się na zewnątrz. 
          Ale zawsze możesz  kontrolować, to, co dzieje się w środku.
        </p>
      </div>
      <div className='relative hidden h-screen w-screen px-1 md:block'>
        <Image src={landingImgDesktop} priority alt='podobroLogo' />
        <p className='absolute top-[40%] left-28 max-w-[480px] text-center font-spartan-bold text-[30px] leading-[35px]'>
          Nie zawsze możesz kontrolować to, co dzieje się na zewnątrz. 
        </p>
        <p className='absolute top-[40%] right-28 max-w-[450px] text-center font-spartan-bold text-[30px] leading-[35px]'>
          Ale zawsze możesz konasdtrolować to, co dzieje się w środku.
        </p>
      </div>
    </section>
  );
};

export default FrontSection;
