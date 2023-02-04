import Pakiet from './Pakiet/pakiet.component';

const PakietyJoga = () => {
  return (
    <section className='flex flex-col bg-[#F8F3F0]  text-center '>
      <p className='mb-6 mb-16 text-center font-spartan-bold text-3xl'>
        Pakiety JOGA
      </p>
      <div className='grid grid-cols-1 text-center md:grid-cols-3'>
        <Pakiet
          bgColor='bg-green-101'
          description={
            'To jest oferta jednej sesji zdrowia, zawierającej dostosowaną do Ciebie lekcje jogi, medytacji i oddechu.'
          }
          price='50'
          imgSrc='/images/pakiety/joga/joga-sesja.jpg'
        />
        <Pakiet
          bgColor='bg-green-102'
          description={
            'To jest miesięczny pakiet zdrowia składający się z czterech sesji zdrowia, zawierających dostosowane do Ciebie lekcje jogi, medytacji i oddechu.'
          }
          price='180'
          imgSrc='/images/pakiety/joga/joga-1miesiac.jpg'
        />
        <Pakiet
          bgColor='bg-green-103'
          description={
            'To jest trzy miesięczny pakiet zdrowia składający się z 12 sesji zdrowia zawierających dostosowane do Ciebie lekcje jogi, medytacji i oddechu oraz konsultacje zdrowia pomiędzy sesjami.'
          }
          price='500'
          imgSrc='/images/pakiety/joga/joga-3miesiace.jpg'
        />
      </div>
    </section>
  );
};

export default PakietyJoga;
