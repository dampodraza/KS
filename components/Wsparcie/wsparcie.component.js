import React from 'react';
import Image from 'next/image';
import WsparcieImg from '../../public/images/wsparcie-img.jpeg';

const Wsparcie = () => {
  return (
    <section className='flex flex-col bg-[#F8F3F0]  text-center '>
      <p className='mb-2 text-center font-spartan-bold text-4xl md:mb-16 md:text-6xl'>
        WSPARCIE
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2  md:items-center'>
        <div className='block'>
          <Image
            src={WsparcieImg}
            alt={`wsparcie-img`}
            width={642}
            height={408}
            className='md:rounded-[35px]'
          />
        </div>
        <div>
          <p className='mt-6 mb-6 font-spartan-bold text-xl md:mt-14 md:text-3xl'>
            Każdy kryzys to ukryta szansa.
          </p>
          <p className='mx-5 mb-2 font-spartan-light text-sm leading-[25px] md:px-8'>
            Wierzę, że nie ma niczego z czego nie mógłbyś się podnieść. Perła
            nie powstaje podczas leżenia w uzdrowisku. Perła powstaje z wyzwań
            jakie stawia przed nami życie. To one ukształtowały osobę którą
            jesteś dzisiaj. Bo tak naprawdę najsilniejszy jesteś kiedy się
            rozpadasz. Potrzeba naprawdę silnej osoby żeby się rozsypać.
            Najsilniejsi ludzie pozwalają sobie płakać jak małe dzieci. Nie boją
            się też prosić o pomoc, bo wiedzą, że w życiu nie można być
            niezależnym. Nikt nie jest niezależny. Każdy potrzebuje kogoś lub
            czegoś w jakimkolwiek momencie życia. Możemy czuć się zdruzgotani
            okolicznościami w jakich się znajdujemy. Ale wewnątrz nas jest coś
            co sprawia, że na nowo powstajemy. Doświadczenia bólu, cierpienia i
            niepowodzenia przypominają nam, że istnieje w nas część, która jest
            silna. Trzeba ją tylko na nowo powołać do życia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Wsparcie;
