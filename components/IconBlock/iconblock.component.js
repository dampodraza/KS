import React from 'react';
import Image from 'next/legacy/image';

const IconBlock = ({ iconName, title, description }) => {
  return (
    <div className='p-2 text-center'>
      <Image
        src={`/icons/${iconName}.png`}
        alt={iconName}
        width='50%'
        height='50%'
      />
      <p className='text-sm font-bold mb-2 mt-2'>{title}</p>
      <p className='text-sm px-5 max-w-[300px] font-josefin-italic'>
        {description}
      </p>
    </div>
  );
};

export default IconBlock;
