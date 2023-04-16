import Pakiet from './Pakiet/pakiet.component';
import Button from '../../components/ui/button';
import PakietyWrapper from './pakietyWrapper';

const PakietyJoga = () => {
  return (
    <PakietyWrapper
      title={'Pakiety JOGA'}
      button={<Button withIcon color='bg-green-103' text='Umów się na sesje' />}
    >
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
    </PakietyWrapper>
  );
};

export default PakietyJoga;
