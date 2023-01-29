import React from "react";
import Image from "next/image";
import ilePotrzebujeImg from '../../../public/images/dlajasnosci/coaching/ilesesjipotrzebuje.jpg'

const ilePotrzebuje = () => {
  return (
    <>
      <Image
        src={ilePotrzebujeImg}
        alt={`coaching-ile-sesji-potrzebuje`}
        width={390}
        height={269}
        className="md:hidden"
      />
      <p className="font-spartan-light leading-[23px] mt-4 mb-4">
        Ilość sesji to kwestia bardzo indywidualna uzależniona od Twoich
        potrzeb, celów i zaangażowania. Są sytuacje, w których proces trwa 6
        sesji, czasami potrzeba jest 10 sesji, a niekiedy nawet więcej. Z mojego
        doświadczenia wynika, że klient czuje moment, w którym dostał to czego
        oczekiwał. Bywa, że jedna sesja jest na tyle odkrywcza, że klient jest
        usatysfakcjonowany. Ważna jest jednak świadomość, że coaching dzieje się
        pomiędzy sesjami, to, czego klient doświadcza, co odkrywa, z czym się
        mierzy jest wynikiem pracy na sesjach.
      </p>
    </>
  );
};

export default ilePotrzebuje;
