import React from "react";
import Image from "next/image";

const Quote = ({ isMobile }) => {
  const text = isMobile ? (
    <>
      Nikt nie jest tobą <br></br>i to jest twoja supermoc.
    </>
  ) : (
    <>Nikt nie jest tobą i to jest twoja supermoc.</>
  );
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-8 pb-10 md:pt-24 md:pb-32 ">
      <div className="text-centermb-6">
        {" "}
        <div className="flex justify-center mb-4 md:mb-8 ">
          <img src="/icons/quote.svg" alt="quote" width={!isMobile && "50px"} />
        </div>
      </div>
      <p className="text-2xl mb-6 text-center font-spartan-bold md:font-josefin-italic md:text-3xl">
        {text}
      </p>
    </section>
  );
};

export default Quote;
