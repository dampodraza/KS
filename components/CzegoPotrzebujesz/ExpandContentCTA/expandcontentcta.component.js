import React, { useState } from "react";
import Image from "next/image";

const ExpandContentCTA = ({
  title,
  buttonText,
  textColor,
  bgColor,
  contentList,
  name,
}) => {
  const [contentExpanded, setExpanded] = useState({
    coaching: false,
    wsparcie: false,
    joga: false,
  });

  const expandContent = (name) => {
    setExpanded({ ...contentExpanded, [name]: !contentExpanded[name] });
  };
  return (
    <>
      <p className={`text-5xl ${textColor} mb-4`}>{title}</p>
      <Image
        src={
          contentExpanded[name]
            ? "/icons/arrow-up.png"
            : "/icons/arrow-down.png"
        }
        className="mb-"
        onClick={() => expandContent(name)}
        alt={`arrow-expand-${name}`}
        width={"23"}
        height={"12"}
      />
      {contentExpanded[name] && (
        <ul className="list-disc font-spartan mt-3">
          {contentList.map((item) => (
            <li key={item + name}>{item}</li>
          ))}
        </ul>
      )}
      <button
        className={`${bgColor} border border-black rounded-2xl pt-1 pb-1 px-6 mt-3 mb-10 mt-5 hover:opacity-70`}
      >
        <span className=" font-spartan-bold text-xs">{buttonText}</span>
      </button>
    </>
  );
};

export default ExpandContentCTA;
