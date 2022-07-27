import Pakiet from "./Pakiet/pakiet.component";

const PakietyJoga = () => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-4">
        <p className="text-3xl font-spartan-bold mb-6 text-center mb-12">Pakiety JOGA</p>
      <Pakiet
        bgColor="bg-green-101"
        description={
          "To jest oferta jednej sesji zdrowia, zawierającej dostosowaną do Ciebie lekcje jogi, medytacji i oddechu."
        }
        price="50"
        imgSrc="/images/pakiety/joga-sesja.png"
      />
      <Pakiet
        bgColor="bg-green-102"
        description={
          "To jest miesięczny pakiet zdrowia składający się z czterech sesji zdrowia, zawierających dostosowane do Ciebie lekcje jogi, medytacji i oddechu."
        }
        price="180"
        imgSrc="/images/pakiety/joga-1miesiac.png"
      />
      <Pakiet
        bgColor="bg-green-103"
        description={
          "To jest trzy miesięczny pakiet zdrowia składający się z 12 sesji zdrowia zawierających dostosowane do Ciebie lekcje jogi, medytacji i oddechu oraz konsultacje zdrowia pomiędzy sesjami."
        }
        price="500"
        imgSrc="/images/pakiety/joga-3miesiace.png"
      />
    </section>
  );
};

export default PakietyJoga;
