import React, { useEffect } from "react";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import imgSrc from "../../public/images/podcast-img.png";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const PoczytajPosluchaj = ({ postImage, postDesc, postTitle, postLink }) => {

  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-10 px-5">
      <p className="text-4xl font-spartan-bold mb-4 text-center">Poczytaj</p>
      <p className="mb-5 text-sm">
        Witaj w mojej przestrzeni. Możesz przeczytać i posłuchać tego, co mi w
        duszy gra.
      </p>
      <div className="flex flex-row gap-x-4 mb-10">
        <div className="flex flex-col">
          {postImage && (
            <div
              className={
                "rounded-2xl relative overflow-hidden w-[140px] h-[191px]"
              }
            >
              <Image
                src={postImage}
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center align-center">
          <p className="uppercase text-sm font-bold">{parse(postTitle)}</p>
          <div className="text-xs font-josefin">
            {parse(postDesc.substring(0, 350))}
          </div>
          {postLink && (
            <Link href={postLink} passHref={true}>
              <button className="border border-black	rounded-xl max-w-[100px] text-[12px] bg-white m-auto px-3 py-1 hover:bg-primary-yellow-100">
                czytaj więcej...
              </button>
            </Link>
          )}
        </div>
      </div>
      <hr className="flex w-4/5 m-auto"></hr>
      <p className="text-4xl font-spartan-bold mb-6 text-center mt-8">Posłuchaj</p>
      {/* <div className="flex flex-row items-center mb-6">
        <div className="relative overflow-hidden rounded-lg w-[63px] h-[75px] mr-2">
          <Image src={imgSrc} alt="image" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col align-left">
          <p className="text-xs pb-1 ">UMIEJĘTNOSC PRACY W STRESIE</p>
          <audio controls className="w-[260px]">
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
          </audio>
        </div>
      </div> */}
      <div className="flex flex-col gap-y-6">
      <Paper sx={{ p: 2, backgroundColor: "#F3F5F6" }} elevation={3}>
        <div className="flex flex-row">
          <div className="relative overflow-hidden rounded-lg w-[50px] h-[65px] mr-2">
            <Image src={imgSrc} alt="image" layout="fill" objectFit="cover" />
          </div>
          <div className="flex flex-col ">
            <p className="text-xs  ">UMIEJĘTNOSC PRACY W STRESIE</p>
            <audio controls className="w-[240px]">
              <source src="https://file-examples.com/storage/fe52cb0c4862dc676a1b341/2017/11/file_example_MP3_700KB.mp3" />
            </audio>
          </div>
        </div>
      </Paper>
      <Paper sx={{ p: 2, backgroundColor: "#F3F5F6" }} elevation={3}>
        <div className="flex flex-row">
          <div className="relative overflow-hidden rounded-lg w-[50px] h-[65px] mr-2">
            <Image src={imgSrc} alt="image" layout="fill" objectFit="cover" />
          </div>
          <div className="flex flex-col ">
            <p className="text-xs  ">UMIEJĘTNOSC PRACY W STRESIE</p>
            <audio controls className="w-[240px]">
              <source src="https://file-examples.com/storage/fe52cb0c4862dc676a1b341/2017/11/file_example_MP3_700KB.mp3" />
            </audio>
          </div>
        </div>
      </Paper>
      <Paper sx={{ p: 2, backgroundColor: "#F3F5F6" }} elevation={3}>
        <div className="flex flex-row">
          <div className="relative overflow-hidden rounded-lg w-[50px] h-[65px] mr-2">
            <Image src={imgSrc} alt="image" layout="fill" objectFit="cover" />
          </div>
          <div className="flex flex-col ">
            <p className="text-xs  ">UMIEJĘTNOSC PRACY W STRESIE</p>
            <audio controls className="w-[240px]">
              <source src="https://file-examples.com/storage/fe52cb0c4862dc676a1b341/2017/11/file_example_MP3_700KB.mp3" />
            </audio>
          </div>
        </div>
      </Paper>
      </div>
      
    </section>
  );
};

export default PoczytajPosluchaj;
