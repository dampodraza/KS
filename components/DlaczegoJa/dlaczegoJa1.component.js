import React from 'react';
import Image from 'next/image';
import kasiaDrawing from '../../public/images/kasia-drawing.png';

const DlaczegoJa1 = () => {
    return (
        <section className="flex bg-[#F8F3F0] h-screen justify-center items-center">
        <div className="px-10 md:px-96 flex flex-col	items-center ">
          <p className="text-2xl	font-spartan-bold mb-8 ">
            Dlaczego właśnie ja?
          </p>
          <Image src={kasiaDrawing} alt="kasia-drawing" width={324} height={310}/>
          <p className="text-sm md:text-3xl font-josefin-italic pt-2 text-justify mb-10">
            Pracuje w oparciu o wiedzę psychologiczną, rozwojową,
            neurologiczną, medycynę wschodu, ze świadomością i ciałem,
            wykorzystując własne doświadczenie i traktując każdego człowieka
            jako oddzielną jednostkę, nie schemat według którego należy
            zastosować konkretne metody. Holistycznie przyglądam się różnym
            obszarom do pracy, nie naprawiając a wskazując możliwości. Moim
            zadaniem jest pokazać Ci, że odpowiedzi na wszystkie pytania, cele
            i problemy z którymi przychodzisz są w Tobie. Jako dziecko nie
            było wątpliwości, że magia istnieje. Zanurzyłeś się w świecie
            cudów i niesamowitych możliwości. Ale jako dorośli dajemy się
            wciągnąć w rozwiązywanie problemów i po prostu przetrwanie z
            chwili na chwilę, cały czas zapominając o magii życia. Cuda dzieją
            się cały czas, zwłaszcza we wszystkich tych małych rzeczach, które
            tak łatwo przeoczyć. Rozpoznawaj magię i błogosławieństwa, które
            otaczają cię każdego dnia. Na moich sesjach dzieje się magia.
          </p>
        </div>
      </section>
    )
}

export default DlaczegoJa1;