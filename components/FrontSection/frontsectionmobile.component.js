import React from 'react';
import landingImg from '../../public/images/landing-mobile.jpg';
import Button from '../ui/button2';
import Image from 'next/image';

const FrontSectionMobile = () => {
  return (
    <section>
      <div className='relative mt-[-225px]  w-screen'>
          <Image src={landingImg} alt='kasiaPodrazaLogo' />
          <p className='absolute left-0 right-0 mr-auto ml-auto top-[224px] max-w-[280px] text-center font-spartan-bold text-[17px] leading-[22px]'>
            Nie zawsze możesz kontrolować to, co dzieje się na zewnątrz. 
            Ale zawsze możesz  kontrolować, to, co dzieje się w środku.
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
    </section>
  );
};

export default FrontSectionMobile;
