import Carousel from "../Carousel/carousel";
import seeTheGood from "../../public/images/see-the-good.jpg";
import quoteIcon from "../../public/icons/quote.svg"
import Image from "next/image";

const Opinions = () => {
  return (
    <section className="h-screen lg:pt-16">
      <div className="flex flex-row items-center justify-center md:justify-between ">
          <Image
            src={seeTheGood}
            alt="see-the-good"
            width={511}
            height={519}
            className="rounded-[35px] hidden md:block"
          />
        <div className="flex flex-row justify-center pt-10	">
          <div className="flex flex-col justify-center item-center">
            <div className="flex justify-center item-center">
              {" "}
              <Image src={quoteIcon} alt="quote" width={50} />
            </div>

            <div className="pb-10">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opinions;
