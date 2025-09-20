import React from "react";
import BackgroundImages from "@/components/background-images";
import Header from "@/components/sections/landingpage/header";
import Why from "@/components/sections/landingpage/why";
import Services from "@/components/sections/landingpage/services";
import Quote from "@/components/sections/landingpage/quote";
import Timeline from "@/components/sections/landingpage/timeline";
import Clients from "@/components/sections/landingpage/clients";
import Testimonials from "@/components/sections/landingpage/testimonials";
import Contact from "@/components/sections/landingpage/contact";

const page = () => {
  return (
    <div className="bg-black relative">
      <BackgroundImages />

      <div className="relative z-10 no-scrollbar">
        <Header />
        <Why />
        <Services />
        <Quote />
        <Timeline />
        <Clients />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default page;
