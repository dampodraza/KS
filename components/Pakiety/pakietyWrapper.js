import React from 'react';
import Button from '../../components/ui/button';

const PakietyWrapper = ({ title, children, button }) => {
  return (
    <section className='flex flex-col bg-[#F8F3F0]  text-center md:rounded-2xl md:bg-[#fff] px-8 py-4 xl:px-16 xl:py-12'>
      <p className='mb-12 text-center font-spartan-bold text-3xl md:mb-16'>
        {title}
      </p>
      <div className='grid grid-cols-1 text-center md:grid-cols-3'>
        {children}
      </div>
      {button}
    </section>
  );
};

export default PakietyWrapper;
