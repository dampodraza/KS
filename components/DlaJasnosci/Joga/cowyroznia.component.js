import React from "react";
import Image from "next/legacy/image";

const CoWyroznia = () => {
  return (
    <>
      <Image
        src={"/images/dlajasnosci/joga/cowyroznia.jpg"}
        alt={`joga-gdzie-sesja`}
        width={390}
        height={248}
        layout="responsive"
      />
      <p className="font-spartan-light leading-[23px] mt-4 mb-4">
        Niezwykle ważnym czynnikiem dla mnie jest zdrowie. Moje zajęcia jogi nie
        postrzegają ciała jako konia wyścigowego, przekraczając granice i
        zmuszając do rywalizacji z innymi ciałami w kategorii rozciągliwości,
        prędkości i siły. Przywiązuje ogromną wagę do tego aby słuchać swojego
        ciała i podążać zanim próbując równoważyć, to czego w tym temacie
        pragnie umysł. Do każdej osoby podchodzę indywidualnie i holistycznie,
        dlatego zajęcia ze mną mają określony indywidualnie dopasowany schemat,
        nie są dla wszystkich, tylko dla ciebie.
      </p>
    </>
  );
};

export default CoWyroznia;
