import React from "react";
import Image from "next/legacy/image";

const JakWygladaSesja = () => {
  return (
    <>
      <Image
        src={"/images/dlajasnosci/joga/jakwyglada.png"}
        alt={`joga-jak-wyglada-sesja`}
        width={390}
        height={237}
        layout="responsive"
      />
      <p className="font-spartan-light leading-[23px] mt-4 mb-4">
        Zanim przejdziemy do zajęć spotkamy się aby porozmawiać o Tobie, Twoim
        stanie zdrowia, tym czego potrzebujesz i jak chcesz się czuć. To pozwoli
        mi stworzyć indywidualny projekt ćwiczeń, technik oddechowych i
        medytacji dopasowany do Twoich potrzeb. W kolejnym kroku umawiamy się
        już na zajęcia. Sesja jogi rozpoczyna się zatrzymania i intencji.
        Następnie kierujemy uwagę na pranayamy czyli techniki oddechowe. Potem
        skupiamy się na rozgrzaniu ciała - mięśni i stawów. Aby płynnie przejść
        do asan czyli pozycji jogowych dopasowanych do Twoich potrzeb i
        możliwości. Kolejnym elementem jest joga nidra czyli głęboka relaksacja,
        a następnie wspierająca Cię medytacja. Na koniec podsumujemy Twoje
        samopoczucie, nastawienie, postępy i kondycje Twojego ciała i umysłu. <br></br>
        To, co istotne to, że praktyka jogi nie kończy się wraz z zakończeniem
        sesji na macie, ale jej efekty i korzyści odczuwalne są głównie pomiędzy
        zajęciami.
      </p>
    </>
  );
};

export default JakWygladaSesja;
