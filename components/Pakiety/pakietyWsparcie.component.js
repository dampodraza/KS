import Pakiet from "./Pakiet/pakiet.component";

const PakietyWsparcie = () => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-32">
      <p className="text-5xl font-spartan-bold mb-6 text-center mb-20">
        Pakiety WSPARCIE
      </p>
      <Pakiet
        bgColor="bg-white"
        description={
          "To jest oferta jednej sesji wsparcia trwającej 60-90 minut. Sesja odbywa się online lub w dogodnym dla Ciebie miejscu."
        }
        price="150"
        imgSrc="/images/pakiety/wsparcie-sesja.png"
      />
      <Pakiet
        bgColor="bg-grey-101"
        description={
          "To jest propozycja 10 sesji wsparcia trwających 60-90 minut. Sesje odbywą się online lub w dogodnym dla Ciebie miejscu."
        }
        price="1200"
        imgSrc="/images/pakiety/wsparcie-10sesji.png"
      />
      <Pakiet
        rounded="full"
        bgColor="bg-grey-102"
        description={
          "To jest ofert jednej sesji coachingowej dla osób będących w trudnej sytuacji życiowej. Sesja trwa 60-90 minut,  odbywa się online lub w dogodnym dla Ciebie miejscu."
        }
        price="0"
        imgSrc="/images/pakiety/wsparcie-trudna-sytuacja.png"
      />
    </section>
  );
};

export default PakietyWsparcie;
