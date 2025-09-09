"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Title = () => (
  <div className="h-screen flex items-center sticky top-0">
    <div className="text-[60px] font-body font-bold leading-[60px] border-l-[10px] border-yellow-500 px-[50px]">
      <h1 className="uppercase text-indigo-300">
        Why <br /> Choose
      </h1>
      <h1 className="text-indigo-50">PiCOMiNDS?</h1>
    </div>
  </div>
);

const Why: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const reasons = [
    {
      title: "fast & focused",
      description:
        "We’re quick to understand, fast to deliver, and never compromise on quality.",
    },
    {
      title: "engineering-first",
      description:
        "Clean code, strong architecture, and developer empathy—built in.",
    },
    {
      title: "on-call support",
      description:
        "Need a fix or feature on the fly? We’re just a ping away—literally.",
    },
  ];

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const ctx = gsap.context(() => {
      const container = containerRef.current!;
      const scroller = scrollerRef.current!;

      // gsap.set(scroller, { y: 0 });

      // total slides - 1 = how many screens to scroll
      // const slideCount = scroller.children.length - 1;
      // const scrollDistance = window.innerHeight * slideCount;
      // // scrollDistance /= 4;

      // console.log({ slideCount, scrollDistance });

      // gsap.to(scroller, {
      //   y: -scrollDistance,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: container,
      //     start: "top top",
      //     end: `+=${scrollDistance}`,
      //     scrub: true,
      //     pin: true,
      //     anticipatePin: 1,
      //     invalidateOnRefresh: true,
      //     // markers: true,
      //   },
      // });

      const itemsHeight = scroller.scrollHeight || 0;
      const containerHeight = container.offsetHeight || 0;
      const amountToScroll = itemsHeight - containerHeight;

      console.log({ itemsHeight, containerHeight, amountToScroll });

      gsap.to(scroller, {
        y: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${amountToScroll}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full">
      <div className="app-container flex min-h-screen">
        {/* Left - pinned title */}
        <aside className="w-1/3 min-w-[320px]" id="title">
          <Title />
        </aside>

        {/* Right - scrolling slides */}
        <main className="w-2/3 relative overflow-hidden">
          <div ref={scrollerRef} className="relative">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="min-h-screen flex flex-col justify-center px-12"
              >
                <h3 className="text-[84px] leading-tight font-serif text-indigo-400 lowercase">
                  {r.title}
                </h3>
                <p className="mt-6 text-[20px] max-w-2xl">{r.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Why;
