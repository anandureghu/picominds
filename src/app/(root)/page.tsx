import React from "react";
import Header from "@/components/sections/landingpage/header";
import BackgroundImages from "@/components/background-images";
import Why from "@/components/sections/landingpage/why";
import Services from "@/components/sections/landingpage/services";

const page = () => {
  return (
    <div className="bg-black relative">
      <BackgroundImages />

      <div className="relative z-10 no-scrollbar">
        <Header />
        <Why />
        <Services />
      </div>
    </div>
  );
};

export default page;
