import TextReveal from "@/components/client/text-reveal";
import { cn } from "@/lib/utils";
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
      "The UI/UX Picominds delivered for our payroll project was beyond our expectations. They converted a very complex system into a clean, intuitive interface that our clients now love working with. The attention to detail, typography, color balance, and user flows were absolutely on point. Their design understanding is world-class, and their communication made the entire process smooth.",
    img: "https://img.freepik.com/premium-photo/childs-head-made-paper-yellow-background_185193-150613.jpg",
    name: "Bichu",
    position: "Interland Software Solutions",
  },
  {
    testimonial:
      "Picominds created a stunning portfolio website for our wedding agency. The design is elegant, fast, and beautifully showcases our films and photography work. Most importantly, they understood our creative vision and translated it into a website that truly reflects our brand. Clients now compliment our website all the time, and it has improved our lead conversions significantly.",
    img: "https://img.freepik.com/premium-photo/childs-head-made-paper-yellow-background_185193-150613.jpg",
    name: "Melvin",
    position: "CEO & Founder @ Marry Gold Films",
  },
  {
    testimonial:
      "Picominds built exactly what our business needed. We were managing our latex stock, customers, suppliers and daily delivery manually, and the new app has transformed the way we work. The system is fast, accurate, and tailored perfectly to our workflow. Their understanding of our business problems and ability to turn them into a simple app was impressive. I’ve never seen our operations run this smoothly.",
    img: "https://img.freepik.com/premium-photo/childs-head-made-paper-yellow-background_185193-150613.jpg",
    name: "Alan",
    position: "Founder @ Kalayil Latext & Traders",
  },

  {
    testimonial:
      "Working with Picominds was an absolute delight. They built our entire Shopify store with a premium look that matches our spice brand perfectly. The product pages, checkout flow, and mobile optimization were done exceptionally well. Our online sales increased immediately after launch, and the website feels clean, modern, and easy to manage. We highly recommend them for any e-commerce project.",
    img: "https://img.freepik.com/premium-photo/childs-head-made-paper-yellow-background_185193-150613.jpg",
    name: "Dhanya P",
    position: "Co-Founder @ The Herbary Premium Spices",
  },
];

const Testimonial = ({ testimonial, img, name, position }: TestimonialType) => {
  return (
    <div className="w-1/2 max-md:w-full max-md:text-justify flex flex-col items-center gap-3">
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
        {/* <div className="flex items-center justify-start">
          <Testimonial {...testimonials[0]} />
        </div>

        <div className="flex items-center justify-end">
          <Testimonial {...testimonials[1]} />
        </div> */}

        {testimonials.map((t, i) => (
          <div
            className={cn(
              "flex items-center",
              i % 2 === 0 ? "justify-start" : "justify-end"
            )}
            key={i}
          >
            <Testimonial {...t} />
          </div>
        ))}
      </main>
    </section>
  );
};

export default Testimonials;
