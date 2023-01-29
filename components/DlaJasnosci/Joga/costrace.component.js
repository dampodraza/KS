import React from "react";
import Image from "next/image";
import CoStraceJogaImg from '../../../public/images/dlajasnosci/joga/costrace.jpg'

const CoStrace = () => {
  return (
    <>
      <Image
        src={CoStraceJogaImg}
        alt={`joga-co-strace`}
        width={390}
        height={248}
        className="md:hidden"
      />
      <p className="font-spartan-light leading-[23px] mt-4 mb-4">
      Na pewno kilogramy i centymetry zbędnego ciała. Stracić możesz również poczucie bólu, sztywności i niewygody. Ciało podczas ćwiczeń pozbywa się również zbędnych nieczystości i toksyn. 
      </p>
    </>
  );
};

export default CoStrace;
