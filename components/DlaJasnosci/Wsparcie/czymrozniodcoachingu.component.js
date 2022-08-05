import React from "react";
import Image from "next/image";

const CzymRozniOdCoaching = () => {
  return (
    <>
      <Image
        src={"/images/dlajasnosci/wsparcie/wsparcieacoaching.jpg"}
        alt={`wsparcie-czym-roznic-od-coaching`}
        width={390}
        height={227}
        layout="responsive"
      />
      <p className="font-spartan-light leading-[23px] mt-4 mb-4">
        Zarówno wsparcie jak i coaching nie są psychoterapią. Nie mają na celu
        sięgania do przeszłości, leczenia traum, diagnozowania zaburzeń i
        doszukiwania się przyczyn obecnego działania. Nie zakładają również
        żadnych chorób, ani zaburzeń klienta (dlatego nazywany jest klientem, a
        nie pacjentem). A w przypadku podejrzenia wystąpienia zaburzenia
        psychicznego zalecam kontakt z innym specjalistą. Coaching nie dopuszcza
        doradzania i wskazywania konkretnych ścieżek, do wszystkich rozwiązań
        klient dochodzi sam. W sesjach wsparcia możesz liczyć na moje doradztwo
        w formie książek, filmów, analizy zdrowia zgodnie z wiedzą o jodze i
        ajurwedzie. Korzystając z bogactwa własnego doświadczenia pokaże Ci
        kilka możliwych dróg i rozwiązań. Wszystkie moje sesje są formą
        profesjonalnego wsparcia, w partnerskiej relacji i bezpiecznej
        atmosferze.
      </p>
    </>
  );
};

export default CzymRozniOdCoaching;
