import Pakiet from './Pakiet/pakiet.component';

const PakietyCoaching = () => {
  return (
    <section className='bg-[#F8F3F0]'>
      <p className='mb-16 text-center font-spartan-bold text-3xl'>
        Pakiety COACHING
      </p>
      <div className='grid grid-cols-1 text-center md:grid-cols-3'>
        <Pakiet
          bgColor='bg-pink-100'
          description={
            'To jest oferta jednej sesji coachingowej podczas której skupimy się na Tobie i Twoich potrzebach.'
          }
          price='200'
          imgSrc='/images/pakiety/coaching/coaching-sesja.jpg'
        />
        <Pakiet
          bgColor='bg-green-900'
          description={
            'To jest proces coachingowy trwający 3 miesiące. Zawiera on 7 sesji coachingowych, zadania rozwojowe, oraz moje wsparcie pomiędzy sesjami. '
          }
          price='1200'
          imgSrc='/images/pakiety/coaching/coaching-3miesiace.jpg'
        />
        <Pakiet
          bgColor='bg-yellow-100'
          description={
            'To jest program coachingowy trwający 6 miesięcy. Zawiera on 14 sesji coachingowych., zadania rozwojowe, moje wsparcie pomiędzy i po sesjach.'
          }
          price='2000'
          imgSrc='/images/pakiety/coaching/coaching-6miesiecy.jpg'
        />
        <Pakiet
          bgColor='bg-green-100'
          description={
            'To jest oferta jednej sesji coachingowej dla osób w wieku 60+, które potrzebują zmian i chcą wprowadzić swoje cele w życie. '
          }
          price='0'
          imgSrc='/images/pakiety/coaching/coaching-senior.jpg'
        />
        <Pakiet
          rounded='full'
          bgColor='bg-blue-100'
          description={
            'To jest propozycja jednej sesji coachingowej skierowanej dla młodzieży do 21 roku szukającej celu, mierzącej się z problemami i dylematami. '
          }
          price='50'
          imgSrc='/images/pakiety/coaching/coaching-mlodziez.png'
        />
        <Pakiet
          rounded='full'
          bgColor='bg-orange-100'
          description={
            'To jest ofert jednej sesji coachingowej dla osób będących w trudnej sytuacji życiowej, a chcących się z tą sytuacją zmierzyć, jak również z niej wydostać.'
          }
          price='0'
          imgSrc='/images/pakiety/coaching/coaching-trudna-sytuacja.png'
        />
      </div>
    </section>
  );
};

export default PakietyCoaching;
