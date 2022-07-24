import React, { useEffect } from "react";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
const PoczytajPosluchaj = ({ postImage, postDesc, postTitle, postLink }) => {

  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-32 px-5">
      <p className="text-4xl font-spartan-bold mb-6 text-center">Poczytaj</p>
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
          {postLink && <Link href={postLink} passHref={true}>
            <button className="border border-black	rounded-xl max-w-[100px] text-[12px] bg-white m-auto px-3 py-1 hover:bg-primary-yellow-100">
              czytaj więcej...
            </button>
          </Link>}
        </div>
      </div>
      <p className="text-4xl font-spartan-bold mb-6 text-center">Posłuchaj</p>
      <div className="flex flex-col">
      <iframe style={{borderRadius:'12px', marginBottom: '20px'}} src="https://open.spotify.com/embed/episode/0Qxe0OD0KkihZ4vxLLWToO?utm_source=generator" width="100%" height="152" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      <iframe style={{borderRadius:'12px', marginBottom: '20px'}} src="https://open.spotify.com/embed/episode/3bc77aPPmmU8NxK2XUbt94?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      <iframe style={{borderRadius:'12px', marginBottom: '20px'}} src="https://open.spotify.com/embed/episode/3s3kZU1d4DEqfvoWkImKi9?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>
    </section>
  );
};

export default PoczytajPosluchaj;
