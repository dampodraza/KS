import React from 'react';
import Image from 'next/image';
import QuoteIcon from '../../public/icons/quote.svg';

const Quote = () => {
  return (
    // <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-8 pb-10 md:pt-24 md:pb-32 ">
    <section className='flex flex-col bg-[#F8F3F0]  text-center'>
      <div className='text-centermb-6'>
        {' '}
        <div className='mb-4 flex justify-center md:mb-8 '>
          <Image src={QuoteIcon} alt='quote' width={50} />
        </div>
      </div>
      <p className='mb-6 text-center font-spartan-bold text-2xl md:hidden md:font-josefin-italic md:text-3xl'>
        Nikt nie jest tobą <br></br>i to jest twoja supermoc.
      </p>
      <p className='mb-6 hidden text-center font-spartan-bold text-2xl md:block md:font-josefin-italic md:text-3xl'>
        Nikt nie jest tobą i to jest twoja supermoc.
      </p>
    </section>
  );
};

export default Quote;
