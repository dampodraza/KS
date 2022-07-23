import React from 'react';
import Image from 'next/image'

const IconBlock = ({iconName, title, description}) => {
    return (
        <div className="p-2 text-center">
            <Image src={`/icons/${iconName}.png`} alt={iconName} width='70%' height="70%"/>
            <p className="text-base font-bold">{title}</p>
            <p className="text-sm px-5 max-w-[200px] font-josefin-italic">{description}</p>
        </div>
    )
}

export default IconBlock;