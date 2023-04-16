import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';
import Button from '../ui/button';

const Poczytaj = ({ postImage, postDesc, postTitle, postLink }) => {
  return (
    // <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-8 px-5">
    <section className='flex flex-col bg-[#F8F3F0]  px-5 text-center'>
      {/* <hr className="flex w-4/5 m-auto"></hr> */}

      {/* <p className='mb-4 text-center font-spartan-bold text-4xl'>Poczytaj</p> */}
      {/* <p className='mb-8 text-sm sm:mb-10'>
        Witaj w mojej przestrzeni. Możesz przeczytać i posłuchać tego, co mi w
        duszy gra.
      </p> */}
      <div className='mb-4 flex flex-row gap-x-4 md:flex-row-reverse'>
        <div className='flex  flex-col'>
          {postImage && (
            <div
              className={
                'relative h-auto w-[150px] overflow-hidden rounded-2xl  md:w-auto'
              }
            >
              <Image
                src={postImage}
                alt='blog-post-image'
                height={191}
                width={150}
                className='h-[191px] object-cover md:hidden'
              />
              <Image
                src={postImage}
                alt='blog-post-image'
                height={2991}
                width={2950}
                className='hidden md:block'
              />
            </div>
          )}
        </div>
        <div className='align-center flex flex-col justify-center'>
          <p className='text-sm font-bold sm:pt-2 sm:text-base md:font-spartan-bold md:text-4xl'>
            Blog
          </p>
          <hr className='m-auto flex w-4/5 '></hr>
          <p className='text-sm font-bold sm:pt-2 sm:text-base md:font-spartan-bold md:text-4xl'>
            {parse(postTitle)}
          </p>
          <div className='font-josefin text-xs sm:px-10 sm:pt-4 sm:text-sm md:font-spartan-light md:text-base'>
            {parse(postDesc.substring(0, 600).concat('...'))}
          </div>
          <div className=''>
            {/* <div className="mb-6"> */}
            {postLink && (
              <Button
                withLink
                text='czytaj więcej...'
                color='bg-white'
                link={postLink}
              />
            )}
          </div>
        </div>
      </div>

      {/* <hr className="flex w-4/5 m-auto"></hr> */}
      {/* <hr className="flex w-4/5 "></hr> */}
    </section>
  );
};

export default Poczytaj;
