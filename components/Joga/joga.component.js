import React from "react";
import Image from "next/legacy/image";
import CalendarButton from "../ui/calendarButton";

const Joga = () => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-10">
      <p className="text-4xl font-spartan-bold mb-2 text-center md:mb-16 md:text-6xl">
        JOGA
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
        <div className="block">
          <Image
            src={"/images/joga-img.png"}
            alt={`joga-img`}
            width={390}
            height={278}
            layout="responsive"
            className="md:rounded-[35px]"
          />
        </div>
        <div>
          <p className="text-xl font-spartan-bold mt-6 mb-6">
            Joga nie zabiera czasu lecz go daje.
          </p>
          <p className="font-spartan-light mx-4">
            Kiedy uświadomisz sobie że życie jest darem, zdecyduj się na życie
            pełne sensu, życie z celem. By tylko ty masz ten talent, tą
            kreatywność, to serce i tylko ty możesz nadać temu znaczenie.
            Wykorzystaj dary, którymi zostałeś obdarzony, aby być w służbie, aby
            czynić rzeczy lepszymi. Wtedy powiesz dziękuje za to życie. Coaching
            jest dla Ciebie jeśli… sesja wygląda tak. Wtedy powiesz dziękuje za
            to życie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Joga;
