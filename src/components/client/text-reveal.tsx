"use client";

import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, SplitText);

const TextReveal = ({
  className,
  children,
}: {
  children: string;
  className?: React.ComponentProps<"p">["className"];
}) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    const splitText = new SplitText(textRef.current, {
      type: "lines, words, chars",
    });

    const lines = splitText.words;
    gsap.from(lines, {
      opacity: 0.2,
      stagger: 0.01,
      ease: "back.out",
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 70%",
        scrub: true,
      },
    });
  });

  return (
    <div>
      <p className={cn("whitespace-pre-line", className)} ref={textRef}>
        {children}
      </p>
    </div>
  );
};

export default TextReveal;
