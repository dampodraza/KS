import Pakiet from "./Pakiet/pakiet.component";

const PakietyWsparcie = () => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center ">
      <p className="text-3xl font-spartan-bold mb-6 text-center mb-16">
        Pakiety WSPARCIE
      </p>
      <div className="grid grid-cols-1 text-center md:grid-cols-3">
        <Pakiet
          bgColor="bg-white"
          description={
            "To jest oferta jednej sesji wsparcia, która poszerzy perspektywę Twojego problemu, tak aby widoczne były różne jego rozwiązania."
          }
          price="150"
          imgSrc="/images/pakiety/wsparcie/wsparcie-sesja.jpg"
        />
        <Pakiet
          bgColor="bg-grey-101"
          description={
            "To jest pakiet 10 sesji wsparcia podczas, których z uważnością i akceptacją spojrzysz na swoje życie z dystansu, odnajdując rozwiązania, które wcześniej nie były dostępne. "
          }
          price="1200"
          imgSrc="/images/pakiety/wsparcie/wsparcie-10sesji.jpg"
        />
        <Pakiet
          rounded="full"
          bgColor="bg-grey-102"
          description={
            "To jest ofert jednej sesji wsparcia dla osób będących w trudnej sytuacji życiowej, a chcących się z tą sytuacją zmierzyć, jak również z niej wydostać."
          }
          price="0"
          imgSrc="/images/pakiety/wsparcie/wsparcie-trudna-sytuacja.png"
        />
      </div>
    </section>
  );
};

export default PakietyWsparcie;
