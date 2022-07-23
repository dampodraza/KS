// import React, { useState, useEffect, useCallback } from "react";
// import { PrevButton, NextButton } from "./EmblaCarouselButtons";
// import useEmblaCarousel from "embla-carousel-react";
// // import "./css/embla.css";

// const EmblaCarousel = ({ slides }) => {
//   const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
//   const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
//   const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

//   const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
//   const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

//   const onSelect = useCallback(() => {
//     if (!embla) return;
//     setPrevBtnEnabled(embla.canScrollPrev());
//     setNextBtnEnabled(embla.canScrollNext());
//   }, [embla]);

//   useEffect(() => {
//     if (!embla) return;
//     onSelect();
//     embla.on("select", onSelect);
//   }, [embla, onSelect]);

//   return (
//     <>
//       <div className="embla">
//         <div className="embla__viewport" ref={viewportRef}>
//           <div className="embla__container">
//             {slides.map((index) => (
//               <div className="embla__slide" key={index}>
//                 <div
//                   className="slide-text"
//                 //   style={{ textAlign: "center", padding: "0 50px" }}
//                 >
//                   Rozmowy z Kasią to cudowny czas, w którym to ty i twoje
//                   marzenia jesteście najważniejsi. Kasia jest bardzo wrażliwa na
//                   potrzeby drugiego człowieka, a jednocześnie niezwykle
//                   wymagająca. Dzięki jej empatii ale i zdecydowaniu dzieje się
//                   magia: z każdym spotkaniem jesteś bliżej wyznaczonego celu,
//                   mimo że na początku wydaje się on nieosiągalny. Każdy powinien
//                   to przeżyć, żeby zrozumieć, że z odpowiednim coachem przy boku
//                   nie ma rzeczy niemożliwych.
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
//         <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
//       </div>
//     </>
//   );
// };

// export default EmblaCarousel;

import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div  className="embla-slide-text">
                Rozmowy z Kasią to cudowny czas, w którym to ty i twoje
                   marzenia jesteście najważniejsi. Kasia jest bardzo wrażliwa na
                   potrzeby drugiego człowieka, a jednocześnie niezwykle
                   wymagająca. Dzięki jej empatii ale i zdecydowaniu dzieje się
                   magia: z każdym spotkaniem jesteś bliżej wyznaczonego celu,
                   mimo że na początku wydaje się on nieosiągalny. Każdy powinien
                   to przeżyć, żeby zrozumieć, że z odpowiednim coachem przy boku
                   nie ma rzeczy niemożliwych.
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;

