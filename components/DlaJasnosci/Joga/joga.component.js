import React from "react";
import Image from "next/image";
import AccordionBlock from "../../ui/accordionBlock";
import CalendarButton from "../../ui/calendarButton";


const DlaJasnosciJoga = () => {
  return (
    <section className="flex bg-[#F8F3F0] justify-center items-center pt-12 pb-10">
      <div className="md:px-96 flex flex-col items-center ">
        <p className="text-3xl font-spartan-bold mb-2 ">Dla jasności</p>
        
        <AccordionBlock
          header="Ile trwają zajęcia jogi?"
          content="Kiedy uświadomisz sobie że życie jest darem, zdecyduj się na życie pełne sensu, życie z celem. "
        />
        <AccordionBlock
          header="Jak to wygląda?"
          content="Kiedy uświadomisz sobie że życie jest darem, zdecyduj się na życie pełne sensu, życie z celem. "
        />
        <AccordionBlock
          header="Ile to kosztuje?"
          content="Kiedy uświadomisz sobie że życie jest darem, zdecyduj się na życie pełne sensu, życie z celem. "
        />
        <AccordionBlock
          header="Gdzie odbywa się sesja?"
          content="Kiedy uświadomisz sobie że życie jest darem, zdecyduj się na życie pełne sensu, życie z celem. "
        />
        <AccordionBlock
          header="Ile sesji potrzebuje?"
          content="Kiedy uświadomisz sobie że życie jest darem, zdecyduj się na życie pełne sensu, życie z celem. "
        />
        <AccordionBlock
          header="Co mogę zyskać?"
          content="Kiedy uświadomisz sobie że życie jest darem, zdecyduj się na życie pełne sensu, życie z celem. "
        />
        <AccordionBlock
          header="Co mogę stracić?"
          content="Kiedy uświadomisz sobie że życie jest darem, zdecyduj się na życie pełne sensu, życie z celem. "
        />
        <AccordionBlock
          header="Czym wyrózniają się zajęcia jogi?"
          content="Kiedy uświadomisz sobie że życie jest darem, zdecyduj się na życie pełne sensu, życie z celem. "
        />
        <CalendarButton bgColor="bg-blue-100" />
      </div>
    </section>
  );
};

export default DlaJasnosciJoga;
