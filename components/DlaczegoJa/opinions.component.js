import Carousel from "../Carousel/carousel";
import seeTheGood from "../../public/images/see-the-good.jpg";
import Image from "next/image";
const Opinions = ({ isMobile }) => {
  return (
    <section className="bg-[#F8F3F0] h-screen">
      <div className="flex flex-row items-center justify-center ">
        {!isMobile && (
          <Image
            src={seeTheGood}
            alt="see-the-good"
            width={511}
            height={519}
            className="rounded-[35px]"
          />
        )}
        <div className="flex flex-row justify-center pt-10 pl-12	">
          <div className="flex flex-col justify-center item-center">
            <div className="flex justify-center item-center">
              {" "}
              <img src="/icons/quote.svg" alt="quote" />
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
