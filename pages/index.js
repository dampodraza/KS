import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import CzegoPotrzebujesz from "../components/CzegoPotrzebujesz/czegopotrzebujesz.component";
import MojaHistoria from "../components/MojaHistoria/mojahistoria.component";
import { isMobile } from "react-device-detect";
import PoczytajPosluchaj from "../components/PoczytajPosluchaj/poczytajposluchaj.component";
import Quote from "../components/Quote/quote.component";
import DlaczegoJa from "../components/DlaczegoJa/dlaczegoJa.component";
import landingImg from "../public/images/landing-mobile.jpg";
import landingImgDesktop from "../public/images/landing-desktop5.jpg";
import useOnScreen from "../hooks/useOnScreen.ts";
import Layout from "../components/ui/layout";

export default function Home({ postDesc, postImage, postTitle, postLink }) {
  const DlaJasnosciCoachingRef = useRef();
  const footerRef = useRef();
  const footerRefValue = useOnScreen(footerRef);
  const dlaJasnosciCoachingRefValue = useOnScreen(DlaJasnosciCoachingRef);
  const [isDlaJasnosciCoachingRef, setIsDlaJasnosciCoachingRef] =
    useState(false);
  const [isFooterRef, setIsFooterRef] = useState(false);
  const [open, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

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
    <Layout noPadding={true}>
      <section>
        <div className="relative w-screen h-screen mt-[-225px] md:hidden">
          <Image src={landingImg} alt="podobroLogo" />
          <p className="absolute text-[20px] top-[215px] left-4 max-w-[230px] text-center font-spartan-bold leading-[22px]">
            Nie zawsze możesz kontrolować to, co dzieje się na zewnątrz. 
            Ale zawsze możesz  kontrolować, to, co dzieje się w środku.
          </p>
        </div>
        <div className="relative w-screen h-screen px-1 hidden md:block">
          <Image src={landingImgDesktop} priority alt="podobroLogo" />
          <p className="absolute text-[30px] top-[40%] left-28 max-w-[480px] text-center font-spartan-bold leading-[35px]">
            Nie zawsze możesz kontrolować to, co dzieje się na zewnątrz. 
          </p>
          <p className="absolute text-[30px] top-[40%] right-28 max-w-[450px] text-center font-spartan-bold leading-[35px]">
            Ale zawsze możesz konasdtrolować to, co dzieje się w środku.
          </p>
        </div>
      </section>
      <div className="md:px-32">
        <section className="flex bg-[#F8F3F0] justify-center items-center pt-20">
          <div className="px-10 md:px-20 grid items-center md:grid-cols-1 gap-4">
            <p className="text-3xl md:text-4xl md:leading-[60px] text-center font-spartan-bold pb-8 md:pb-4">
              Świat potrzebuje takich ludzi jak Ty.<br></br>A Ty potrzebujesz
              takich ludzi jak ja.
            </p>
            <div className="text-base md:text-xl grid grid-cols-1 gap-4 text-center font-spartan-light leading-[26px] md:leading-10">
              <p>
                Wierzę, że każdy z nas ma potencjał do tworzenia zmian, które
                chcemy widzieć w świecie. Ale zbyt często utknęliśmy, czując, że
                nie możemy. Chcę to zmienić.
              </p>
              <p>
                {" "}
                Świat potrzebuje ludzi takich jak ty. Ludzi obdarzonych
                współczuciem i pragnieniem zmiany. Ludzi, którzy widzą problem i
                szukają rozwiązania.
              </p>
              <p>
                A ty potrzebujesz ludzi takich jak ja. Kogoś, kto nie tylko
                pomoże Ci znaleźć pewność siebie, aby zrobić coś więcej, ale
                także wesprze Cię w tworzeniu życia, które kochasz.
              </p>
            </div>
          </div>
        </section>
        <DlaczegoJa />
        <CzegoPotrzebujesz />
        <MojaHistoria />
        <PoczytajPosluchaj
          postImage={postImage}
          postDesc={postDesc}
          postTitle={postTitle}
          postLink={postLink}
        />
        <Quote isMobile={isMobile} />
      </div>
    </Layout>
  );
}
// TODO: add next seo on each page
export async function getStaticProps() {
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );
  let post;
  try {
    post = await fetch("https://blog.podobro.pl/wp-json/wp/v2/posts?per_page=1")
      .then((res) => {
        return res.json();
      })
      .then();
  } catch (err) {
    console.log("err", err);
  }

  return {
    props: {
      postDesc: post[0].excerpt.rendered,
      postImage: post[0].yoast_head_json.og_image[0].url || "",
      postTitle: post[0].title.rendered,
      postLink: post[0].link,
    },
  };
}
