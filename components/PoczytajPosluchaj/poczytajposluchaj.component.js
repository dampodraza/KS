import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
import Button from "../ui/button";

const PoczytajPosluchaj = ({ postImage, postDesc, postTitle, postLink }) => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-8 px-5">
      <hr className="flex w-4/5 m-auto pb-8"></hr>

      <p className="text-4xl font-spartan-bold mb-4 text-center">Poczytaj</p>
      <p className="mb-5 text-sm sm:mb-10">
        Witaj w mojej przestrzeni. Możesz przeczytać i posłuchać tego, co mi w
        duszy gra.
      </p>
      <div className="flex flex-row gap-x-4 mb-10">
        <div className="flex flex-col">
          {postImage && (
            <div
              className={
                "rounded-2xl relative overflow-hidden w-[140px] h-[191px] sm:w-auto sm:h-auto"
              }
            >
              <Image
                src={postImage}
                alt="image"
                height={191}
                width={150}
                className="object-cover h-[191px]"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center align-center">
          <p className="uppercase text-sm font-bold sm:pt-2 sm:text-base">
            {parse(postTitle)}
          </p>
          <div className="text-xs font-josefin sm:pt-4 sm:text-sm sm:px-10">
            {parse(postDesc.substring(0, 350))}
          </div>
          {postLink && (
            <Button
              withLink
              text="czytaj więcej..."
              color="bg-white"
              link={postLink}
            />
          )}
        </div>
      </div>
      <hr className="flex w-4/5 m-auto"></hr>
      <div className="grid m-10 ">
        <p className="text-4xl font-spartan-bold mb-6 text-center mt-8">
          Posłuchaj
        </p>
        <div className="flex flex-col">
          <iframe
            title="spotifyPodcast"
            style={{ borderRadius: "12px", marginBottom: "20px" }}
            src="https://open.spotify.com/embed/episode/0Qxe0OD0KkihZ4vxLLWToO?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default PoczytajPosluchaj;
