import React from "react";
import P from "@/assets/background/P.svg";
import i from "@/assets/background/i.svg";
import C from "@/assets/background/C.svg";
import O from "@/assets/background/O.svg";
import Image from "next/image";

const BackgroundImages = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 flex flex-col justify-start items-start">
      <Image src={P} alt="P" className="relative top-[10vh]" />
      <Image src={i} alt="i" className="relative top-[10vh]" />
      <Image src={C} alt="i" className="relative top-[10vh]" />
      <Image src={O} alt="i" className="relative top-[10vh]" />
    </div>
  );
};

export default BackgroundImages;
