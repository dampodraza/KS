import React from 'react';
import Image from 'next/image';
import JogaPageImg from '../../public/images/joga-img.png';

const Joga = () => {
  return (
    <section className='flex bg-[#F8F3F0] flex-col  text-center '>
      <p className='text-4xl font-spartan-bold mb-2 text-center md:mb-16 md:text-6xl'>
        JOGA
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 md:items-center'>
        <div className='block'>
          <Image
            src={JogaPageImg}
            alt={`joga-img`}
            width={642}
            height={408}
            className='md:rounded-[35px]'
          />
        </div>
        <div>
          <p className='text-xl font-spartan-bold mt-6 mb-6 font-spartan-bold text-xl md:mt-14 md:text-3xl'>
            Joga nie zabiera czasu lecz go daje.
          </p>
          <p className='mx-5 mb-2 font-spartan-light text-sm leading-[25px] md:px-8'>
          Joga nie sprowadza się do trudnych niemalże akrobatycznych pozycji, 
          których nawet nie podejmujemy przez strach przed porażką. Joga nie jest 
          powiązana z religią, nie wzywa do wielbienia bóstw i nie ma na celu 
          oddania się duchowej ścieżce. Joga nie jest dyscypliną sportową, w której 
          należy rywalizować o to, kto lepiej, szybciej czy bardziej. Nie żyjemy by 
          ćwiczyć jogę ćwiczymy jogę, ale abyśmy mogli żyć - w zdrowiu, z łatwością, 
          radością i wdzięcznością. Joga nigdy nie zapomina że zdrowie musi 
          zacząć się od ciała. Możesz wziąć z jogi wszystko, to czego obecnie 
          potrzebujesz i na co jesteś gotowy. Jeśli potrzebujesz ukojenia w bólu
          – joga przyjdzie z pomocą. Jeśli chcesz odzyskać spokój – joga ci posłuży. 
          Jeśli jesteś gotowy do samoleczenie – joga ci pomoże. Jeśli potrzebujesz ruchu 
          – joga jest idealna. Jeśli chcesz poprawić trawienie – joga to ma. 
          Jeśli marzysz o zrzuceniu kilogramów – joga na to pozwoli. Jeśli chcesz 
          wieść wspaniałe życie seksualne – joga pokaże wskazówki. Jeśli 
          potrzebujesz poukładać myśli – joga to rozwiązanie. Jeśli chcesz 
          zrozumieć siebie – joga da możliwości. Jeśli zależy ci aby twoje narządy 
          prawidłowo pracowały – joga wie jak. Jeśli potrzebujesz znaleźć sens 
          – joga ci pomoże. Jeśli pragniesz czuć się dobrze – joga się sprawdzi. 
          Jeśli szukasz szczęścia – joga wskaże drogę.

         
         
          </p>
        </div>
      </div>
    </section>
  );
};

export default Joga;
