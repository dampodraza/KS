import React, {useState} from 'react';
import Image from "next/image";

const ExpandContentCTA = ({title, buttonText, textColor, bgColor, contentList, name}) => {
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
        <p className={`text-7xl ${textColor} mb-2`}>{title}</p>
          <Image
            priority
            src={contentExpanded[name] ? "/icons/arrow-up.png": "/icons/arrow-down.svg"}
            onClick={() => expandContent(name)}
            alt={`arrow-expand-${name}`}
            width={"23"}
            height={"12"}
          />
          {contentExpanded[name] && (<ul className="list-disc font-josefin-italic mt-3">
            {contentList.map(item => (
                <li key={item+name}>{item}</li>
            ))}
          </ul>)}
          <button className={`${bgColor} text-white pt-3 pb-2 px-3 mt-3 mb-10 hover:opacity-70`}>
            {buttonText}
          </button>
          </>
    )
};

export default ExpandContentCTA;
