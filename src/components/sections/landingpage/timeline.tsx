import TimelineAnimation from "@/components/client/timeline-animation";
import React from "react";

const Timeline = () => {
  return (
    <section className="min-h-dvh max-md:hidden">
      <header className="w-fit mx-auto flex flex-col items-center justify-center gap-3 py-[50px]">
        <h1 className="text-5xl font-serif text-indigo-50">Our Project Flow</h1>
        <h2 className="text-2xl text-indigo-300">simple, fast, effective.</h2>
      </header>
      <main>
        <TimelineAnimation />
      </main>
    </section>
  );
};

export default Timeline;
