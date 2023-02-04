import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import mailIcon from '../../public/icons/mail.svg';
import instaIcon from '../../public/icons/insta.svg';
import fbIcon from '../../public/icons/fb.svg';
import tiktokIcon from '../../public/icons/tiktok-white.svg';

const Footer = () => {
  return (
    <footer className='flex items-center h-[257px] bg-black text-white	'>
      <div className='flex justify-between flex-col pt-4 px-6 py-6 w-full md:flex-row md:px-48 md:items-center'>
        <p className='text-lg font-spartan-bold text-center mb-4 md:hidden'>
          Kontakt
        </p>
        <div className='flex flex-col align-left mb-4 pl-14 md:pl-0 md:mb-0'>
          <div className='flex flex-row mb-4 md:mb-6'>
            <Image
              src={`/icons/tele.svg`}
              alt='telephone'
              width={34}
              height={34}
            />
            <Link href='tel:535-525-235' passHref={true}>
              <p className=' text-lg ml-4 cursor-pointer md:text-2xl'>
                535-525-235
              </p>
            </Link>
          </div>
          <div className='flex flex-rowjustify-center'>
            <Image src={mailIcon} alt='mail' width={35} height={32} />
            <p className='text-sm ml-4 underline md:text-2xl'>
              kasia.maria.podraza@gmail.com
            </p>
          </div>
        </div>
        <div className='flex flex-col text-center gap-y-1'>
          <p className='text-lg font-spartan-bold mb-2 md:text-2xl'>
            Obserwuj mnie
          </p>
          <div className='flex flex-row gap-x-2 justify-center md:gap-x-6'>
            <Link
              href='https://www.instagram.com/kasiapodraza/'
              passHref={true}
            >
              <Image
                className='cursor-pointer'
                src={instaIcon}
                alt='insta'
                width={40}
                height={40}
              />
            </Link>
            <Link
              href='https://www.facebook.com/katarzyna.stefanska1'
              passHref={true}
            >
              <Image
                className='cursor-pointer'
                src={fbIcon}
                alt='fb'
                width={40}
                height={40}
              />
            </Link>
            <Link href='https://stackoverflow.com/' passHref={true}>
              <Image
                className='cursor-pointer'
                src={tiktokIcon}
                alt='tiktok'
                width={41}
                height={41}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
