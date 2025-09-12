import TextReveal from "@/components/ui/text-reveal";
import Image from "next/image";
import React from "react";

interface TestimonialType {
  testimonial: string;
  img: string;
  name: string;
  position: string;
}

const testimonials: TestimonialType[] = [
  {
    testimonial:
      "Working with the Picominds team has been such a pleasure! We took on a significant project to rebuild our entire platform and the team approached the project with our best interests in mind. They continue to prioritize the end user experience and offer amazing expertise in all of the areas we lack internally. I would personally be lost without this team, their ability to problem solve, their openness to feedback and desire to build the product like it is their own.",
    img: "https://img.freepik.com/premium-photo/childs-head-made-paper-yellow-background_185193-150613.jpg",
    name: "John Doe",
    position: "CEO & Founder @ Picominds",
  },
  {
    testimonial:
      "Working with Picominds and their recommendation service has been a game-changer for our occupational prevention efforts. Our customers are extremely satisfied with the tool's impressive technical capabilities and data-driven approach. But what truly sets it apart is the intuitive and modern user experience it offers, making it a breeze for our clients to navigate. By leveraging this service, our customers have successfully tackled presenteeism and absenteeism, making a significant impact on their workforce's well-being. We highly recommend Picominds to any organization looking to optimize their occupational health and drive positive change.",
    img: "https://img.freepik.com/premium-photo/childs-head-made-paper-yellow-background_185193-150613.jpg",
    name: "John Doe",
    position: "CEO & Founder @ Picominds",
  },
];

const Testimonial = ({ testimonial, img, name, position }: TestimonialType) => {
  return (
    <div className="w-1/2 flex flex-col items-center gap-3">
      <TextReveal className="text-center text-3xl">{testimonial}</TextReveal>
      <Image
        src={img}
        width={100}
        height={100}
        alt="user-1"
        className="object-cover rounded-full"
      />
      <h2 className="text-3xl font-serif text-indigo-50">{name}</h2>
      <h3 className="text-indigo-300 text-xl">{position}</h3>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="app-container py-[50px] pb-[100px]">
      <header className="mb-[100px]">
        <h1 className="text-5xl text-center font-serif text-indigo-50">
          What our clients say 💬
        </h1>
      </header>
      <main className="flex flex-col gap-[100px]">
        <div className="flex items-center justify-start">
          <Testimonial {...testimonials[0]} />
        </div>

        <div className="flex items-center justify-end">
          <Testimonial {...testimonials[1]} />
        </div>
      </main>
    </section>
  );
};

export default Testimonials;
