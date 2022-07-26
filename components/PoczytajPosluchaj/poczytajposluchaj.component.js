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
import Button from "../ui/button";

const PoczytajPosluchaj = ({ postImage, postDesc, postTitle, postLink }) => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-8 px-5">
      <hr className="flex w-4/5 m-auto pb-8"></hr>

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
              <img
                src={postImage}
                alt="image"
                className="object-cover h-[191px]"
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
              <Button withLink text="czytaj więcej..." color="bg-white" link={postLink}/>
          )}
        </div>
      </div>
      <hr className="flex w-4/5 m-auto"></hr>
      <p className="text-4xl font-spartan-bold mb-6 text-center mt-8">
        Posłuchaj
      </p>
      <div className="flex flex-col">
        <iframe
          style={{ borderRadius: "12px", marginBottom: "20px" }}
          src="https://open.spotify.com/embed/episode/0Qxe0OD0KkihZ4vxLLWToO?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
    
      </div>
    </section>
  );
};

export default PoczytajPosluchaj;
