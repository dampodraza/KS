import React from 'react';
import Image from 'next/image';

const ileTrwaSesja = () => {
  return (
    <>
  <Image
                src={"/images/dlajasnosci/coaching/jaksieumowic.jpg"}
                alt={`coaching-jak-sie-umowic`}
                width={390}
                height={254}
                layout="responsive"
              />
              <p className="font-spartan-light leading-[23px] mt-4 mb-4">
                Po kliknięciu w kalendarz i zakupie sesji bądź pakietu lub
                programu sesji skontaktuję się z Tobą w ciągu 48 godzin.
                Wspólnie ustalimy dogodne dla nas terminy oraz formę spotkania –
                na żywo albo zdalnie (z punktu widzenia efektywności procesów,
                nie ma różnicy pomiędzy sesjami realizowanymi zdalnie
                czy osobiście. A wręcz, wbrew przekonaniom, sesje realizowane
                zdalnie są często bardziej efektywne, głębsze, odkrywcze dla
                Klienta. Brak możliwości zobaczenia się tworzy
                przestrzeń do większej intymności, szczerości. ) Po wstępnym
                kontakcie, przed pierwszym spotkaniem otrzymasz ankietę. Dzięki
                niej przygotujesz się do pierwszego, kontraktującego spotkania.
                Jeżeli zdecydujesz się na pracę ze mną, to zawrzemy kontrakt
                i ustalimy zasady współpracy.
              </p>
  </>
  )
  }


export default ileTrwaSesja;