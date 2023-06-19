import Pakiet from './Pakiet/pakiet.component';
import Button from '../../components/ui/button';
import PakietyWrapper from './pakietyWrapper';
// return (md:bg-[#fff] md:px-16 md:py-12 md:rounded-2xl

const PakietyWsparcie = () => {
  return (
    <PakietyWrapper
      title={'Pakiety WSPARCIE'}
      button={<Button withIcon color='bg-blue-100' text='Umów się na sesje' withLink link='/rezerwacja'/>}
    >
      <Pakiet
        bgColor='bg-white'
        description={
          'To jest oferta jednej sesji wsparcia, która poszerzy perspektywę Twojego problemu, tak aby widoczne były różne jego rozwiązania.'
        }
        price='150'
        imgSrc='/images/pakiety/wsparcie/wsparcie-sesja.jpg'
      />
      <Pakiet
        bgColor='bg-grey-101'
        description={
          'To jest pakiet 10 sesji wsparcia podczas, których z uważnością i akceptacją spojrzysz na swoje życie z dystansu, odnajdując rozwiązania, które wcześniej nie były dostępne. '
        }
        price='1200'
        imgSrc='/images/pakiety/wsparcie/wsparcie-10sesji.jpg'
      />
      <Pakiet
        rounded='full'
        bgColor='bg-grey-102'
        description={
          'To jest oferta jednej sesji wsparcia dla osób będących w trudnej sytuacji życiowej, a chcących się z tą sytuacją zmierzyć, jak również z niej wydostać.'
        }
        price='0'
        imgSrc='/images/pakiety/wsparcie/wsparcie-trudna-sytuacja.png'
      />
    </PakietyWrapper>
  );
};

export default PakietyWsparcie;
