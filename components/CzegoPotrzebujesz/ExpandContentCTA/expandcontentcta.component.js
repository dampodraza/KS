import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../ui/button';
import { isMobile } from 'react-device-detect';

const ExpandContentCTA = ({
  title,
  buttonText,
  textColor,
  bgColor,
  contentList,
  name,
}) => {
  const [contentExpanded, setExpanded] = useState(false);

  const expandContent = () => {
    setExpanded(!contentExpanded);
  };

  return (
    <div className='rounded-2xl bg-[#fff] px-8 py-6 xl:px-16 xl:py-12 '>
      <div className='text-center lg:grid lg:grid-cols-1'>
        <p className={`text-5xl md:text-4xl lg:text-4xl xl:text-5xl ${textColor} mb-4`}>
          {title}
        </p>
        <div className='flex justify-center md:hidden'>
          <Image
            src={
              contentExpanded ? '/icons/arrow-up.svg' : '/icons/arrow-down.svg'
            }
            className='mb-'
            onClick={expandContent}
            alt={`arrow-expand-${name}`}
            width={'23'}
            height={'12'}
          />
        </div>

        {contentExpanded && (
          <ul className='mt-3 font-spartan'>
            {contentList.map((item) => (
              <li key={item + name}>{item}</li>
            ))}
          </ul>
        )}
        {!isMobile && (
          <ul className='mt-3 font-spartan'>
            {contentList.map((item) => (
              <li key={item + name}>{item}</li>
            ))}
          </ul>
        )}
        <div className='z-10'>
          <Button
            color={bgColor}
            text={buttonText}
            withLink
            link={`/${name}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpandContentCTA;
