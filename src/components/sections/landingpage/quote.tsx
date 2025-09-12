import React from "react";

import TextReveal from "@/components/ui/text-reveal";

const Quote = () => {
  return (
    <section className="h-dvh flex items-center justify-center app-container">
      <main className="max-w-1/2 mx-auto flex flex-col justify-center gap-5">
        <TextReveal className="text-center text-3xl">
          {
            "At Picominds, we believe greatness begins small. From the tiniest sparks of thought, we craft designs that grow, evolve, and echo far beyond their origin. \n Every idea, no matter how small, carries the power to create big impact. \n shaping brands, moving people, and transforming the world."
          }
        </TextReveal>
        <p className="transform translate-x-[50px] flex items-center justify-end text-xl">
          - tiny minds, big impact 💡
        </p>
      </main>
    </section>
  );
};

export default Quote;
