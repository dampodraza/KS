import React from "react";
import Image from "next/image";
import Link from "next/link";
import mailIcon from '../../public/icons/mail.png'
import instaIcon from '../../public/icons/insta.svg'
import fbIcon from '../../public/icons/fb.svg'
import tiktokIcon from '../../public/icons/tiktok.svg'

const Footer = () => {
  return (
    <footer className="flex items-center	  h-[128px] bg-black text-white 	">
      <div className="flex justify-between flex-row px-10 w-full">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-row ">
            <Image
              src={`/icons/telephone.png`}
              alt="telephone"
              width={18}
              height={18}
            />
            <Link href="tel:535-525-235" passHref={true}>
              <p className=" text-[11px] ml-4 cursor-pointer">535-525-235</p>
            </Link>
          </div>
          <div className="flex flex-rowjustify-center">
            <Image src={mailIcon} alt="mail" width={17} height={16} />
            <p className="text-[11px] ml-4">kasia.maria.podraza@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col text-center gap-y-1">
          <p className="text-[11px]">Obserwuj mnie</p>
          <div className="flex flex-row gap-x-2 justify-center">
            <Link
              href="https://www.instagram.com/kasiapodraza/"
              passHref={true}
            >
              <Image
                className="cursor-pointer"
                src={instaIcon}
                alt="insta"
                width={22}
                height={21}
              />
            </Link>
            <Link
              href="https://www.facebook.com/katarzyna.stefanska1"
              passHref={true}
            >
              <Image
                className="cursor-pointer"
                src={fbIcon}
                alt="fb"
                width={23}
                height={22}
              />
            </Link>
            <Link href="https://stackoverflow.com/" passHref={true}>
              <Image
                className="cursor-pointer"
                src={tiktokIcon}
                alt="tiktok"
                width={26}
                height={27}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
