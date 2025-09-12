"use client";
import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Quote = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const splitText = new SplitText("#text", {
        type: "lines, words, chars",
      });

      const lines = splitText.words;
      gsap.from(lines, {
        opacity: 0.2,
        stagger: 0.02,
        ease: "back.out",
        duration: 1,
        scrollTrigger: {
          trigger: "#text",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      className="h-dvh flex items-center justify-center app-container"
      ref={container}
    >
      <main className="max-w-1/2 mx-auto flex flex-col justify-center gap-5">
        <p className="text-center text-3xl" id="text">
          At Picominds, we believe greatness begins small. From the tiniest
          sparks of thought, we craft designs that grow, evolve, and echo far
          beyond their origin. <br /> Every idea, no matter how small, carries
          the power to create big impact. <br /> shaping brands, moving people,
          and transforming the world.
        </p>
        <p className="transform translate-x-[50px] flex items-center justify-end text-xl">
          - tiny minds, big impact 💡
        </p>
      </main>
    </section>
  );
};

export default Quote;
