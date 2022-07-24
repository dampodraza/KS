import Pakiet from "./Pakiet/pakiet.component";

const PakietyCoaching = () => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-20">
        <p className="text-5xl font-spartan-bold mb-6 text-center mb-20">Pakiety COACHING</p>
      <Pakiet
        bgColor="bg-pink-100"
        description={
          "To jest oferta jednej sesji coachingowej trwającej 60-90 minut. Sesja odbywa się online lub w dogodnym dla Ciebie miejscu."
        }
        price="200"
        imgSrc="/images/pakiety/coaching-sesja.png"
      />
      <Pakiet
        bgColor="bg-green-900"
        description={
          "To jest propozycja 7 sesji coachingowych trwających 60-90 minut. Sesje odbywą się online lub w dogodnym dla Ciebie miejscu."
        }
        price="1200"
        imgSrc="/images/pakiety/coaching-3miesiace.png"
      />
      <Pakiet
        bgColor="bg-yellow-100"
        description={
          "To jest oferta 14 sesji coachingowych trwających 60-90 minut. Sesje odbywą się online lub w dogodnym dla Ciebie miejscu."
        }
        price="2000"
        imgSrc="/images/sesja.png"
      />
      <Pakiet
        bgColor="bg-green-100"
        description={
          "To jest oferta jednej sesji coachingowej dla osób 60+. Sesja trwa 60-90 minut. Odbywa się ona online lub w dogodnym dla Ciebie miejscu."
        }
        price="0"
        imgSrc="/images/pakiety/coaching-senior.png"
      />
      <Pakiet
        rounded="full"
        bgColor="bg-blue-100"
        description={
          "To jest propozycja jednej sesji coachingowej skierowanej dla młodzieży do 20 roku życia. Sesja trwa 60-90 minut,  odbywa się online lub w dogodnym dla Ciebie miejscu."
        }
        price="50"
        imgSrc="/images/pakiety/coaching-mlodziez.png"
      />
      <Pakiet
        rounded="full"
        bgColor="bg-orange-100"
        description={
          "To jest ofert jednej sesji coachingowej dla osób będących w trudnej sytuacji życiowej. Sesja trwa 60-90 minut,  odbywa się online lub w dogodnym dla Ciebie miejscu."
        }
        price="0"
        imgSrc="/images/pakiety/coaching-trudna-sytuacja.png"
      />
    </section>
  );
};

export default PakietyCoaching;
