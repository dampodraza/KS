import React, { useState } from "react";
import Image from "next/image";
import Button from "../../ui/button";
import { isMobile } from "react-device-detect";
import Link from "next/link";

const ExpandContentCTA = ({
  title,
  buttonText,
  textColor,
  bgColor,
  contentList,
  name,
}) => {
  const [contentExpanded, setExpanded] = useState(false);

  const expandContent = () => {
    setExpanded(!contentExpanded);
  };

  return (
    <div className="md:px-16 md:py-12 md:bg-[#fff] md:rounded-2xl">
      <div className="lg:grid lg:grid-cols-1 text-center">
        <p className={`text-5xl ${textColor} mb-4`}>{title}</p>
        <div className="md:hidden">
          <Image
            src={
              contentExpanded ? "/icons/arrow-up.svg" : "/icons/arrow-down.svg"
            }
            className="mb-"
            onClick={expandContent}
            alt={`arrow-expand-${name}`}
            width={"23"}
            height={"12"}
          />
        </div>

        {contentExpanded && (
          <ul className="font-spartan mt-3">
            {contentList.map((item) => (
              <li key={item + name}>{item}</li>
            ))}
          </ul>
        )}
        {!isMobile && (
          <ul className="font-spartan mt-3">
            {contentList.map((item) => (
              <li key={item + name}>{item}</li>
            ))}
          </ul>
        )}
        <div className="z-10">
          <Button
            color={bgColor}
            text={buttonText}
            withLink={!isMobile}
            link={`/${name}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpandContentCTA;
