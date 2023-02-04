import React, { useState, useEffect, useCallback } from 'react';
import { DotButton, PrevButton, NextButton } from './EmblaCarouselButtons';
import useEmblaCarousel from 'embla-carousel-react';

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

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
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const slidy = [
    {
      key: 1,
      text: 'Dzięki Kasi i sesjom coachingowym, zrealizowałam najważniejszy cel – wróciłam na rynek pracy po trzyletniej nieobecności. Na początku wcale nie było łatwo, jednak z każdym spotkaniem czułam, że coś się zmienia, że zmieniam się ja i tym samym moje podejście do otaczającego świata i wyzwań. W trakcie całego procesu miałam poczucie bezpieczeństwa, dzięki czemu mogłam otworzyć się na zmianę bez obaw przed oceną. Kasia potrafi też trafnie zadawać pytania, wspierać i motywować do działania. Nie ocenia, stara się zrozumieć i wydobyć z drugiej osoby, to co jest w niej najlepsze. Dzięki Kasi znalazłam pracę, odzyskałam pewność siebie i dobyłam narzędzia do dalszej pracy nad sobą. To było wspaniałe doświadczenie i najlepsza inwestycja w przyszłość. Każdemu życzę takiego Coacha!',
      name: 'Katarzyna',
    },
    {
      key: 2,
      text: 'Rozmowy z Kasią to cudowny czas, w którym to ty i twoje marzenia jesteście najważniejsi. Kasia jest bardzo wrażliwa na potrzeby drugiego człowieka, a jednocześnie niezwykle wymagająca. Dzięki jej empatii ale i zdecydowaniu dzieje się magia: z każdym spotkaniem jesteś bliżej wyznaczonego celu, mimo że na początku wydaje się on nieosiągalny. Każdy powinien to przeżyć, żeby zrozumieć, że z odpowiednim coachem przy boku nie ma rzeczy niemożliwych.',
      name: 'Karolina',
    },
    {
      key: 3,
      text: 'Raczej sceptycznie nastawiona do coachingu oraz jego pochodnych z przyjemnością stwierdzam, że się myliłam. Spotkania z Kasią pozwoliły mi spokojnie poukładać sobie w głowie otaczający mnie chaos. Nadałam odpowiednią wartość zadaniom, które spotykają mnie na co dzień. Mogłam uporządkować swoje marzenia oraz znaleźć realne drogi do ich realizacji. Kasia to wytrwała i empatyczna towarzyszka, którą byłam ze mną podczas odkrywania swoich pragnień i potrzeb. Jej trafne pytania i spostrzeżenia pokazywały, że mogę świadomie kierować swoimi zasobami, talentami i umiejętnościami. Warto dowiedzieć się więcej o sobie i swoich możliwościach. Serdecznie polecam sesje z Kasią',
      name: 'Anna',
    },
    {
      key: 4,
      text: 'Sesje z Kasią dały mi kopa do działania. Udało nam się przepędzić czarne chmury znad głowy i rozjaśnić moją rzeczywistość, dzięki czemu ruszyłam z miejsca i w końcu widzę światełko w tunelu. Powróciła też chęć, radość i motywacja, której od bardzo dawna mi brakowało. Kasia jest bardzo sympatyczna, ciepła i godna zaufania. Co więcej jest profesjonalna w swoim fachu - nastawiona na pomoc i osiągnięcie założonych celów. Dziękuję Ci Kasiu za pojawienie się na mojej drodze! Gdyby nie Ty, kto wie ile bym jeszcze tkwiła w miejscu. Dziękuję z całego serca!',
      name: 'Sylwia',
    },
    {
      key: 5,
      text: 'Nigdy nie wiedziałam na czym do końca polega praca coacha. Zawsze myślałam, że dotyczy tylko rozwoju w strefie zawodowym. Bardzo się myliłam. Kiedy zgłosiłam się do Kasi miałam problemy z wyrażaniem swoich emocji i mówieniem o problemach. Kasia pomogła mi sobie z tym poradzić, zgodnie z moimi przekonaniami i możliwościami. Dzięki niej nauczyłam się szukać rozwiązań, zadawać sobie odpowiednie pytania na temat tego co czuje i jak to przekazać. Przez całą sesję Kasia mnie mobilizowała i wspierała i do dziś słyszę jej podstawowe pytanie kiedy tylko pojawiają się problemy.',
      name: 'Ania',
    },
  ];
  return (
    <>
      <div className='embla'>
        <div className='embla__viewport' ref={viewportRef}>
          <div className='embla__container'>
            {slidy.map((slajd) => (
              <div className='embla__slide' key={slajd.key}>
                <div className='embla-slide-text'>
                  {slajd.text}
                  <br></br>
                  <span className='font-bold'>{slajd.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className='embla__dots'>
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
