"use client";

import React, { useRef } from "react";
import Rocket from "@/assets/icons/rocket.png";
import Medal from "@/assets/icons/medal.png";
import Puzzle from "@/assets/icons/puzzle.png";
import PaintingKit from "@/assets/icons/painting-kit.png";
import Dumbell from "@/assets/icons/dumbell.png";
import Mobile from "@/assets/icons/mobile.png";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const services = [
    {
      title: "Web Design &\nDevelopment",
      description:
        "From landing pages to full-scale platforms, we make the web work for you.",
      bottomImg: Medal,
      topImg: Rocket,
    },
    {
      title: "UI/UX\nDesign",
      description: "Pixel-perfect, user-first design that converts.",
      bottomImg: Puzzle,
      topImg: PaintingKit,
    },
    {
      title: "Mobile\nDevelopment",
      description: "Android, iOS, or cross-platform—we build apps users love.",
      bottomImg: Dumbell,
      topImg: Mobile,
    },
  ];

  const container = useRef<HTMLDivElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);
  const items = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!container.current || !items.current) return;

      const ctx = gsap.context(() => {
        const itemsWidth = items.current?.scrollWidth || 0;
        const containerWidth = container.current?.offsetWidth || 0;
        const amountToScroll = itemsWidth - containerWidth;

        const timeline = gsap.timeline();

        timeline.to(wrapper.current, {
          x: -amountToScroll,
          ease: "none",
          // zIndex: 9999999,
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: `+=${amountToScroll}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            pinType: "fixed",
          },
        });
        // .to(container.current, { position: "relative" }, "<");
      }, container);

      return () => ctx.revert();
    },
    { scope: container }
  );

  return (
    <section className="relative w-full h-full">
      <div className="min-h-screen py-[50px] overflow-hidden" ref={container}>
        <header className="flex items-center justify-between app-container flex-wrap gap-5">
          <h1 className="section-title text-indigo-50 font-semibold">
            Services
          </h1>
          <h2 className="text-2xl">What we can help you build 👇</h2>
        </header>
        <main ref={wrapper} id="wrapper" className="w-fit h-full">
          <div
            ref={items}
            id="items"
            className="flex overflow-x-scroll items-center justify-left no-scrollbar h-full"
          >
            {services.map((service) => {
              return (
                <div
                  key={service.title}
                  className="relative h-full overflow-visible flex flex-col items-center justify-center min-w-screen w-screen"
                >
                  <div className="relative w-1/2 transform translate-x-[10%]">
                    <h1 className="font-serif text-7xl whitespace-pre-line mb-5">
                      {service.title}
                    </h1>

                    <p className="text-2xl">{service.description}</p>
                    <Image
                      src={service.topImg}
                      alt={`top-image-${service.title}`}
                      width={200}
                      height={200}
                      className="absolute top-0 right-0 transform translate-x-[5vw] -translate-y-[10vw]"
                    />
                    <Image
                      src={service.bottomImg}
                      alt={`bottom-image-${service.title}`}
                      width={200}
                      height={200}
                      className="absolute bottom-0 left-0 transform translate-y-[10vw] -translate-x-[15vw]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Services;
