import React from "react";
import Image from "next/image";
import CalendarButton from "../ui/calendarButton";
const Coaching = () => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-10">
      <p className="text-4xl font-spartan-bold mb-4 text-center">COACHING</p>
      <div className="block">
        <Image
          src={"/images/coaching-img.png"}
          alt={`coaching-img`}
          width={390}
          height={278}
          layout="responsive"
        />
      </div>
      <p className="text-xl font-spartan-bold mt-6 mb-6">
        Nie tylko robić, ale osiągać.<br></br> Co chcesz osiągnąć?
      </p>
      <p className="font-spartan-light mx-5 leading-[26px]">
        Jako dziecko nie było wątpliwości, że magia istnieje. Zanurzaliśmy się w
        świecie cudów i niesamowitych możliwości. Ale jako dorośli dajemy się
        wciągnąć w rozwiązywanie problemów i po prostu przetrwanie z chwili na
        chwilę, cały czas zapominając o magii życia. Cuda dzieją się cały czas,
        podczas moich sesji także. Z góry zakładam, że klient jest doskonały.
        Pracuję na Twoich zasobach wierząc, że masz w sobie wszystko czego
        potrzebujesz, aby osiągnąć to czego pragniesz.
      </p>
     </section>
  );
};

export default Coaching;
