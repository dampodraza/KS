import React from "react";
import Image from "next/image";

const Quote = () => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-32 pb-10">
      <div className="text-centermb-6">
        {" "}
        <div className="flex justify-center mb-4">
          <img src="/icons/quote.svg" alt="quote" />
        </div>
      </div>
      <p className="text-2xl mb-6 text-center font-spartan-bold">
        Nikt nie jest tobą <br></br>i to jest twoja supermoc.
      </p>
    </section>
  );
};

export default Quote;
