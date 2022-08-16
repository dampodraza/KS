import React, { useState } from "react";
import Image from "next/image";
import Button from "../../ui/button";

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
            ? "/icons/arrow-up.svg"
            : "/icons/arrow-down.svg"
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
      <div className="mb-4">
      <Button color={bgColor} text={buttonText} />
      </div>
    </>
  );
};

export default ExpandContentCTA;
