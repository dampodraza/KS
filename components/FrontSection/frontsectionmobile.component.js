import React from 'react';
import landingImg from '../../public/images/landing-mobile.png';
import Button from '../ui/button2';
import Image from 'next/image';

const FrontSectionMobile = () => {
  return (
    <section>
      <div className='relative mt-[-225px]  w-screen'>
          <Image src={landingImg} alt='kasiaPodrazaLogo' />
          <div className='absolute left-[14%] top-[200px] max-w-[280px] text-center font-spartan-bold text-[20px] leading-[22px] z-0'>
            <Button
              withLink
              text='Umów się na konsultacje'
              color='bg-white'
              link={'/rezerwacja'}
            />
          </div>
          <p className='absolute right-[37%] right-0 mr-auto ml-auto top-[212px] max-w-[280px] mt-20 text-center font-marseille-regular text-[17px] leading-[22px]'>
            Nie zawsze możesz kontrolować <br></br>to, co dzieje się na zewnątrz. <br></br>
            Ale zawsze możesz  kontrolować,<br></br> to, co dzieje się w środku.
          </p>
    
        </div>
    </section>
  );
};

export default FrontSectionMobile;
