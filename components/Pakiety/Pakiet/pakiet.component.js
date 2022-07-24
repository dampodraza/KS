import React from "react";
import Image from "next/image";

const Pakiet = ({ description, price, imgSrc, bgColor, rounded }) => {
  return (
    <div>
      <div className="flex flex-row items-center mb-10">
        <div className="flex w-1/2 justify-center">
          <div className="relative">
            <div
              className={`${
                rounded === "full" ? "rounded-[100px]" : "rounded-2xl"
              } absolute ${bgColor} w-[117px] h-[173px] bottom-[16px] right-[16px]`}
            ></div>
            <div className={`${
                rounded === "full" ? "rounded-[100px]" : "rounded-2xl"
              } relative overflow-hidden w-[117px] h-[173px]`}>
              <Image src={imgSrc} alt="image" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <p className="text-sm font-josefin-italic mb-4 px-2 ">{description}</p>
          <p className="text-2xl font-spartan-bold">{price} zł</p>
        </div>
      </div>
    </div>
  );
};

export default Pakiet;
