import React from "react";
import Header from "@/components/sections/landingpage/header";
import BackgroundImages from "@/components/background-images";
import Why from "@/components/sections/landingpage/why";

const page = () => {
  return (
    <div className="bg-black relative">
      <div className="relative z-10 bg-black/10 backdrop-blur-[100px] max-sm:backdrop-blur-[50px] no-scrollbar">
        <Header />
        <Why />
      </div>
      <BackgroundImages />
    </div>
  );
};

export default page;
