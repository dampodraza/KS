import React from "react";
import Image from "next/image";
import AccordionBlock from "../ui/accordionBlock";

const MojaHistoria = () => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-10">
      <p className="text-4xl font-spartan-bold mb-6 text-center">
        Moja historia
      </p>
      <div className="block">
        <Image
          src={"/images/kasia-img.png"}
          alt={`kasia-img`}
          width={390}
          height={330}
          layout="responsive"
        />
      </div>
      <p className="font-spartan-light mx-4 mt-4 mb-4">
        Pełna przygód i licznych zwrotów akcji historia o tym, jak ważne jest
        cieszyć się każdą chwilą swojego życia. Opowieść o dziewczynie tak
        normalnej, że aż podobnej do Ciebie. Z tą różnicą, że żyje za dwóch.
        Uświadomienie sobie tego doprowadziło mnie do jednego z najważniejszych
        odkryć w sobie. To był mój punkt zwrotny. Wiem teraz, że najlepszym
        sposobem na poznanie świata jest słuchanie tego, jak doświadczają go
        inni ludzie. Podróżuję przez życie jako wnikliwy obserwator, zbierając
        bogate doświadczenie i jednocześnie czerpiąc wiedzę z doświadczeń
        innych. Praca z ludźmi to ogromny przywilej i zaszczyt. To napełnia mnie
        miłością i jestem za to wdzięczna.
      </p>
      <div>
        <AccordionBlock
          header="Rodzina i wartości"
          content="  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget."
        />
        <AccordionBlock
          header="Kariera i pasja"
          content="asd"
          extra={
            <div className="block">
              <Image
                src={"/images/kasia-img.png"}
                alt={`kasia-img`}
                width={390}
                height={330}
                layout="responsive"
              />
            </div>
          }
        />
         <AccordionBlock
          header="Zmiany i zawody"
          content="  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget."
        />
         <AccordionBlock
          header="Zycie i miłość"
          content="  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget."
        />
         <AccordionBlock
          header="Cele i marzenia"
          content="  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget."
        />
      </div>
    </section>
  );
};

export default MojaHistoria;
