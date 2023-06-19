import React from 'react';
import landingImg from '../../public/images/landing-mobile.jpg';
import landingImgDesktop from '../../public/images/landing-desktop5.png';
import Image from 'next/image';
import Button from '../ui/button';

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
        <div className='absolute top-[40%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 max-w-[30%] text-center font-spartan-bold text-base lg:text-xl xl:text-2xl '>
          Nie zawsze możesz kontrolować to, co dzieje się na zewnątrz. <br></br>
          Ale zawsze możesz kontrolować to, co dzieje się w środku.
          <Button
            withLink
            text='Umów się na konsultacje'
            color='bg-white'
            link={'postLink'}
          />
        </div>
      </div>
    </section>
  );
};

export default FrontSection;
