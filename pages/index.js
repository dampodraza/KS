import React, { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen.ts";
import CzegoPotrzebujesz from "../components/CzegoPotrzebujesz/czegopotrzebujesz.component";
import Coaching from "../components/Coaching/coaching.component";
import Wsparcie from "../components/Wsparcie/wsparcie.component";
import Joga from "../components/Joga/joga.component";
import dynamic from "next/dynamic";
import PakietyCoaching from "../components/Pakiety/pakietyCoaching.component";
import PakietyWsparcie from "../components/Pakiety/pakietyWsparcie.component";
import PakietyJoga from "../components/Pakiety/pakietyJoga.component";
import MojaHistoria from "../components/MojaHistoria/mojahistoria.component";
const PoczytajPosluchaj = dynamic(() =>
  import("../components/PoczytajPosluchaj/poczytajposluchaj.component")
);
import Quote from "../components/Quote/quote.component";
import DlaczegoJa2 from "../components/DlaczegoJa/dlaczegoJa2.component";
import DlaczegoJa1 from "../components/DlaczegoJa/dlaczegoJa1.component";
const DlaJasnosciCoaching = dynamic(() =>
  import("../components/DlaJasnosci/Coaching/coaching.component")
);
import landingImg from "../public/images/kk6.png";
import landingImgDesktop from "../public/images/landing-desktop.jpg";

import DlaJasnosciWsparcie from "../components/DlaJasnosci/Wsparcie/wsparcie.component";
import DlaJasnosciJoga from "../components/DlaJasnosci/Joga/joga.component";
import useOnScreen from "../hooks/useOnScreen.ts";
import Layout from './layout'

export default function Home({ postDesc, postImage, postTitle, postLink }) {
  const isMobile = useCheckMobileScreen(800);
  const DlaJasnosciCoachingRef = useRef();
  const footerRef = useRef();
  const footerRefValue = useOnScreen(footerRef);
  const dlaJasnosciCoachingRefValue = useOnScreen(DlaJasnosciCoachingRef);
  const [isDlaJasnosciCoachingRef, setIsDlaJasnosciCoachingRef] =
    useState(false);
  const [isFooterRef, setIsFooterRef] = useState(false);
  const [open, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true)
  }

  useEffect(() => {
    if (isDlaJasnosciCoachingRef) {
      return;
    }
    if (!isDlaJasnosciCoachingRef) {
      setIsDlaJasnosciCoachingRef(dlaJasnosciCoachingRefValue);
    }
  }, [dlaJasnosciCoachingRefValue]);

  useEffect(() => {
    if (isFooterRef) {
      return;
    }
    if (!isFooterRef) {
      setIsFooterRef(footerRefValue);
    }
  }, [footerRefValue]);
  return (
      <Layout>
        <section>
          {isMobile ? (
            <div className="relative w-screen h-screen mt-[-239px]">
              <Image
                src={landingImg}
                priority
                layout="fill"
                objectFit="cover"
                objectPosition={"right"}
                alt="podobroLogo"
              />
              <p className="absolute text-[20px] top-[215px] left-4 max-w-[230px] text-center font-spartan-bold leading-[22px]">
                Nie zawsze możesz kontrolować to, co dzieje się na zewnątrz. 
                Ale zawsze możesz  kontrolować, to, co dzieje się w środku.
              </p>
            </div>
          ) : (
            <div className="relative w-screen h-screen mt-[-200px]">
              <Image
                src={landingImgDesktop}
                priority
                layout="fill"
                objectFit="cover"
                alt="podobroLogo"
              />
              <p className="absolute text-[30px] top-1/2 left-28 max-w-[450px] text-center font-josefin-italic leading-[30px]">
                Nie zawsze możesz kontrolować to, co dzieje się na zewnątrz. 
              </p>
              <p className="absolute text-[30px] top-1/2 right-28 max-w-[450px] text-center font-josefin-italic leading-[30px]">
              Ale zawsze możesz  kontrolować, to, co dzieje się w środku.
              </p>
            </div>
          )}
        </section>
        <section className="flex bg-[#F8F3F0] justify-center items-center pt-20 md:h-screen">
          <div className="px-10 md:px-40 flex flex-col	items-center ">
            <p className="text-3xl md:text-6xl  md:leading-[60px] text-center font-spartan-bold pb-8 md:pb-20">
              Świat potrzebuje takich ludzi jak Ty.<br></br>A Ty potrzebujesz
              takich ludzi jak ja.
            </p>
            <p className="text-base md:text-4xl text-center leading-[26px] font-spartan-light md:font-josefin-italic">
              Wierzę, że każdy z nas ma potencjał do tworzenia zmian, które
              chcemy widzieć w świecie. Ale zbyt często utknęliśmy, czując, że
              nie możemy. Chcę to zmienić.<br></br>
              <br></br> Świat potrzebuje ludzi takich jak ty. Ludzi obdarzonych
              współczuciem i pragnieniem zmiany. Ludzi, którzy widzą problem i
              szukają rozwiązania.
              <br></br>
              <br></br> A ty potrzebujesz ludzi takich jak ja. Kogoś, kto nie
              tylko pomoże Ci znaleźć pewność siebie, aby zrobić coś więcej, ale
              także wesprze Cię w tworzeniu życia, które kochasz.
            </p>
          </div>

        </section>
        <DlaczegoJa1 />
        <DlaczegoJa2 isMobile={isMobile} />
        <CzegoPotrzebujesz />
        <Coaching />
        <div ref={DlaJasnosciCoachingRef}>
          {isDlaJasnosciCoachingRef && <DlaJasnosciCoaching />}
        </div>
        <PakietyCoaching />
        <Wsparcie />
        <DlaJasnosciWsparcie />
        <PakietyWsparcie />
        <Joga />
        <DlaJasnosciJoga />
        <PakietyJoga />
        <MojaHistoria />
        <div ref={footerRef}>
          {isFooterRef && (
            <PoczytajPosluchaj
              postImage={postImage}
              postDesc={postDesc}
              postTitle={postTitle}
              postLink={postLink}
            />
          )}
        </div>
        <Quote />
        </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  let post;
  try {
    post = await fetch(
      "https://blog.podobro.pl/wp-json/wp/v2/posts?per_page=1"
    ).then((res) => {
      return res.json();
    });
  } catch (err) {
    console.log("err", err);
  }

  return {
    props: {
      postDesc: post[0].excerpt.rendered,
      postImage: post[0].jetpack_featured_media_url || "",
      postTitle: post[0].title.rendered,
      postLink: post[0].link,
    },
  };
}
