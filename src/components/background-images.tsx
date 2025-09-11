import React from "react";
import P from "@/assets/background/P.svg";
import i from "@/assets/background/i.svg";
import C from "@/assets/background/C.svg";
import O from "@/assets/background/O.svg";
import M from "@/assets/background/M.svg";
import N from "@/assets/background/N.svg";
import D from "@/assets/background/D.svg";
import S from "@/assets/background/S.svg";

import Image from "next/image";

const BackgroundImages = () => {
  return (
    <div className="absolute top-0 left-0 max-w-screen w-screen overflow-x-hidden h-full z-[0] flex flex-col justify-start items-start">
      <div className="relative">
        <Image src={P} alt="P" className="relative top-[10vh]" />
        <Image src={i} alt="i" className="relative top-[10vh]" />
        <Image src={C} alt="C" className="relative top-[10vh]" />
        <Image src={O} alt="O" className="relative top-[10vh]" />
        <Image
          src={M}
          alt="M"
          className="relative top-[10vh] scale-150 my-52 transform -translate-x-[20%]"
        />
        <Image src={i} alt="i" className="relative top-[10vh]" />
        <Image src={N} alt="N" className="relative top-[10vh]" />
        <Image src={D} alt="D" className="relative top-[10vh]" />
        <Image src={S} alt="S" className="relative top-[10vh]" />

        <div className="absolute top-0 left-0 h-full w-full bg-black/10 app-blur" />
      </div>
    </div>
  );
};

export default BackgroundImages;
