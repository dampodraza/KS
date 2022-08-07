import Pakiet from "./Pakiet/pakiet.component";

const PakietyJoga = () => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center ">
        <p className="text-3xl font-spartan-bold mb-6 text-center mb-10">Pakiety JOGA</p>
      <Pakiet
        bgColor="bg-green-101"
        description={
          "To jest oferta jednej sesji zdrowia, zawierającej dostosowaną do Ciebie lekcje jogi, medytacji i oddechu."
        }
        price="50"
        imgSrc="/images/pakiety/joga/joga-sesja.jpg"
      />
      <Pakiet
        bgColor="bg-green-102"
        description={
          "To jest miesięczny pakiet zdrowia składający się z czterech sesji zdrowia, zawierających dostosowane do Ciebie lekcje jogi, medytacji i oddechu."
        }
        price="180"
        imgSrc="/images/pakiety/joga/joga-1miesiac.jpg"
      />
      <Pakiet
        bgColor="bg-green-103"
        description={
          "To jest trzy miesięczny pakiet zdrowia składający się z 12 sesji zdrowia zawierających dostosowane do Ciebie lekcje jogi, medytacji i oddechu oraz konsultacje zdrowia pomiędzy sesjami."
        }
        price="500"
        imgSrc="/images/pakiety/joga/joga-3miesiace.jpg"
      />
    </section>
  );
};

export default PakietyJoga;
