import React from "react";
import Header from "@/components/sections/landingpage/header";
import Why from "@/components/sections/landingpage/why";
import Services from "@/components/sections/landingpage/services";
import Quote from "@/components/sections/landingpage/quote";
import Timeline from "@/components/sections/landingpage/timeline";
import Clients from "@/components/sections/landingpage/clients";
import Testimonials from "@/components/sections/landingpage/testimonials";
import Contact from "@/components/sections/landingpage/contact";
import WhyMobile from "@/components/sections/landingpage/why-mobile";
import BgImage from "@/assets/background/picominds.png";

const page = () => {
  return (
    <div className="bg-black relative">
      <div
        className="relative no-scrollbar"
        style={{
          backgroundImage: `url(${BgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-y",
        }}
      >
        <Header />
        <Why />
        <WhyMobile />
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
