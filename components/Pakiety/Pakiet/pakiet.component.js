import React from 'react';
import Image from 'next/image';

const Pakiet = ({ description, price, imgSrc, bgColor, rounded }) => {
  return (
    <div>
      <div className='flex flex-row items-center mb-10 mr-5'>
        <div className='flex w-1/2 justify-center'>
          <div className='relative'>
            <div
              className={`${
                rounded === 'full' ? 'rounded-[100px]' : 'rounded-2xl'
              } absolute ${bgColor} w-[117px] h-[173px] bottom-[16px] right-[16px]`}
            ></div>
            <div
              className={`${
                rounded === 'full' ? 'rounded-[100px]' : 'rounded-2xl'
              } relative overflow-hidden w-[117px] h-[173px]`}
            >
              <Image src={imgSrc} alt='image' width={117} height={173} />
            </div>
          </div>
        </div>

        <div className='flex flex-col w-1/2 '>
          <p className='font-josefin-italic mb-4 text-left leading-[18px]'>
            {description}
          </p>
          <p className='text-xl font-spartan-bold text-left'>{price} zł</p>
        </div>
      </div>
    </div>
  );
};

export default Pakiet;
