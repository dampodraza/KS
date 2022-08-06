import React from "react";
import Image from "next/image";
import Link from "next/link";
import mailIcon from '../../public/icons/mail.svg'
import instaIcon from '../../public/icons/insta.svg'
import fbIcon from '../../public/icons/fb.svg'
import tiktokIcon from '../../public/icons/tiktok.svg'

const Footer = () => {
  return (
    <footer className="flex items-center	  h-[209px] bg-black text-white 	">
      <div className="flex justify-between flex-col px-7 w-full">
      <p className="text-lg font-spartan-bold text-center mb-4">Kontakt</p>
        <div className="flex flex-row justify-between mb-4">
          <div className="flex flex-row ">
            <Image
              src={`/icons/phone.svg`}
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
            <p className="text-[11px] ml-4 underline">kasia.maria.podraza@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col text-center gap-y-1">
          <p className="text-lg font-spartan-bold mb-2">Obserwuj mnie</p>
          <div className="flex flex-row gap-x-2 justify-center ">
            <Link
              href="https://www.instagram.com/kasiapodraza/"
              passHref={true}
            >
              <Image
                className="cursor-pointer"
                src={instaIcon}
                alt="insta"
                width={40}
                height={40}
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
                width={40}
                height={40}
              />
            </Link>
            <Link href="https://stackoverflow.com/" passHref={true}>
              <Image
                className="cursor-pointer"
                src={tiktokIcon}
                alt="tiktok"
                width={45}
                height={47}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;