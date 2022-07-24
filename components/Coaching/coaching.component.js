import React from "react";
import Image from "next/image";
import CalendarButton from '../ui/calendarButton'
const Coaching = () => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-20">
      <p className="text-5xl font-spartan-bold mb-6 text-center">COACHING</p>
      <div className="block">
        <Image
          src={"/images/coaching-img.jpeg"}
          alt={`coaching-img`}
          width={390}
          height={278}
          layout="responsive"
        />
      </div>
      <p className="text-2xl mt-6 mb-6">
        Nie tylko robić, ale osiągać.<br></br> Co chcesz osiągnąć?
      </p>
      <p className="font-josefin-italic mx-10">
        Kiedy uświadomisz sobie że życie jest darem, zdecyduj się na życie pełne
        sensu, życie z celem. By tylko ty masz ten talent, tą kreatywność, to
        serce i tylko ty możesz nadać temu znaczenie. Wykorzystaj dary, którymi
        zostałeś obdarzony, aby być w służbie, aby czynić rzeczy lepszymi. Wtedy
        powiesz dziękuje za to życie. Coaching jest dla Ciebie jeśli… sesja
        wygląda tak To niesamowita sprawa być człowiekiem. Nie określają Ci
        Twoje doświadczenia z dzieciństwa. Nie możesz się definiować ani dać im
        kształtować. Najtrudniejsze chwile to te w których nie mogę się
        odnaleźć, kiedy nie słyszę własnego myślenia a na moje wypowiedzi i
        myśli maja wpływ ludzie. Tak łatwi się w tym wszystkim zgubić i
        zapomnieć o sobie. Jeśli jesteś szczęśliwy to dzielisz się tym
        szczęściem z innymi i zostawiasz ten świat lepszym.
      </p>
      <CalendarButton bgColor="bg-yellow-100"/>
    </section>
  );
};

export default Coaching;
