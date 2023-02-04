import React from 'react';
import IconBlock from '../IconBlock/iconblock.component';
import { coachingWsparcie, jogaZdrowie } from '../../content/coRobie';

const DlaczegoJaIcons = () => {
  return (
    // <section className="flex bg-[#F8F3F0] justify-center items-center md:pb-12">
    <section className='flex bg-[#F8F3F0] justify-center items-center'>
      <>
        <div className='flex flex-col justify-center items-centerm md:flex-row'>
          {coachingWsparcie.map(({ iconName, title, description }, i) => (
            <IconBlock
              key={i}
              iconName={iconName}
              title={title}
              description={description}
            />
          ))}
          {jogaZdrowie.map(({ iconName, title, description }, i) => (
            <IconBlock
              key={i}
              iconName={iconName}
              title={title}
              description={description}
            />
          ))}
        </div>
      </>
    </section>
  );
};

export default DlaczegoJaIcons;
