import React from 'react';
import IconBlock from '../IconBlock/iconblock.component';
import Image from 'next/image';
import Carousel from '../Carousel/carousel';
import { coachingWsparcie, jogaZdrowie } from '../../content/coRobie';
const DlaczegoJa2 = ({isMobile}) => {
    return (
        <section className="flex bg-[#F8F3F0] justify-center items-center">
          {isMobile && (
            <>
              <div className="flex flex-col justify-center items-center">
                {/* <div className="flex flex-row justify-center"> */}
                  {coachingWsparcie.map(({ iconName, title, description }, i) => (
                    <IconBlock
                      key={i}
                      iconName={iconName}
                      title={title}
                      description={description}
                    />
                  ))}
                {/* </div> */}
                {/* <div className="flex flex-row mb-10 justify-center"> */}
                  {jogaZdrowie.map(({ iconName, title, description }, i) => (
                    <IconBlock
                      key={i}
                      iconName={iconName}
                      title={title}
                      description={description}
                    />
                  ))}
                {/* </div> */}
                <div className="flex flex-row justify-center mt-10	">
                  <div>
                    {" "}
                    <img src="/icons/quote.svg" alt="quote" />
                  </div>
                </div>
                <div className="mb-10">
                  <Carousel />
                </div>
              </div>
            </>
          )}
          {!isMobile && (
            <div className="flex flex-row  space-x-40 px-40">
              <div className="flex flex-col text-2xl relative">
                <div className="absolute top-0 -left-16">
                  {" "}
                  <Image src="/images/quote.png" width="100" height="80" />
                </div>
                <span className="text-3xl z-50 font-josefin-italic leading-9">
                  Rozmowy z Kasią to cudowny czas, w którym to ty i twoje
                  marzenia jesteście najważniejsi. Kasia jest bardzo wrażliwa na
                  potrzeby drugiego człowieka, a jednocześnie niezwykle
                  wymagająca. Dzięki jej empatii ale i zdecydowaniu dzieje się
                  magia: z każdym spotkaniem jesteś bliżej wyznaczonego celu,
                  mimo że na początku wydaje się on nieosiągalny. Każdy powinien
                  to przeżyć, żeby zrozumieć, że z odpowiednim coachem przy boku
                  nie ma rzeczy niemożliwych.
                </span>
              </div>
              <div className="flex flex-col text-2xl relative">
                <div className="absolute top-0 -left-16">
                  {" "}
                  <Image src="/images/quote.png" width="100" height="80" />
                </div>
                <span className="text-3xl z-50 font-josefin-italic leading-9">
                  Rozmowy z Kasią to cudowny czas, w którym to ty i twoje
                  marzenia jesteście najważniejsi. Kasia jest bardzo wrażliwa na
                  potrzeby drugiego człowieka, a jednocześnie niezwykle
                  wymagająca. Dzięki jej empatii ale i zdecydowaniu dzieje się
                  magia: z każdym spotkaniem jesteś bliżej wyznaczonego celu,
                  mimo że na początku wydaje się on nieosiągalny. Każdy powinien
                  to przeżyć, żeby zrozumieć, że z odpowiednim coachem przy boku
                  nie ma rzeczy niemożliwych.
                </span>
              </div>
            </div>
          )}
        </section>
    )
}

export default DlaczegoJa2;