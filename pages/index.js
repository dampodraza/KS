import React, { useState, useCallback, useRef, useEffect } from "react";
import Head from "next/head";
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
const PoczytajPosluchaj = dynamic(() => import("../components/PoczytajPosluchaj/poczytajposluchaj.component"));
import Quote from "../components/Quote/quote.component";
import Footer from "../components/Footer/footer.component";
import DlaczegoJa2 from "../components/DlaczegoJa/dlaczegoJa2.component";
import DlaczegoJa1 from "../components/DlaczegoJa/dlaczegoJa1.component";
const DlaJasnosciCoaching = dynamic(() =>
  import("../components/DlaJasnosci/coaching.component")
);
import Navigation from "../components/Navigation/navigation.component";
import landingImg from "../public/images/kk5.jpg";
import DlaJasnosciWsparcie from "../components/DlaJasnosci/wsparcie.component";
import DlaJasnosciJoga from "../components/DlaJasnosci/joga.component";
import useOnScreen from "../hooks/useOnScreen.ts";

export default function Home({ postDesc, postImage, postTitle, postLink }) {
  const isMobile = useCheckMobileScreen(800);
  const DlaJasnosciCoachingRef = useRef();
  const footerRef = useRef();
  const footerRefValue = useOnScreen(footerRef);
  const dlaJasnosciCoachingRefValue = useOnScreen(DlaJasnosciCoachingRef);
  const [isDlaJasnosciCoachingRef, setIsDlaJasnosciCoachingRef] =
    useState(false);
  const [isFooterRef, setIsFooterRef] = useState(false);

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
    <div className="bg-[#DFD8D7]">
      <Head>
        <title>podobro Kasia Podraza</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation isMobile={isMobile} />
      <main>
        <section>
          <div className="relative w-screen h-screen mt-[-209px]">
            <Image
              src={landingImg}
              priority
              layout="fill"
              objectFit="cover"
              objectPosition={"right"}
              alt="podobroLogo"
            />
            <p className="absolute text-[20px] top-[209px] left-4 max-w-[230px] text-center font-spartan-bold leading-[22px]">
              Nie zawsze możesz kontrolować to, co dzieje się na zewnątrz. 
              Ale zawsze możesz  kontrolować, to, co dzieje się w środku.
            </p>
          </div>
          {/* <div className="w-full h-screen relative mt-[-209px]">
            <div className="flex h-screen justify-center items-center">
              {!isMobile && (
                <>
                  <div className="text-3xl px-10 font-josefin-italic">
                    Nie zawsze możesz kontrolować to, Ale zawsze możesz
                    kontrolować, to, co dzieje się na zewnątrz.
                  </div>
                  <div className="text-3xl px-10 font-josefin-italic">
                    Nie zawsze możesz kontrolować to, Ale zawsze możesz
                    kontrolować, to, co dzieje się na zewnątrz.
                  </div>
                </>
              )}
            </div>
          </div> */}
        </section>
        <section className="flex bg-[#F8F3F0] justify-center items-center pt-20">
          <div className="px-10 md:px-96 flex flex-col	items-center ">
            <p className="text-3xl text-center md:text-5xl	font-spartan-bold pb-8 ">
              Świat potrzebuje takich ludzi jak Ty.<br></br>A Ty potrzebujesz
              takich ludzi jak ja.
            </p>
            <p className="text-base md:text-3xl text-center leading-[26px] font-spartan-light">
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
        {console.log("dla jasnosci", dlaJasnosciCoachingRefValue)}
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
        <Footer />
      </main>
    </div>
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
      "https://jaknieteraztokiedy.com/wp-json/wp/v2/posts/9524"
    ).then((res) => res.json());
  } catch (err) {
    console.log("err", err);
  }

  return {
    props: {
      postDesc: post.excerpt.rendered,
      postImage: post.jetpack_featured_media_url,
      postTitle: post.title.rendered,
      postLink: post.link,
    },
  };
}
